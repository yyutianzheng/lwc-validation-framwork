//module pattern to create encapsulation
const Message = (() => {
    const generateMessage = (invalidField) => {
        let errorMessage = '';
        const fieldValidity = invalidField.validity;
        if(fieldValidity.valueMissing) {
            errorMessage = "Value is missing!"
        } else if(fieldValidity.typeMismatch) {
            errorMessage = "Entered value needs to be an e-mail address."
        } else if(fieldValidity.tooShort) {
            errorMessage = "too short"
        }
        return errorMessage
    }

    return {
        generateMessage
    };
})();

export default Message


