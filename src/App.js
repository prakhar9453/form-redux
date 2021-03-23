import {FormHeader} from "./Form_Component/FormHeader.js"
import {FormDetails} from "./Form_Component/FormDetails.js"
import { SingleCorrect } from "./Form_Component/SingleCorrect.js";
import { MultipleCorrect } from "./Form_Component/MultipleCorrect.js";
import { ShortAnswer } from "./Form_Component/ShortAnswer.js";
import { LongAnswer } from "./Form_Component/LongAnswer.js";
import { Submit } from "./Form_Component/Submit.js";
import { SubHeader } from "./Form_Component/SubHeader.js";
import {useDispatch, useSelector} from "react-redux";
import {setPhone,setCustomer,setSelectedCustomer,setSelectedOptionCustomer,setOrderNo,setColor,setSelectedColor,setSelectedOptionColor,setProductDetail,setName,setValidPhone,setValidEmail, setEmail,setContact,setSelectedContact,setSelectedOptionContact,setQuestion} from "./Store/Actions/AppAction.js";

export function App(){

    const app=useSelector((state)=>state.App);
    const dispatch=useDispatch();

    console.log(app.customer);
    console.log(app.selectedCustomer);
    console.log(app.selectedCustomerOption);

    var customerType=["I am a new customer","I am an exsisting customer"];
    var customer=app.customer;

    var orderNo=app.orderNo;

    var colorType=["Red","Blue","Yellow","Green"];
    var color=app.color;

    var ProductDetail=app.ProductDetail;

    var name=app.name;

    var phone=app.phone;

    var validPhone=app.validPhone;
    function ValidateandSetPhone(phone){

        var element,firstChild;
        dispatch(setPhone(phone));
        var re = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        var result=re.test(phone);
        if(phone!=="")
        dispatch(setValidPhone(result));
        else
        dispatch(setValidPhone(result));

        if(result)
        {
            element=document.getElementById("phone");
            firstChild=element.childNodes;
            firstChild[0].style.border="1.5px black solid";

        }
        else
        {
            element=document.getElementById("phone");
            firstChild=element.childNodes;
            firstChild[0].style.border="2px red solid";

        }
    }

    var email=app.email;
    var validEmail=app.validEmail;

    function ValidateandSetEmail(email){

        var element,firstChild;

        setEmail(email);
        var re = /\S+@\S+\.\S+/;
        var result=re.test(email);
        if(email!==""){
         setValidEmail(result);
        }
         else
         setValidEmail(true);

        if(result || email==="")
        {
            element=document.getElementById("email");
            firstChild=element.childNodes;
            firstChild[0].style.border="1.5px black solid";

        }
        else
        {
            element=document.getElementById("email");
            firstChild=element.childNodes;
            firstChild[0].style.border="2px red solid";

        }
    }

    var contactType=["E-Mail","Mobile"];
    var contact=app.contact;

    var question=app.question;

    function validation(event){
        
        event.preventDefault();
        var errorArray=[];
        var element;

       
        if(orderNo==="")
        {
            element=document.getElementById("orderNo");
            errorArray.push(element);
        }
        if(color.length===0)
        {
            element=document.getElementById("color");
            errorArray.push(element);
        }
        if(name==="")
        {
            element=document.getElementById("name");
            errorArray.push(element);
        }
        if(phone==="" || !validPhone)
        {
            element=document.getElementById("phone");
            errorArray.push(element);
        }
        if(!validEmail)
        {
            element=document.getElementById("email");
            errorArray.push(element);
        }
        if(contact.length===0)
        {
            element=document.getElementById("contactType");
            errorArray.push(element);
        }

        for(var i=0;i<errorArray.length;i++)
        {
            var firstChild=errorArray[i].childNodes;
            firstChild[0].style.border="2px red solid";
        }
        if(errorArray.length!==0)
        {
            errorArray[0].scrollIntoView();
            return;
        }
        else
        {
            window.location.reload();
        }

    }
    

    return(
    <form>
        <div id="formHeader">
            <FormHeader url="https://i.pinimg.com/originals/f3/95/c6/f395c6aec3c2c0dd491914a863f4ae8f.jpg"/>
        </div>
        <div id="formDetail">
            <FormDetails name="Order Details" details="After you fill out this order request, we will contact you to go over details and availability before the order is completed. If you would like faster service and direct information on current stock and pricing please contact us at Contact us at (123) 456-7890 or " email="no_reply@example.com"/>
        </div>
        <div id="customerType">
            <SingleCorrect question="Are you a new or existing customer?" options={customerType} handler={{setValue:setCustomer,setSelected:setSelectedCustomer,setSelectedOption:setSelectedOptionCustomer}} app={app} holder={{selected:app.selectedCustomer,selectedOption:app.selectedCustomerOption}}/>
        </div>
        <div id="orderNo">
            <ShortAnswer question="What is the item you would like to order?" required="1" isDespcription="1" description=" Please enter the order no." handler={setOrderNo}/>
        </div>
        <div id="color">
            <MultipleCorrect question="What color(s) would you like to order?" options={colorType} handler={{setValue:setColor,setSelected:setSelectedColor,setSelectedOption:setSelectedOptionColor}} required="1" holder={{selected:app.selectedColor,selectedOption:app.selectedColorOption}}/>
        </div>
        <div id="product">
            <LongAnswer question="Product options" handler={setProductDetail} value={ProductDetail} isDespcription="1" description="Choose size and number per color"/>
        </div>
        <div id="contactSubHeader">
            <SubHeader heading="Contact Details" isDespcription="1" description="Enter Your Personal Contact Details"/>
        </div>
        <div id="name">
            <ShortAnswer question="Enter your Name?"  handler={setName} value={name} required="1"/>
        </div>
        <div id="phone">
            <ShortAnswer question="Enter your Phone No.?"  handler={ValidateandSetPhone} value={phone} required="1" validPhone={validPhone}/>
        </div>
        <div id="email">
            <ShortAnswer question="Enter your Email?"  handler={ValidateandSetEmail} value={email} validEmail={validEmail} />
        </div>
        <div id="contactType">
            <MultipleCorrect question="Preferred contact method ?" options={contactType} handler={{setValue:setContact,setSelected:setSelectedContact,setSelectedOption:setSelectedOptionContact}} holder={{selected:app.selectedContact,selectedOption:app.selectedContactOption}}required="1"/>
        </div>
        <div id="question">
            <LongAnswer question="Questions and Comment" handler={setQuestion} value={question}/>
        </div>
        <div>
            <Submit handler={validation}/>
        </div>

    </form>
    );
}
