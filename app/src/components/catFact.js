import React from 'react';
import { connect } from 'react-redux';


const CatFact = props =>{


    return (
        <div>
            <p>{props.text}</p>
           
        </div>
    )
}
const mapStateToProps =state=>{


    return{
        text: state.text,
     
    }
}

export default connect(mapStateToProps,null) (CatFact)