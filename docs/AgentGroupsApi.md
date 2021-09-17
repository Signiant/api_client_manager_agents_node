# ManageragentsApi.AgentGroupsApi

All URIs are relative to *https://manager.url/signiant/spring/admin/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgentGroup**](AgentGroupsApi.md#createAgentGroup) | **POST** /agentgroups | Create agent group
[**deleteAgentGroup**](AgentGroupsApi.md#deleteAgentGroup) | **DELETE** /agentgroups/{agentgroupname|agentgroupID} | Delete agent group
[**editAgentGroup**](AgentGroupsApi.md#editAgentGroup) | **PUT** /agentgroups | Edit agent group
[**getAgentGroup**](AgentGroupsApi.md#getAgentGroup) | **GET** /agentgroups/{agentgroupname|agentgroupID} | View Agent Group
[**getAgentGroups**](AgentGroupsApi.md#getAgentGroups) | **GET** /listagentgroups | List all agent groups


<a name="createAgentGroup"></a>
# **createAgentGroup**
> CreateAgentGroupResponse createAgentGroup(username, password, opts)

Create agent group

Creates a new agent group

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.AgentGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'jSONForCreateAgentGroup': new ManageragentsApi.AgentGroup() // AgentGroup | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAgentGroup(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jSONForCreateAgentGroup** | [**AgentGroup**](AgentGroup.md)|  | [optional] 

### Return type

[**CreateAgentGroupResponse**](CreateAgentGroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAgentGroup"></a>
# **deleteAgentGroup**
> Success deleteAgentGroup(username, password, agentgroupnameagentgroupID)

Delete agent group

Delete specific agent group by name or agent group ID

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.AgentGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var agentgroupnameagentgroupID = "agentgroupnameagentgroupID_example"; // String | The **groupName** or **agentGroupID**


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAgentGroup(username, password, agentgroupnameagentgroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **agentgroupnameagentgroupID** | **String**| The **groupName** or **agentGroupID** | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editAgentGroup"></a>
# **editAgentGroup**
> Success editAgentGroup(username, password, opts)

Edit agent group

Edit an existing agent group.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.AgentGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'jSONForEditAgentGroup': new ManageragentsApi.PutAgentGroupsObject() // PutAgentGroupsObject | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editAgentGroup(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jSONForEditAgentGroup** | [**PutAgentGroupsObject**](PutAgentGroupsObject.md)|  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentGroup"></a>
# **getAgentGroup**
> GetAgentGroup getAgentGroup(username, password, agentgroupnameagentgroupID)

View Agent Group

Return a specific agent group by **groupName** or **agentGroupId**

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.AgentGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var agentgroupnameagentgroupID = "agentgroupnameagentgroupID_example"; // String | The **groupName** or **agentGroupId** of the agent group you want to view.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgentGroup(username, password, agentgroupnameagentgroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **agentgroupnameagentgroupID** | **String**| The **groupName** or **agentGroupId** of the agent group you want to view. | 

### Return type

[**GetAgentGroup**](GetAgentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentGroups"></a>
# **getAgentGroups**
> AgentGroups getAgentGroups(username, password)

List all agent groups

Return a list of all agent groups

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.AgentGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgentGroups(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 

### Return type

[**AgentGroups**](AgentGroups.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

