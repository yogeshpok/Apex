import { LightningElement } from 'lwc';
import { wire } from 'lwc';
import getAccountINFO from '@salesforce/apex/Lwc_1410_eg2_getaccount.getAccountINFO'
alert('Good morning ...welcome to LWC Wire')
const columns = 
[
    { label: 'ACcount Name', fieldName: 'Name',type :'text' },
    { label: 'ACcount Phone', fieldName: 'Phone',type :'phone' },
    { label: 'ACcount Industry', fieldName: 'Industry',type :'text' },
    { label: 'ACcount Rating', fieldName: 'Rating',type :'text' },
    { label: 'ACcount FAX', fieldName: 'Fax',type :'phone' }
];

export default class Lwc_1410_eg2_getaccount extends LightningElement {

//wire a property
@wire(getAccountINFO,{ srcText :'$sttxt'}) wiredAccounts;
mydata;
myerror;
//wire a function
@wire(getAccountINFO,{ srcText :'$sttxt'}) function({data,error})
{
    if(data)
    {
        this.mydata =data;
    }
    else{
        this.myerror = error
    }
};

       columns = columns;

        sttxt;
        sttxt1;
        capst(event)
        {
              this.sttxt1 = event.target.value;
        }

        
        searchme(event)
        {
            this.sttxt = this.sttxt1 ;
        }
}