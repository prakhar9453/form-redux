import { Question } from "../AtomicComponent/QuestionAndDescription";
import {useDispatch, useSelector} from "react-redux";
export function SingleCorrect(props){


    const dispatch=useDispatch();
    var selected=props.holder.selected;
    var selectedOption=props.holder.selectedOption;

    var selectedOptions=new Array(props.options.length);
    selectedOptions.fill(false);
    

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
           dispatch(props.handler.setSelectedOption(selectedOptions));
           dispatch(props.handler.setSelected(-1));
           dispatch(props.handler.setValue(""));
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
           dispatch(props.handler.setSelectedOption(selectedOptions));
           dispatch(props.handler.setSelected(-1));
           dispatch(props.handler.setValue(""));
        }
        else
        {
            if(props.required==="1")
            {
                let parent;
                parent=event.target.parentNode;
                parent.parentNode.style.border="1.5px solid black";
            }
            selectedOptions.fill(false);
            selectedOptions[index]=true;        
            dispatch(props.handler.setSelectedOption(selectedOptions));
            dispatch(props.handler.setSelected(index));
            dispatch(props.handler.setValue(props.options[index]));
        }

    }

    return(
        <div id="SingleCorrectContainer">
            
            <Question question={props.question} required={props.required} isDespcription={props.isDespcription} description={props.description}/>

            {props.options.map((x,i)=>{
                return(
                    <div key={i} style={{display:"flex",padding:"10px",alignItems:"center"}}>
                        <input id={i} type="checkbox" onChange={changeOption} checked={selectedOption[i]?selectedOption[i]:false}></input>
                        <label style={{fontSize:"1.2vw"}}>{x}</label>
                    </div>
                );
            })}
            {selected!==-1 && <button id="clearSelection" onClick={changeOption} style={{marginLeft:"40vw",height:"3vh",fontSize:"1.5vh"}}>Clear Selection</button>}


        </div>
    );

}