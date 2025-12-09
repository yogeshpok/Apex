trigger One_9_12_2025 on Contact (before insert) {
      //1. Set Contact.Created_On__c = Today on insert.
      // event : before insert
      // operation : insert 

     if(Trigger.IsBefore && Trigger.IsInsert)
     {
           for (Contact con : Trigger.new) {
            con.CreatedOn__c = Date.today(); 
        }
     }


     
}