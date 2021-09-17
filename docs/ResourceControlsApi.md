# ManageragentsApi.ResourceControlsApi

All URIs are relative to *https://manager.url/signiant/spring/admin/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateResourceControl**](ResourceControlsApi.md#activateResourceControl) | **POST** /activateresourcecontrols | Activate resource control
[**createResourceControl**](ResourceControlsApi.md#createResourceControl) | **POST** /resourcecontrols | Create resource control
[**deactivateResourceControl**](ResourceControlsApi.md#deactivateResourceControl) | **POST** /deactivateresourcecontrols | Deactivate resource control
[**deleteResourceControl**](ResourceControlsApi.md#deleteResourceControl) | **DELETE** /resourcecontrols/resourcecontrolname|resourcecontrolID | Delete resource control
[**editResourceControl**](ResourceControlsApi.md#editResourceControl) | **PUT** /resourcecontrols | Edit a resource control
[**getConsumersResourceControl**](ResourceControlsApi.md#getConsumersResourceControl) | **GET** /listresourcecontrolqueue/resourcecontrolname|resourcecontrolID | List of all consumers by name or ID for a specified resource control.
[**getresourceControl**](ResourceControlsApi.md#getresourceControl) | **GET** /resourcecontrols/resourcecontrolname|resourcecontrolID | View a specific resource control
[**listresourcecontrols**](ResourceControlsApi.md#listresourcecontrols) | **GET** /listresourcecontrols | List all Resource Controls
[**moveAgentResourceControl**](ResourceControlsApi.md#moveAgentResourceControl) | **GET** /resourceontrols/move/consumerID/value | Move jobs in the Agent|MediaExchange resource control queue.
[**moveJobResourceControl**](ResourceControlsApi.md#moveJobResourceControl) | **GET** /resourcecontrols/move/jobname|jobID/jobgroupname/value | Move jobs in resource control queue.


<a name="activateResourceControl"></a>
# **activateResourceControl**
> ActivateDeactivateResourceControlsResponse activateResourceControl(username, password, resourceControl)

Activate resource control

Activates a resource control.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var resourceControl = new ManageragentsApi.ActivateDeactivateResourceControl(); // ActivateDeactivateResourceControl | The attributes of the resource control to be activated 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activateResourceControl(username, password, resourceControl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **resourceControl** | [**ActivateDeactivateResourceControl**](ActivateDeactivateResourceControl.md)| The attributes of the resource control to be activated  | 

### Return type

[**ActivateDeactivateResourceControlsResponse**](ActivateDeactivateResourceControlsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createResourceControl"></a>
# **createResourceControl**
> CreateResourceControlResponse createResourceControl(username, password, resourceControl)

Create resource control

Creates a resource control.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var resourceControl = new ManageragentsApi.ResourceControl(); // ResourceControl | The attributes of the resource control to be created. All create resourcecontrols requests must include a **name** for the resource control Resource Control requests must include a valid \"configuration\" object. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createResourceControl(username, password, resourceControl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **resourceControl** | [**ResourceControl**](ResourceControl.md)| The attributes of the resource control to be created. All create resourcecontrols requests must include a **name** for the resource control Resource Control requests must include a valid \"configuration\" object.  | 

### Return type

[**CreateResourceControlResponse**](CreateResourceControlResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deactivateResourceControl"></a>
# **deactivateResourceControl**
> ActivateDeactivateResourceControlsResponse deactivateResourceControl(username, password, opts)

Deactivate resource control

Deactivates a resource control.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'resourceControl': new ManageragentsApi.ActivateDeactivateResourceControl() // ActivateDeactivateResourceControl | The attributes of the resource control to be deactivated 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deactivateResourceControl(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **resourceControl** | [**ActivateDeactivateResourceControl**](ActivateDeactivateResourceControl.md)| The attributes of the resource control to be deactivated  | [optional] 

### Return type

[**ActivateDeactivateResourceControlsResponse**](ActivateDeactivateResourceControlsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteResourceControl"></a>
# **deleteResourceControl**
> Success deleteResourceControl(username, password, resourcecontrolnameresourcecontrolID)

Delete resource control

Deletes specific resource control by name or by resource controlID

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var resourcecontrolnameresourcecontrolID = "resourcecontrolnameresourcecontrolID_example"; // String | resource control **name* or resource **controlID**


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteResourceControl(username, password, resourcecontrolnameresourcecontrolID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **resourcecontrolnameresourcecontrolID** | **String**| resource control **name* or resource **controlID** | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editResourceControl"></a>
# **editResourceControl**
> Success editResourceControl(username, password, opts)

Edit a resource control

Modifies a specific resource control.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var opts = { 
  'resourceControl': new ManageragentsApi.ResourceControl() // ResourceControl | The attributes of the resource control to be modified. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editResourceControl(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **resourceControl** | [**ResourceControl**](ResourceControl.md)| The attributes of the resource control to be modified.  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConsumersResourceControl"></a>
# **getConsumersResourceControl**
> ListResourceControlQueueResponse getConsumersResourceControl(resourcecontrolnameresourcecontrolID, opts)

List of all consumers by name or ID for a specified resource control.

Gets a list of all consumers by name or ID for a specified resource control.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var resourcecontrolnameresourcecontrolID = "resourcecontrolnameresourcecontrolID_example"; // String | Resource control name or resourcecontrolID

var opts = { 
  'username': "username_example", // String | Administrator user name.
  'password': "password_example" // String | Administrator password
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConsumersResourceControl(resourcecontrolnameresourcecontrolID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourcecontrolnameresourcecontrolID** | **String**| Resource control name or resourcecontrolID | 
 **username** | **String**| Administrator user name. | [optional] 
 **password** | **String**| Administrator password | [optional] 

### Return type

[**ListResourceControlQueueResponse**](ListResourceControlQueueResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getresourceControl"></a>
# **getresourceControl**
> ResourceControlResponse getresourceControl(username, password, resourcecontrolnameresourcecontrolID)

View a specific resource control

Returns details about specific resource controlby **name** or **ID**

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var resourcecontrolnameresourcecontrolID = "resourcecontrolnameresourcecontrolID_example"; // String | resource control **name** or **resourceControlID**


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getresourceControl(username, password, resourcecontrolnameresourcecontrolID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **resourcecontrolnameresourcecontrolID** | **String**| resource control **name** or **resourceControlID** | 

### Return type

[**ResourceControlResponse**](ResourceControlResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listresourcecontrols"></a>
# **listresourcecontrols**
> ListResourceControlsResponse listresourcecontrols(username, password)

List all Resource Controls

Get a list of all Resource Controls

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listresourcecontrols(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 

### Return type

[**ListResourceControlsResponse**](ListResourceControlsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveAgentResourceControl"></a>
# **moveAgentResourceControl**
> Success moveAgentResourceControl(consumerID, value, opts)

Move jobs in the Agent|MediaExchange resource control queue.

Move jobs in the Agent and Media Exchange resource control queue. To move the job to the left, the value can be: ..., -3, -2, -1. To move the job to the right, the value can be: 1, 2, 3, .... 

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var consumerID = "consumerID_example"; // String | The Consumer ID

var value = "value_example"; // String | To move the job to the left, the value can be: ..., -3, -2, -1. To move the job to the right, the value can be: 1, 2, 3,... 

var opts = { 
  'usernamex': "usernamex_example", // String | Administrator user name.
  'password': "password_example" // String | Administrator password.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.moveAgentResourceControl(consumerID, value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerID** | **String**| The Consumer ID | 
 **value** | **String**| To move the job to the left, the value can be: ..., -3, -2, -1. To move the job to the right, the value can be: 1, 2, 3,...  | 
 **usernamex** | **String**| Administrator user name. | [optional] 
 **password** | **String**| Administrator password. | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveJobResourceControl"></a>
# **moveJobResourceControl**
> Success moveJobResourceControl(username, password, jobnamejobID, jobgroupname, value)

Move jobs in resource control queue.

Move jobs in the job resource control queue. To move the job to the left, the value can be: ..., -3, -2, -1. To move the job to the right, the value can be: 1, 2, 3,... 

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ResourceControlsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var jobnamejobID = "jobnamejobID_example"; // String | Job name or JobID of the job that should be moved

var jobgroupname = "jobgroupname_example"; // String | Job group name of the job that should be moved

var value = "value_example"; // String | To move the job to the left, the value can be: ..., -3, -2, -1. To move the job to the right, the value can be: 1, 2, 3,... 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.moveJobResourceControl(username, password, jobnamejobID, jobgroupname, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jobnamejobID** | **String**| Job name or JobID of the job that should be moved | 
 **jobgroupname** | **String**| Job group name of the job that should be moved | 
 **value** | **String**| To move the job to the left, the value can be: ..., -3, -2, -1. To move the job to the right, the value can be: 1, 2, 3,...  | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

