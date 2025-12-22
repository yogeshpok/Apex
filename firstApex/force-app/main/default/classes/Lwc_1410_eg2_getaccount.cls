public with sharing class Lwc_1410_eg2_getaccount {
    // Constructor (if you need it)
    public Lwc_1410_eg2_getaccount() {
        // You can add any initialization logic here if necessary.
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountINFO(String srcText) {
        // Query to get Account Id, Name, and Rating

        String st = '%'+ srcText +'%';
        List<Account> accountList = [SELECT Id, Name, Industry,Phone,Rating FROM Account where Name like :st ];
        return accountList;
    }
}
