import { LightningElement } from 'lwc';
import PubSub from 'c/pubSub';

export default class PubSub_Publisher extends LightningElement {


    msg;
    Capmsg(event)
    {
        this.msg = event.target.value;
    }

    subme()
    {
            //step1 compose the message

            let message ={

                "message" : this.msg,
                "Sender"  :'Yogesh',
                "Phone"   : '8421099842'
            };

            //step2 publish the message
            PubSub.fire('eventnotify',message)

    }

}