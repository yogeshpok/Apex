trigger Seven_10_12_2025 on Account (before delete) {
   //7. Prevent deleting Accounts with AnnualRevenue > 500000.
   //object :Account 
   //Event before delete trigger
   
    if(Trigger.IsBefore && Trigger.IsDelete)
    {
        
        for(Account acc : Trigger.old)
        {
            if(acc.AnnualRevenue > 500000)
              {
                    acc.addError('Cant delte the account If the Annual Revenu Is greter than 500000');    
              }
        }

    }
   
}