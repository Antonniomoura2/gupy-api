export class CreateBusinessDto {
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

export class ISale {
    id : number;
    creator_user_id : number;
    user_id : number;
    person_id : number;
    org_id : string;
    stage_id : number;
    title : string;
    value : number;
    currency : string;
    add_time : string;
    update_time : string;
    stage_change_time : string;
    active : boolean;
    deleted : boolean;
    status : string;
    probability : string;
    next_activity_date : string;
    next_activity_time : string;
    next_activity_id : string;
    last_activity_id : string;
    last_activity_date : string;
    lost_reason : string;
    visible_to : string;
    close_time : string;
    pipeline_id : number;
    won_time : string;
    first_won_time : string;
    lost_time : string;
    products_count : number;
    files_count : number;
    notes_count : number;
    followers_count : number;
    email_messages_count : number;
    activities_count : number;
    done_activities_count : number;
    undone_activities_count : number;
    participants_count : number;
    expected_close_date : string;
    last_incoming_mail_time : string;
    last_outgoing_mail_time : string;
    label : string;
    renewal_type : string;
    stage_order_nr : number;
    person_name : string;
    org_name : string;
    next_activity_subject : string;
    next_activity_type : string;
    next_activity_duration : string;
    next_activity_note : string;
    group_id : string;
    group_name : string;
    formatted_value : string;
    weighted_value : number;
    formatted_weighted_value : string;
    weighted_value_currency : string;
    rotten_time : string;
    owner_name : string;
    cc_email : string;
    org_hidden : boolean;
    person_hidden : boolean
}
