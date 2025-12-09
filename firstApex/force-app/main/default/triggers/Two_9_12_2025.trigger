trigger Two_9_12_2025 on Opportunity (before insert) {
      //2. Set Opportunity.StageName = 'Prospecting' if empty.
      // event : before insert
      // operation : insert 
     
    
    if(Trigger.IsBefore && Trigger.IsInsert)
    {
             for(Opportunity opp : Trigger.new)
             {
                    if (String.isBlank(opp.StageName)) {
                            opp.StageName = 'Prospecting';
                        }
                 
             }
    }

    
     
}