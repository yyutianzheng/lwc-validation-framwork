import { LightningElement,api, track } from 'lwc';
import { getInstance } from 'c/formValidator';

export default class ContactForm extends LightningElement {
    @track contact = {email: 'yt@'}
    handleSubmit(){
        const tmpl = this.template;
        const formValidator = getInstance(tmpl);
        formValidator.validateAll();
    }

}




