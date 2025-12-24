import { LightningElement } from 'lwc';

export default class Lwc_2310_eg1_event_program_child extends LightningElement {



    Callme(event)
    {
        //step 1 create event and dispactch and add the propogation
        this.dispatchEvent(new CustomEvent('evtprog', {detail:'Hi Yogesh Good Morning', bubbles :true ,composed :true}))

    }


}