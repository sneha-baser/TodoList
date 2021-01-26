import React from "react"
const Liset = (props) =>{
    return(
        <>
        <div className="todol">
        <i className="fa fa-times-circle-o" aria-hidden="true"
        onClick={
            ()=>{
               props.onSelect(props.id); 
            }
        }></i>

          <li> {props.text} </li>
        
        </div>
        </>
    )
}
export default Liset