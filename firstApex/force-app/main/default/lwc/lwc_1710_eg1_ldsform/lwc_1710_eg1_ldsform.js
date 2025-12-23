import { LightningElement, api } from 'lwc';

export default class Lwc_1710_eg1_ldsform extends LightningElement {

    @api recordId ;
    resetme(event)
    { 

        const inputfields = this.template.querySelectorAll('r-input-field');
        inputfields.forEach(field=>{
            field.reset();

        });
        

    }
}