trigger Five_10_12_2025 on Case (before insert) {
 //5. Auto-fill Case.Priority = 'Medium' if not provided.
 //Object : case
 //event Before insert : trigger.new


    if(Trigger.IsBefore && Trigger.IsInsert)
    {
        for(Case CS: Trigger.New)
        {
            if(CS.Priority == Null)
            {
                CS.Priority = 'Medium';
            }
        }
    }
     

}