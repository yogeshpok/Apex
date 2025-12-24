import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';  //LWC IMP method
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class Lwc_1810_eg1_CreateAcc_LWC_IMP extends LightningElement {
    nam;
    Phon;
    Indus;
    Rting;
 

    capsName(event){
       this.nam = event.target.value;
    }
    capsPhone(event){
        this.Phon = event.target.value;

    }
    capsIndustry(event){
        this.Indus = event.target.value;

    }
    capsRating(event){
        this.Rting = event.target.value;

    }
    Saveme(event){
        
       //step 2 ---> create the field Mapping
       const fields = {'Name': this.nam, 'Phone': this.Phon,'Industry': this.Indus,'Rating': this.Rting }
       //step3 ---> create API record
       const recordInput = { apiName: 'Account', fields };
      //step3 ---> create Imperative function
      createRecord(recordInput).then(response=>{
          // alert('Account Record Created Sucessfully'+response.id);
           const evt = new ShowToastEvent({
            title: 'Account Created Sucessfully',
            message: 'Account Record Created Sucessfully'+response.id,
            variant: 'success',
          });
          this.dispatchEvent(evt);
          this.nam ='';
          this.Indus ='';
          this.Phon ='';
          this.Rting ='';
      }).catch(error=>{
           alert('Account Record Created Sucessfully'+error);
      });

    }


}
