import ValidatorFactory from './validatorFactory.js'
import ValidationError from './validationError.js'
class FormValidator {
    constructor(tmpl){
        this.template = tmpl;
        this.validationFields = tmpl.querySelectorAll('.standard-validation');
        this.validationError = ValidationError();
    }
    
    validateAll() {
        this.validationError.clear();
        this.validationFields.forEach( field => {
            this.checkValidity(field);
        });
        if(this.validationError.hasErrors)
            this.validationError.fireInlineMessages();            
    }

    checkValidity(field){
        if(!field.validity.valid){
            const errorMessage = this.validationError.generateMessage(field)
            field.setCustomValidity(errorMessage);
        } else if(field.classList.contains('custom-validation')){
            //TODO
             console.log('custom validation fired')
            //this.runCustomValidation(field);
        }
    }
    
    runCustomValidation(field) {
        //TODO
        let validator = ValidatorFactory.getValidator(field.name)
        validator.validate(field);
        if(!validator.valid)
            //this.validationResult.addInvalidField(field);
        console.log(this.validationResult);
    }
}
export const getInstance = (tmpl) => {
    return new FormValidator(tmpl);
} 
 




