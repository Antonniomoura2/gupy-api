import { Document } from 'mongoose';
import {ISale} from "../dtos/create-business.dto";

export interface IBusiness extends Document {
    v: number;
    matches_filters: {
        current: []
    };
    retry: number;
    current: ISale;
    meta: {
        v : number;
        action : string;
        object : string,
        id : number;
        company_id : number;
        user_id : number;
        host : string;
        timestamp : number;
        timestamp_micro : number,
        request_timestamp : number,
        permitted_user_ids : [],
        trans_pending : boolean,
        is_bulk_update : boolean,
        pipedrive_service_name : boolean,
        change_source : string,
        wa_bookmark_id : number,
        matches_filters : {
            current : []
        },
        prepublish_timestamp : number;
        webhook_id : string
    };
    previous: ISale;
    event: string;
}
