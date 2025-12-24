import { LightningElement } from 'lwc';

export default class Lwc_2310_eg1_event_program_grandparent extends LightningElement {

    connectedCallback() {
        // Listen for same bubbled event
        this.template.addEventListener(
            'evtprog',
            this.handleFromChild.bind(this)
        );
    }

    handleFromChild(event) {
        alert(
            'Grandparent received message → ' + event.detail
        );
    }
}
