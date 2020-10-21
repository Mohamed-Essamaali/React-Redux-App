import React from 'react';
import {connect} from 'react-redux'
import {fetchData} from '../actions'
import CatFact from './catFact';

const ListCatFacts = props=>{

console.log(props)
    if(props.loading){
        return <h2>loading more...</h2>
    }
    
    return (
        <div>
            {props.data.map(el=>{
                return <CatFact el={props.text}/>
            })} 
            <button onClick={props.fetchData}>Get Cat info</button>
        </div>
    )
}
export default (ListCatFacts)

// const mapStateToPtops = state=>{
//     return{
//         text:state.text,
//         data: state.data,
        
//     }
// }
// export default connect({mapStateToPtops},fetchData)(ListCatFacts)

