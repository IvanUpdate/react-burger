import {TFeedData} from "../../types";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_DATA: 'WS_GET_DATA' = 'WS_GET_DATA';
export const WS_GET_DATA_ERROR: 'WS_GET_DATA_ERROR' = 'WS_GET_DATA_ERROR';

export const WS_CONNECTION_AUTH_START: 'WS_CONNECTION_AUTH_START' = 'WS_CONNECTION_AUTH_START';
export const WS_CONNECTION_AUTH_SUCCESS: 'WS_CONNECTION_AUTH_SUCCESS' = 'WS_CONNECTION_AUTH_SUCCESS';
export const WS_CONNECTION_AUTH_ERROR: 'WS_CONNECTION_AUTH_ERROR' = 'WS_CONNECTION_AUTH_ERROR';
export const WS_CONNECTION_AUTH_CLOSED: 'WS_CONNECTION_AUTH_CLOSED' = 'WS_CONNECTION_AUTH_CLOSED';
export const WS_GET_AUTH_DATA: 'WS_GET_AUTH_DATA' = 'WS_GET_AUTH_DATA';
export const WS_GET_AUTH_DATA_ERROR: 'WS_GET_AUTH_DATA_ERROR' = 'WS_GET_AUTH_DATA_ERROR';

interface IWS_CONNECTION_SUCCESS {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

interface IWS_CONNECTION_ERROR {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: any
}

interface IWS_CONNECTION_CLOSED {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

interface IWS_GET_DATA {
    readonly type: typeof WS_GET_DATA;
    readonly payload: any;
}

interface IWS_GET_DATA_ERROR {
    readonly type: typeof WS_GET_DATA_ERROR;
    readonly payload: any;
}

interface IWS_CONNECTION_START {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string;
}

interface IWS_CONNECTION_AUTH_START {
    readonly type: typeof WS_CONNECTION_AUTH_START;
    readonly payload: string;
}

interface IWS_CONNECTION_AUT_SUCCESS {
    readonly type: typeof WS_CONNECTION_AUTH_SUCCESS;
}

interface IWS_CONNECTION_AUTH_ERROR {
    readonly type: typeof WS_CONNECTION_AUTH_ERROR;
    readonly payload: any
}

interface IWS_CONNECTION_AUTH_CLOSED {
    readonly type: typeof WS_CONNECTION_AUTH_CLOSED;
}

interface IWS_GET_AUTH_DATA {
    readonly type: typeof WS_GET_AUTH_DATA;
    readonly payload: any;
}

interface IWS_GET_AUTH_DATA_ERROR {
    readonly type: typeof WS_GET_AUTH_DATA_ERROR;
    readonly payload: any;
}


export const wsConnectionStart = (url: string) => {
    return {
        type: WS_CONNECTION_START,
        payload: url
    };
};

export const wsConnectionSuccess = () => {
    return {
        type: WS_CONNECTION_SUCCESS
    };
};

export const wsConnectionError = (error:Event) => {
    return {
        type: WS_CONNECTION_ERROR,
        payload: error
    };
};

export const wsConnectionClosed = () => {
    return {
        type: WS_CONNECTION_CLOSED
    };
};

export const wsGetData = (feed: TFeedData ) => {
    return {
        type: WS_GET_DATA,
        payload: feed
    };
};

export const wsGetDataError = (error:any) => {
    return {
        type: WS_GET_DATA_ERROR,
        payload: error
    };
};

export const wsConnectionStartAuth = (url: string) => {
    return {
        type: WS_CONNECTION_AUTH_START,
        payload: url
    };
};

export const wsConnectionSuccessAuth = () => {
    return {
        type: WS_CONNECTION_AUTH_SUCCESS
    };
};

export const wsConnectionErrorAuth = (error:Event) => {
    return {
        type: WS_CONNECTION_AUTH_ERROR,
        payload: error
    };
};

export const wsConnectionClosedAuth = () => {
    return {
        type: WS_CONNECTION_AUTH_CLOSED
    };
};

export const wsGetDataAuth = (feed: TFeedData ) => {
    return {
        type: WS_GET_AUTH_DATA,
        payload: feed
    };
};

export const wsGetDataErrorAuth = (error:any) => {
    return {
        type: WS_GET_AUTH_DATA_ERROR,
        payload: error
    };
};

export type TWSActions =
    IWS_CONNECTION_ERROR |
    IWS_CONNECTION_SUCCESS |
    IWS_CONNECTION_CLOSED |
    IWS_GET_DATA |
    IWS_GET_DATA_ERROR |
    IWS_CONNECTION_START |
    IWS_CONNECTION_AUTH_START |
    IWS_CONNECTION_AUT_SUCCESS |
    IWS_CONNECTION_AUTH_CLOSED |
    IWS_CONNECTION_AUTH_ERROR |
    IWS_GET_AUTH_DATA |
    IWS_GET_AUTH_DATA_ERROR;