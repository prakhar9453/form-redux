export function Question(props){

    return(
        <div id="QuestionandDescriptionContainer">
           <p  id="Question">{props.question}
           {props.required==="1" && <span style={{color:"red",fontSize:"1.2vw"}}>*</span>}
           </p>
           {props.isDespcription==="1" && <p id="QuestionDescription">{props.description}</p>}
        </div>
    );

}