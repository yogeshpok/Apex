import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    name = 'Yogi';
    showChild = true;

    constructor() {
        super();
        console.log('PARENT constructor');
    }

    connectedCallback() {
        console.log('PARENT connectedCallback');
    }

    render() {
        console.log('PARENT render');
        return super.render();
    }

    renderedCallback() {
        console.log('PARENT renderedCallback');
    }

    handleChange(event) {
        this.name = event.target.value;
    }

    toggleChild() {
        this.showChild = !this.showChild;
    }

   
}