import { LightningElement } from 'lwc';

export default class Lwc_2210_eg1_event_declarative extends LightningElement {

    msg ;
    capmsg(event)
    {
       this.msg = event.target.value;
    }
    incme()
    {

        //create event 
        this.dispatchEvent(new CustomEvent('evtinc',{detail : this.msg}));
    }
    decme()
    {
        this.dispatchEvent(new CustomEvent('evtdec',{detail : this.msg}));

    }
}