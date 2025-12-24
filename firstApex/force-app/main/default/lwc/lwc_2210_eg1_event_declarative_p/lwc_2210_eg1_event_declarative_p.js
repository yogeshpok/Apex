import { LightningElement } from 'lwc';

export default class Lwc_2210_eg1_event_declarative_p extends LightningElement {

   empName;
   empSal;
   empAge;
   empBirth;
   vol =0;
   recvmsg;
    Incme(event)
    {
          this.vol = this.vol+1;
          this.recvmsg = event.detail;
    }
    Decme(event)
    {
        this.vol = this.vol-1;
        this.recvmsg = event.detail;

    }

   
    displayEMP(event){
        this.empName = event.detail.Nm;
        this.empAge = event.detail.Ag;
        this.empSal = event.detail.Sl;
        this.empBirth = event.detail.DB;

    }
}