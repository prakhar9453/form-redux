import { Question } from "../AtomicComponent/QuestionAndDescription";
import {useDispatch} from "react-redux";
export function LongAnswer(props){

    var dispatch=useDispatch();

    function setValueAndIsRequired(event){

        if(props.required==="1"){
            
            var parent;

            if(event.target.value==="")
            {
            parent=event.target.parentNode;
            parent.style.border="2px solid red";
            }
            else
            {
                parent=event.target.parentNode;
                parent.style.border="1.5px solid black";
            }   
        }

        var textArea=event.target;
        textArea.style.height="0px";
        var height=textArea.scrollHeight;
        textArea.style.height=height+"px";
        dispatch(props.handler(event.target.value));
    }
    function checkIsRequired(event){

        var parent;
    
        if(props.required==="1"){

            if(event.target.value==="")
            {
                parent=event.target.parentNode;
                parent.style.border="2px solid red";
            }
            else
            {
                parent=event.target.parentNode;
                parent.style.border="1.5px solid black";
            }
        }
    }
    return(
        <div id="LongAnswerContainer">
            
           <Question question={props.question} required={props.required} isDespcription={props.isDespcription} description={props.description}/>
           
           <textarea 
           onBlur={checkIsRequired} 
           onChange={setValueAndIsRequired} 
           rows="1" 
           style={{resize:"none",padding:"5px",marginTop:"0.5vh",boxSizing:"border-box" ,fontSize:"1vw",width:"40vw",border:"none",borderBottom:"1px solid black",outline:"none"}} 
           value={props.value} />
        </div>
    );

}