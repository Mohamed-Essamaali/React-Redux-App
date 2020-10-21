export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

const initialState = {
    data:[],
    loading:false
}

export const reducer = (state=initialState,action)=>{

    switch(action.type){
        case FETCHING_START:
            return {...state,loading:true}
        case FETCHING_SUCCESS:
            return{...state, data: action.payload,loading: false}
            case FETCHING_FAILURE:
                return {...state,error:action.payload, loading: false}
            default:
                return state
    }
}

