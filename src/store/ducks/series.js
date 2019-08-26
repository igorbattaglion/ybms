export const Types = {
    GET: "series/GET_SERIES",
    GET_SUCCESS: "series/GET_SUCESS",
    GET_FAILURE: "series/GET_FAILURE"
};

const INITIAL_STATE = {
    loading: false
}

export default function series(state = INITIAL_STATE, action){
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

    getSeries: () => ({
        type: Types.GET
    }),

    getSeriesSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { 
            data 
        }
    }),
    
    getSeriesFailure: error => ({
        type: Types.GET_FAILURE,
        payload: { 
            error 
        }
    })
}