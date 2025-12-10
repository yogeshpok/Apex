trigger Three_10_12_2025 on Account (before insert) {
   //Prevent inserting Account without Phone.
   //Event before 
   //Object Account
   //trigger.new
   
    if(Trigger.IsBefore && Trigger.IsInsert)
    {
       for(Account acc: Trigger.new)
       {
           if(acc.Phone == Null)
           {
               acc.addError('Phone Number should not be blank');
           }
       }
    }
    
    
    
    
}