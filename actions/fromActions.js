import {  validateEmail,validatePassword} from "../utils/ValidationConstraints";
import { validateString } from "../utils/ValidationConstraints";
export const validateInput=(inputId, inputValue)=>{
    if(inputId === "fullName"){
        return validateString(inputId,inputValue)
    }
    else if (inputId==="email"){
        return validateEmail(inputId,inputValue)
    }else if (inputId==="password"|| inputId==="confirmPassword"){
        return validatePassword(inputId,inputValue)
    }
}