import { LightningElement,api } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    @api name;

    constructor() {
        super();
        console.log('CHILD constructor');
    }

    connectedCallback() {
        console.log('CHILD connectedCallback');
    }

    render() {
        console.log('CHILD render');
        return super.render();
    }

    renderedCallback() {
        console.log('CHILD renderedCallback');

        // DOM is available here
        const p = this.template.querySelector('p');
        if (p) {
            console.log('DOM accessed in renderedCallback');
        }
    }

    disconnectedCallback() {
        console.log('CHILD disconnectedCallback');
    }

}