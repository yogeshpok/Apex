public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Phone, Industry, Rating FROM Account LIMIT 50];
    }


    @AuraEnabled(cacheable=true)
    public static String sayhi() {
        return 'SayHi';
    }
}
