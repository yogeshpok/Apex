trigger Four_10_12_2025 on Contact (before insert) {
  // 4. Uppercase Contact LastName before insert.
  // event Before insert :Trigger.new
  // object Contact
  

   if(Trigger.IsBefore && Trigger.IsInsert)
   {
       for(Contact con : Trigger.new)
       {
           string Lastname = con.LastName;
           con.LastName =  Lastname.toUpperCase();
       }
   }


}