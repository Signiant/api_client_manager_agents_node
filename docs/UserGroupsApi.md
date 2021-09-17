# ManageragentsApi.UserGroupsApi

All URIs are relative to *https://manager.url/signiant/spring/admin/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserGroup**](UserGroupsApi.md#createUserGroup) | **POST** /usergroups | Create a user group
[**deleteUserGroup**](UserGroupsApi.md#deleteUserGroup) | **DELETE** /usergroups/{groupname|groupID} | Delete a user group by name or by groupID
[**editUserGroup**](UserGroupsApi.md#editUserGroup) | **PUT** /usergroups | Edit a user group
[**getUserGroup**](UserGroupsApi.md#getUserGroup) | **GET** /usergroups/{groupname|groupID} | Get a user group by name or by groupID
[**listUserGroups**](UserGroupsApi.md#listUserGroups) | **GET** /listusergroups | Get a list of user groups


<a name="createUserGroup"></a>
# **createUserGroup**
> CreateUserGroupResponse createUserGroup(username, password, opts)

Create a user group

Creates a new user group.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UserGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'userGroup': new ManageragentsApi.UserGroup() // UserGroup | Create a new user group.  All new user groups must include the `groupName` field. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserGroup(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **userGroup** | [**UserGroup**](UserGroup.md)| Create a new user group.  All new user groups must include the `groupName` field.  | [optional] 

### Return type

[**CreateUserGroupResponse**](CreateUserGroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserGroup"></a>
# **deleteUserGroup**
> Success deleteUserGroup(username, password, groupnamegroupID)

Delete a user group by name or by groupID

Deletes specific user group

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UserGroupsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var groupnamegroupID = "groupnamegroupID_example"; // String | group name or goupID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserGroup(username, password, groupnamegroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **groupnamegroupID** | **String**| group name or goupID | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editUserGroup"></a>
# **editUserGroup**
> Success editUserGroup(username, password, opts)

Edit a user group

Modifies a specific user group.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UserGroupsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var opts = { 
  'userGroup': new ManageragentsApi.UserGroup() // UserGroup | The attributes of the user group to be modified.  User group requests must include the group name. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editUserGroup(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **userGroup** | [**UserGroup**](UserGroup.md)| The attributes of the user group to be modified.  User group requests must include the group name.  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserGroup"></a>
# **getUserGroup**
> UserGroupResponse getUserGroup(username, password, groupnamegroupID)

Get a user group by name or by groupID

Returns details about specific user group

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UserGroupsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var groupnamegroupID = "groupnamegroupID_example"; // String | group name or goupID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserGroup(username, password, groupnamegroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **groupnamegroupID** | **String**| group name or goupID | 

### Return type

[**UserGroupResponse**](UserGroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUserGroups"></a>
# **listUserGroups**
> ListUserGroupsResponse listUserGroups(username, password)

Get a list of user groups

List all user groups.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UserGroupsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUserGroups(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 

### Return type

[**ListUserGroupsResponse**](ListUserGroupsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

