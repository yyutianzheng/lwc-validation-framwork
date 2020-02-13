
import EmailValidator from './validator.js'
export default class ValidatorFactory {
    static getValidator(name) {
        switch (name) {
            case 'email':
                return new EmailValidator()
            default:
                throw new Error(name + 'validation not implemented')
        }
    }
}


