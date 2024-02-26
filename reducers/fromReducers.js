export const reducer =(state,action)=>{

    const {validationResult ,inputId, inputValue}=action;
    const updatedValues= {
        ...state.inputValues,
        [inputId]:inputValue
    }
    const updatedValidities={
        ...state.inputValidities,
        [inputId] : validationResult

    }


    let updatedFormatIsValid=true
    for(const key in updatedValidities){
        if(updatedValidities [ key] !== undefined){
            updatedFormatIsValid=false
            break
        }
    }
    return{
        inputValues: updatedValues,
        inputValidities: updatedValidities,
        formIsValid: updatedFormatIsValid
    }
}