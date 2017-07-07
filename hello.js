$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/salesforce-servicecloud-0.1/auth/appConfig/get?activationId=9e4d8f36-e402-4e08-8133-d61f4d294238"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.activationId);
       $('.greeting-content').append(data.companyName);
       console.log(jqxhr);
    });
});
