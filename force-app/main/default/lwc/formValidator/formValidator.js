import ValidatorFactory from './validatorFactory.js'
import Result from './result.js' 
import Message from './message.js'
class FormValidator {
    constructor(tmpl){
        this.template = tmpl;
        this.validationFields = tmpl.querySelectorAll('.standard-validation');
    }
    
    validateAll() {
        Result.clear();
        this.validationFields.forEach( field => {
            this.checkValidity(field);
        });
        if(Result.hasErrors)
            Result.fireInlineErrors();            
    }

    checkValidity(field){
        if(!field.validity.valid){
            const customErrorMsg = Message.generateMessage(field);
            field.setCustomValidity(customErrorMsg);
            Result.addInvalidField(field);
            this.setEventListener(field);
        } else if(field.classList.contains('custom-validation')){
            this.runCustomValidation(field);
        }
    }
    
    runCustomValidation(field) {
        //TODO
        /*
        let validator = ValidatorFactory.getValidator(field.name)
        validator.validate(field);
        if(!validator.valid)
            this.handleInvalidInput(field);
        console.log(this.validationResult);
        */
    }

    setEventListener(selectElement){
        //field.addEventListener("keyup", console.log('dsadf'));
        selectElement.addEventListener('change', (event) => {
            console.log('this is working');
        });
    }


    checkSingleField(field){
        field.setCustomValidity('');
            if(!field.validity.valid){
                const customErrorMsg = Message.generateMessage(field);
                field.setCustomValidity(customErrorMsg);
                Result.addInvalidField(field);
            }
    }
}
export const getInstance = (tmpl) => {
    return new FormValidator(tmpl);
} 
 




