import { LightningElement } from 'lwc';
import CreateAccount from '@salesforce/apex/CL_1710_CreateAcc.CreateAccount'

export default class Lwc_1710_eg3_Createacc_SSC_IMP extends LightningElement {
   
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
        CreateAccount({Nm :this.nam, Rt : this.Rting , Ind : this.Indus , Phn :this.Phon  }).then(result=>{alert(result);}).catch(error=>{alert(error);});
    }

}