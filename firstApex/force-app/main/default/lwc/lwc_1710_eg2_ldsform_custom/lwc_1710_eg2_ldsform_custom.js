import { LightningElement, api } from 'lwc';
import NAMEFLD from '@salesforce/schema/Account.Name'
import PHONEFLD from '@salesforce/schema/Account.Phone'
import INDFLD from '@salesforce/schema/Account.Industry'
import RATFLD from '@salesforce/schema/Account.Rating'


export default class Lwc_1710_eg2_ldsform_custom extends LightningElement {


    @api recordId;
    myfields = [NAMEFLD,PHONEFLD,INDFLD,RATFLD];
}