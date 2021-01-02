import React, { useEffect, useState } from "react";
import "./SelectedItems.css";
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';
import axios from "axios";
export default function SelectedVotingItems(props) {
  console.log(props.type);
  console.log(props.selectedItems);
  const [array, setArray] = useState()
  console.log(array);
  
  const suggestionsID = props.selectedItems.map(a =>a.suggestionId)[0];
  console.log("suggestionsID: ",suggestionsID)
  
  // function triggerDelete (index) {
  //   props.selectedItems.splice(index,1)
  //   setArray(props.selectedItems);
  //   console.log(array)    
  //   console.log(props.selectedItems)
  // }
  
  
  return (
    <div className="selected-items">
      <p>{props.type !== undefined && `Selected ${props.type}`}</p>
      {props.selectedItems.map((el, index) => (
        <div className="selected-item" key={index}>
            {el.choice_id.name} 
            
            <button onClick = {()=>{axios.post(`http://localhost:5000/suggestions/${el.suggestionId}`, {"status":"APPROVED"},{ 
              headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`, "Access-Control-Allow-Origin" : "*",
              "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS"}});
              axios.delete(`http://localhost:5000/suggestions/${el.suggestionId}`, { 
              headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`, "Access-Control-Allow-Origin" : "*",
              "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS"}});
              props.triggerDelete(index);

              }
              }><GiIcons.GiCheckMark /></button> 
            <button onClick = {()=> {axios.delete(`http://localhost:5000/suggestions/${el.suggestionId}`, { 
              headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`, "Access-Control-Allow-Origin" : "*",
              "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS"}});
              console.log(index);
              props.triggerDelete(index);

            }}
            ><IoIcons.IoMdClose /></button> 
        </div>       
      ))}
      
    </div>
  );
  
}
