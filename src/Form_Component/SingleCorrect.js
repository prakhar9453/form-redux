import {useState} from "react";
import { Question } from "../AtomicComponent/QuestionAndDescription";
export function SingleCorrect(props){

    var [selected,setSelected]=useState(-1);
    var selectedOptions=new Array(props.options.length);
    selectedOptions.fill(false);
    
    var [selectedOption,setSelectedOption]=useState(selectedOptions);


    function changeOption(event){

        var index=event.target.id;

        if(index==="clearSelection")
        {
            if(props.required==="1")
            {
                let parent;
                parent=event.target.parentNode;
                parent.style.border="2px solid red";
            }
           selectedOptions.fill(false);
           setSelectedOption(selectedOptions);
           setSelected(-1);
           props.handler("");
           return;
        }

        if(selectedOption[index]===true)
        {
            if(props.required==="1")
            {
                let parent;
                parent=event.target.parentNode;
                parent.parentNode.style.border="2px solid red";
            }
           selectedOptions.fill(false);
           setSelectedOption(selectedOptions);
           setSelected(-1);
           props.handler("");
        }
        else
        {
            if(props.required==="1")
            {
                let parent;
                parent=event.target.parentNode;
                parent.parentNode.style.border="1.5px solid black";
            }
            selectedOption.fill(false);
            selectedOption[index]=true;
            setSelected(index);
            props.handler(props.options[index]);
        }

    }

    return(
        <div id="SingleCorrectContainer">
            
            <Question question={props.question} required={props.required} isDespcription={props.isDespcription} description={props.description}/>

            {props.options.map((x,i)=>{
                return(
                    <div key={i} style={{display:"flex",padding:"10px",alignItems:"center"}}>
                        <input id={i} type="checkbox" onChange={changeOption} checked={selectedOption[i]}></input>
                        <label style={{fontSize:"1.2vw"}}>{x}</label>
                    </div>
                );
            })}
            {selected!==-1 && <button id="clearSelection" onClick={changeOption} style={{marginLeft:"40vw",height:"3vh",fontSize:"1.5vh"}}>Clear Selection</button>}


        </div>
    );

}