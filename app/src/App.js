import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ListCatFacts from './components/listCatFacts'
import axios from 'axios'

function App() {

  const[data,setData] = useState([])

  useEffect(()=>{
    axios
    .get('https://cat-fact.herokuapp.com/facts/')
    .then(res=>{
      // console.log(res.data.all)
      setData(res.data.all)
      // res.data.all.map(el=>{
      //   console.log(el.text)
      // })
      
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  


  return (
    <div className="App">
      <h1>List all facts about cats</h1>
      <ListCatFacts data={data} />
     
    </div>
  );
}

export default App;
