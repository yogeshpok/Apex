public with sharing class CL_1710_CreateAcc {

    @AuraEnabled
    public static String CreateAccount(String Nm, String Rt, String Ind, String Phn) {
        String Msg;
        try {
            Account a = new Account();
            a.Name = Nm;
            a.Phone = Phn;
            a.Rating = Rt;
            a.Industry = Ind;
            INSERT a;
            Msg = 'Account created successfully. Account Id: ' + a.Id;
        } catch (Exception e) {
            Msg = 'Account creation failed: ' + e.getMessage();
        }
        return Msg;
    }
}
