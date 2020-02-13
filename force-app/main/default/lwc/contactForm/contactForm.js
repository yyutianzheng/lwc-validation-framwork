import { LightningElement,api, track } from 'lwc';
import { getInstance } from 'c/formValidator';

export default class ContactForm extends LightningElement {
    @track contact = {email: 'yt@'}
    handleSubmit(){
        let formValidator = {};
        let tmpl = this.template;
        formValidator = getInstance(tmpl);
        formValidator.validateAll();
    }

}






