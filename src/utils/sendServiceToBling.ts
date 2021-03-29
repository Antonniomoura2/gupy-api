import axios from "axios";

const sendServiceToBling = async (xmlHeader) => {
    try {
        const result = await axios.post(process.env.API_BLING, null, {
            params: {
                apikey: process.env.API_TOKEN_BLING,
                xml: xmlHeader
            }
        })
        return result.data
        // console.log(JSON.stringify(xmlHeader, null, 2))
    } catch (e) {
        // console.log(e)
    }
}

export default sendServiceToBling
