import axios from 'axios'

import {FETCHING_START,FETCHING_SUCCESS,FETCHING_FAILURE} from '../reducers'



export const fetchData = (dispatch)=>{

    dispatch({type: FETCHING_START});
    axios
    .get('https://cat-fact.herokuapp.com/facts/')
    .then(res=>{
        dispatch({type:FETCHING_SUCCESS,payload: res.data})
            console.log(res.data)
    })
    .catch(err=>{
        dispatch({type:FETCHING_FAILURE,payload:err.response.message})
    })
    
}