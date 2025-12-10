trigger Eight_10_12_2025 on Contact (before insert) {
   // 8.Auto-set Contact.Description = 'New Contact' on insert.
   // Event : before insert
   // object : Contact

    
    if(Trigger.IsBefore && Trigger.IsInsert)
    {
        for(Contact con : trigger.new)
        {
            Con.Description = 'New Contact';
        }
    }


     
}