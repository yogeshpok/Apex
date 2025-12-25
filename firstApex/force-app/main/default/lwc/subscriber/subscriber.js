import { LightningElement } from 'lwc';
import PubSub from 'c/pubSub';

export default class Subscriber extends LightningElement {
    
    message;
    connectedCallback()
    {
           this.register();
    }

    register()
    {
        PubSub.register('eventnotify',this.handleEvent.bind(this));
    }
 
    handleEvent(messagefromevt){
         this.message = messagefromevt ? JSON.stringify(messagefromevt, null , '\t'): 'No message payload';
    }


}