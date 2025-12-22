import { LightningElement } from 'lwc';
import { wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'
import sayhi from '@salesforce/apex/AccountController.sayhi'

export default class Lwc_1410_decorator_eg1_wire extends LightningElement {


@wire(sayhi)msg;
@wire(getAccounts)yogdata;

}