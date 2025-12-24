import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAM_FLD from '@salesforce/schema/Opportunity.Name';
import AMT_FLD from '@salesforce/schema/Opportunity.Amount';
import STG_FLD from '@salesforce/schema/Opportunity.StageName';
import PRO_FLD from '@salesforce/schema/Opportunity.Probability';
import { getFieldValue } from 'lightning/uiRecordApi';

export default class Lwc_1810_eg6_getAccrecord_LWC_IMP extends LightningElement {

    @api recordId;

    @wire(getRecord,{recordId:'$recordId',fields :[NAM_FLD,AMT_FLD,STG_FLD,PRO_FLD]}) wiredDATA;

    get Name()
    {
        return getFieldValue(this.wiredDATA.data, NAM_FLD);

    }
    get Stg()
    {
        return getFieldValue(this.wiredDATA.data, AMT_FLD);

    }
    get Amt()
    {
        return getFieldValue(this.wiredDATA.data, STG_FLD);

    }
    get Prob()
    {
        return getFieldValue(this.wiredDATA.data, PRO_FLD);

    }

}