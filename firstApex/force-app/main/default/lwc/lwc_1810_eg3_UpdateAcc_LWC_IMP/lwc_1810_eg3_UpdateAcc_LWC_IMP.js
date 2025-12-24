import { LightningElement, track, wire } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'; // Apex method to fetch Accounts
// import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ID_FIELD from '@salesforce/schema/Account.Id';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

// Define table columns
const columns = [
    { label: 'Account Name', fieldName: 'Name', type: 'text', editable: true },
    { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true },
    { label: 'Industry', fieldName: 'Industry', type: 'text', editable: true },
    { label: 'Rating', fieldName: 'Rating', type: 'text', editable: true }
];

export default class Lwc_1810_eg3_UpdateAcc_LWC_IMP extends LightningElement {

    @track accounts; // To hold account records
    @track draftValues = []; // To track the edited draft values
    columns = columns; // Columns for datatable

    // Wire the Apex method to fetch Account data
    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data; // Assign data to accounts
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }

    // Handle inline edit save
    handleSave(event) {
        const fields = {}; // Empty object to hold the fields

        // Iterate over draft values and map them to fields
        event.detail.draftValues.forEach(draft => {
            fields[ID_FIELD.fieldApiName] = draft.Id;
            fields[NAME_FIELD.fieldApiName] = draft.Name;
            fields[PHONE_FIELD.fieldApiName] = draft.Phone;
            fields[INDUSTRY_FIELD.fieldApiName] = draft.Industry;
            fields[RATING_FIELD.fieldApiName] = draft.Rating;

            // Create the record input object for updateRecord
            const recordInput = { fields };

            // Call updateRecord to save changes in Salesforce
            updateRecord(recordInput)
                .then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Account updated successfully',
                            variant: 'success'
                        })
                    );
                    // Clear draft values after saving
                    this.draftValues = [];
                })
                .catch(error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error updating record',
                            message: error.body.message,
                            variant: 'error'
                        })
                    );
                });
        });
    }
}