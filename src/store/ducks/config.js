export const Types = {
    GET: "config/GET_CONFIG",
    GET_SUCCESS: "config/GET_SUCESS",
    GET_FAILURE: "config/GET_FAILURE"
};

const INITIAL_STATE = {
    loading: false
}


export default function config(state = INITIAL_STATE, action){
    switch(action.type) {
        case Types.GET :
            return {
                ...state, loading: true
            }
        case Types.GET_SUCCESS: 
            return { 
                ...state, loading: false, data: action.payload.data 
            }
        case Types.GET_FAILURE:
            return { 
                ...state, error: action.payload.error, loading: false
            }
        default:
        return state;
    }
}

export const Creators = {

    getConfig: query => ({
        type: Types.GET,
        payload: {
            query
        }
    }),

    getConfigSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { 
            data 
        }
    }),
    
    getConfigFailure: error => ({
        type: Types.GET_FAILURE,
        payload: { 
            error 
        }
    })
}