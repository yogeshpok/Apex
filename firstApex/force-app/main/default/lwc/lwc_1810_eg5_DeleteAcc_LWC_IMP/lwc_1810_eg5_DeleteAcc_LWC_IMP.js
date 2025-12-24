import { LightningElement, api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class Lwc_1810_eg5_DeleteAcc_LWC_IMP extends NavigationMixin(LightningElement) {
    @api recordId;

    // Handle delete operation
    delme(event) {
        if (!this.recordId) {
            // If recordId is undefined or null, show an error toast
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'No record ID provided. Cannot delete record.',
                    variant: 'error',
                })
            );
            return;
        }

        deleteRecord(this.recordId)
            .then(() => {
                // Show success message
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account deleted successfully',
                        variant: 'success',
                    })
                );

                // Navigate to Account home page after successful deletion
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Account',
                        actionName: 'home',
                    },
                });
            })
            .catch(error => {
                // Log the error in the console for debugging
                console.error('Error deleting record:', error);

                let errorMessage = error.body ? error.body.message : 'Unknown error';
                if (error.body && error.body.output && error.body.output.errors.length > 0) {
                    errorMessage = error.body.output.errors[0].message;
                }

                // Show error message toast
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error deleting record',
                        message: errorMessage,
                        variant: 'error',
                    })
                );
            });
    }
}
