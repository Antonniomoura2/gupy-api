import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateBusinessDto} from "./dtos/create-business.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IBusiness} from "./interfaces/business.interface";
import sendServiceToBling from "../utils/sendServiceToBling";

const parserXml2Json = require('xml-js');
const fakerator = require("fakerator")()


@Injectable()
export class BusinessService {
    constructor(
        @InjectModel('business') private readonly businessModel: Model<IBusiness>,
    ) {
    }

    async sendToBling(createBusinessDto: CreateBusinessDto) {
        const data  = {
            id: createBusinessDto.current.id,
            originalItem: createBusinessDto.current,
            parsedItem: JSON.parse(parserXml2Json.xml2json(this.normalize(createBusinessDto.current)))
        }
        const findBusiness = await this.businessModel.findOne({id: createBusinessDto.current.id}).exec()
        console.log(createBusinessDto.previous.status)
        if (findBusiness && createBusinessDto.current.status === "won" && createBusinessDto.previous.status === "won") {
            throw new HttpException({
                status: HttpStatus.NOT_ACCEPTABLE,
                error: 'Item não ganho',
            }, HttpStatus.NOT_ACCEPTABLE);
        }
        await sendServiceToBling(this.normalize(createBusinessDto.current))
        return await this.businessModel.create(data);
    }

    normalize(current) {
        return `<?xml version="1.0" encoding="UTF-8"?>
                    <pedido>
                        <cliente>
                            <nome>${fakerator.names.firstName()}</nome>
                            <tipoPessoa>J</tipoPessoa>
                            <endereco>${fakerator.address.street()}</endereco>
                            <cpf_cnpj>00000000000000</cpf_cnpj>
                            <ie>3067663000</ie>
                            <numero>${fakerator.address.buildingNumber()}</numero>
                            <complemento>Sala 54</complemento>
                            <bairro>${fakerator.address.streetName()}</bairro>
                            <cep>95.700-000</cep>
                            <cidade>${fakerator.address.city()}</cidade>
                            <uf>${fakerator.address.countryCode()}</uf>
                            <fone>5481153376</fone>
                            <email>teste@teste.com.br</email>
                        </cliente>
                        <itens>
                            <item>
                                <codigo>${current.id}</codigo>
                                <descricao>${current.title}</descricao>
                                <un>Pç</un>
                                <qtde>1</qtde>
                                <vlr_unit>${current.value}</vlr_unit>
                            </item>
                        </itens>
                        <vlr_frete>0</vlr_frete>
                        <vlr_desconto>0</vlr_desconto>
                        <obs>Testando o campo observações do pedido</obs>
                        <obs_internas>Testando o campo observações internas do pedido</obs_internas>
                    </pedido>`
    }

    async getAllBusiness() {
        return await this.businessModel.find();
    }
}
