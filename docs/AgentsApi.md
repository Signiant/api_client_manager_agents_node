# ManageragentsApi.AgentsApi

All URIs are relative to *https://manager.url/signiant/spring/admin/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAgent**](AgentsApi.md#getAgent) | **GET** /listagents | List agents
[**revokeCertificate**](AgentsApi.md#revokeCertificate) | **POST** /certificate/revoke | Revoke certificate


<a name="getAgent"></a>
# **getAgent**
> Agents getAgent(username, password)

List agents

Return a list of all agents

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.AgentsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgent(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 

### Return type

[**Agents**](Agents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="revokeCertificate"></a>
# **revokeCertificate**
> Success revokeCertificate(username, password, requestBody)

Revoke certificate

Revoke an agent's certificate

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.AgentsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var requestBody = new ManageragentsApi.RevokeAgentCertificate(); // RevokeAgentCertificate | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.revokeCertificate(username, password, requestBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **requestBody** | [**RevokeAgentCertificate**](RevokeAgentCertificate.md)|  | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

