trigger Six_10_12_2025 on Lead (before insert) {

    // 6. Default Lead.Rating = 'Warm' before insert.
    // Object :Lead
    // Event :Trigger.New
    
    if(Trigger.IsInsert && Trigger.IsBefore)
    {
        for(Lead LD : Trigger.New)
        {
           if(LD.Rating == Null)
           {
               LD.Rating = 'Warm';
           }
        }
    }
}