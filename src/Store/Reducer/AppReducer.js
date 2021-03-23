export function AppReducer(state = {
    customer: "",
    selectedCustomer:-1,
    selectedCustomerOption:[],
    orderNo: "",
    color:"",
    selectedColor:-1,
    selectedColorOption:[],
    ProductDetail:"",
    name:"",
    phone:"",
    validPhone:true,
    email:"",
    validEmail:true,
    contact:"",
    selectedContact:-1,
    selectedContactOption:[],
    question:""
  }, action){
    switch (action.type) {
        case "SET_CUSTOMER":
            state = {
                ...state,
                customer:action.payload
            };
            break;
        case "SET_SELECTED_CUSTOMER":
                state = {
                    ...state,
                    selectedCustomer:action.payload
                };
                break;
        case "SET_SELECTEDOPTION_CUSTOMER":
                state = {
                    ...state,
                    selectedCustomerOption:action.payload
                };
                break;
        case "SET_ORDERNO":
            state = {
                ...state,
                orderNo:action.payload
            };
            break;
        case "SET_COLOR":
            state = {
                ...state,
                contact:action.payload
            };
            break;
        case "SET_SELECTED_COLOR":
                state = {
                    ...state,
                    selectedColor:action.payload
                };
                break;
        case "SET_SELECTEDOPTION_COLOR":
                state = {
                    ...state,
                    selectedColorOption:action.payload
                };
                break;
        case "SET_PRODUCTDETAIL":
            state = {
                ...state,
                ProductDetail:action.payload
            };
            break;
        case "SET_NAME":
            state = {
                ...state,
                name:action.payload
            };
            break;
        case "SET_PHONE":
            state = {
                ...state,
                phone:action.payload
            };
            break;
        case "SET_VALIDPHONE":
                state = {
                    ...state,
                    validPhone:action.payload
                };
                break;
        case "SET_EMAIL":
                state = {
                    ...state,
                    email:action.payload
                };
                break;
        case "SET_VALIDEMAIL":
                    state = {
                        ...state,
                        validEmail:action.payload
                    };
                    break;
        case "SET_CONTACT":
                    state = {
                        ...state,
                        contact:action.payload
                    };
                    break;
        case "SET_SELECTED_CONTACT":
                        state = {
                            ...state,
                            selectedContact:action.payload
                        };
                        break;
        case "SET_SELECTEDOPTION_CONTACT":
                        state = {
                            ...state,
                            selectedContactOption:action.payload
                        };
                        break;
        case "SET_QUESTION":
                    state = {
                        ...state,
                        question:action.payload
                    };
                    break;
      }

    return state;
  };