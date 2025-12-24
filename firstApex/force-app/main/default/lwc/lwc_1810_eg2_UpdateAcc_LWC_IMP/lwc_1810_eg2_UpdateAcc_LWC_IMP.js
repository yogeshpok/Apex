import { LightningElement } from 'lwc';
import { wire } from 'lwc';
//step1 import impration
import getAccountINFO from '@salesforce/apex/Lwc_1410_eg2_getaccount.getAccountINFO';
//step fields to update updating
import { updateRecord } from 'lightning/uiRecordApi';
import ID_FIELD from '@salesforce/schema/Account.Id';
import PHO_FIELD from '@salesforce/schema/Account.Phone';
import NAM_FIELD from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import {refreshapex} from '@salesforce/apex'




const columns = 
[
    { label: 'Account Name', fieldName: 'Name',type :'text',editable: true },
    { label: 'Account Phone', fieldName: 'Phone',type :'phone' ,editable: true },
    { label: 'Account Industry', fieldName: 'Industry',type :'text',editable: true  },
    { label: 'Account Rating', fieldName: 'Rating',type :'text',editable: true  },
    { label: 'Account FAX', fieldName: 'Fax',type :'phone' ,editable: true }
];
export default class Lwc_1810_eg2_UpdateAcc_LWC_IMP extends LightningElement {

//wire a property
@wire(getAccountINFO,{ srcText :'$sttxt'}) wiredAccounts;
// mydata;
// myerror;
columns = columns;
draftValues = [];
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

    //step3 create the mapping
    handleSave(event)
    {
        const fields = {};
        fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
        fields[PHO_FIELD.fieldApiName] = event.detail.draftValues[0].Phone;
        fields[NAM_FIELD.fieldApiName] = event.detail.draftValues[0].Name;
          //step4 create the mapping
        const recordInput = { fields };
        //step5 call Imperative method
        updateRecord(recordInput).then(Response=>{
                   // alert('Account Record Created Sucessfully'+response.id);
                   const evt = new ShowToastEvent({
                    title: 'record updated',
                    message: 'record updated Sucessfully',
                    variant: 'success',
                  });
                  this.dispatchEvent(evt);
                  //cleat the draft values
                
                  this.draftValues =[];
                  //refresh page data
                  return refreshapex(this.wiredAccounts);
                  

        }).catch(error=>{
            const evt = new ShowToastEvent({
                title: 'record failed',
                message: 'record updation failed',
                variant: 'error',
              });
              this.dispatchEvent(evt);
        });
    }
}