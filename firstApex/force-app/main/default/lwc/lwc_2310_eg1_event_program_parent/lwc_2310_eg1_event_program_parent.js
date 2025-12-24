import { LightningElement } from 'lwc';

export default class Lwc_2310_eg1_event_program_parent extends LightningElement {


    constructor()
    {
        super();
        this.template.addEventListener('evtprog',this.HandleNotification);
    }

    HandleNotification(event)
    {
        alert('the Message Received from the Child Component Is '+event.detail);
    }
}