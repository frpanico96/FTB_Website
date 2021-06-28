@RestResource(urlMapping = '/ftbWebService/*')
global inherited sharing class FTB_WebService {
    

    @HttpPost
    global static String doPost(){

        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        
        return 'Login successfully';


    }

}
