import { LightningElement } from 'lwc';
alert('this is the initilization whatever thing we can write between import and export is called initilization ')
alert('before Component Load ')

export default class Lwc_22_12_eg2_greter3Num extends LightningElement {

    num1;
    num2;
    num3;
    result;
    calcme2(event)
    {
       if(parseInt(this.num1)>parseInt(this.num2) && parseInt(this.num1)>parseInt(this.num3) )
       {
          this.result = this.num1
       }
       else if(parseInt(this.num2)>parseInt(this.num1) && parseInt(this.num2)>parseInt(this.num3) )
       {
           this.result = this.num2
       }
       else{
            this.result = this.num3
       }

    }
    calcme3(event)
    {
       if(parseInt(this.num1)<parseInt(this.num2) && parseInt(this.num1)<parseInt(this.num3) )
       {
          this.result = this.num1
       }
       else if(parseInt(this.num2)<parseInt(this.num1) && parseInt(this.num2)<parseInt(this.num3) )
       {
           this.result = this.num2
       }
       else{
            this.result = this.num3
       }

    }
    // capnum1(event)
    // {
    //     this.num1 = event.target.value;
    // }
    // capnum2(event)
    // {
    //     this.num2 = event.target.value;

    // }
    // capnum3(event)
    // {
    //     this.num3 = event.target.value;

    // }


    capnum(event)
    {
        const evetname = event.target.name;

        if(evetname == 'inp1')
        {
            this.num1 = event.target.value;
        }
        else if(evetname == 'inp2')
        {
            this.num2 = event.target.value;
        }
        else
        {
            this.num3 = event.target.value;
        }
    }
}