 const ValidationError = () => {
    let invalidFields =[];// encapsulated with closure
    /*
        error : [{
            field : email,
            messages: 'pattern doesn't match'
        }]
    */
    const add = (field) => invalidFields.push(field);
    const clear = () => { invalidFields = [] };

    const hasErrors = () => { return invalidFields.length === 0 ? true : false };

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
        invalidFields.push(invalidField);
        return errorMessage
    }

    const fireInlineMessages = () => {
        invalidFields.forEach( e => {
            e.reportValidity();
        });
    }

    return {
        clear,
        add,
        hasErrors,
        generateMessage,
        fireInlineMessages
    };
}

export default ValidationError