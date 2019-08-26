export const Types = {
    GET: "movies/GET_MOVIES",
    GET_SUCCESS: "movies/GET_SUCESS",
    GET_FAILURE: "movies/GET_FAILURE"
};

const INITIAL_STATE = {
    loading: false
}

export default function movies(state = INITIAL_STATE, action){
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

    getMovies: () => ({
        type: Types.GET
    }),

    getMoviesSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { 
            data 
        }
    }),
    
    getMoviesFailure: error => ({
        type: Types.GET_FAILURE,
        payload: { 
            error 
        }
    })
}