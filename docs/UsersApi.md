# ManageragentsApi.UsersApi

All URIs are relative to *https://manager.url/signiant/spring/admin/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateUser**](UsersApi.md#activateUser) | **POST** /activateusers | Activate user
[**changePassword**](UsersApi.md#changePassword) | **POST** /changepassword | Change user password
[**createUser**](UsersApi.md#createUser) | **POST** /users | Create user
[**deactivateUser**](UsersApi.md#deactivateUser) | **POST** /deactivateusers | Deactivate user
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{username|userID} | Delete user by username or userID
[**editUser**](UsersApi.md#editUser) | **PUT** /users | Edit user
[**getUser**](UsersApi.md#getUser) | **GET** /users/{username|userID} | Get user by username or userID
[**listusers**](UsersApi.md#listusers) | **GET** /listusers | List all users


<a name="activateUser"></a>
# **activateUser**
> ActivateDeactivateUserResponse activateUser(username, password, opts)

Activate user

Activates a specific user account

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UsersApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'user': new ManageragentsApi.ActivateUser() // ActivateUser | The username or userID of the user that should be activated. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activateUser(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **user** | [**ActivateUser**](ActivateUser.md)| The username or userID of the user that should be activated.  | [optional] 

### Return type

[**ActivateDeactivateUserResponse**](ActivateDeactivateUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="changePassword"></a>
# **changePassword**
> Success changePassword(username, password, user)

Change user password

Change a user's password.  You must have the user's current password to perform this operation. 

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UsersApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var user = new ManageragentsApi.ChangePassword(); // ChangePassword | The user's **name**, **new password** and **current password**


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changePassword(username, password, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **user** | [**ChangePassword**](ChangePassword.md)| The user's **name**, **new password** and **current password** | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> CreateUserResponse createUser(username, password, user)

Create user

Creates a new user by specifying user details, roles, access ACLs and menu permissions.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UsersApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var user = new ManageragentsApi.User(); // User | Contains user attributes. All calls must include **userName**, **firstName**, **lastName**, **email**, **password**, and **organization**.  


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(username, password, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **user** | [**User**](User.md)| Contains user attributes. All calls must include **userName**, **firstName**, **lastName**, **email**, **password**, and **organization**.   | 

### Return type

[**CreateUserResponse**](CreateUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deactivateUser"></a>
# **deactivateUser**
> ActivateDeactivateUserResponse deactivateUser(username, password, opts)

Deactivate user

Deactivates a specific user account

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UsersApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'user': new ManageragentsApi.DeactivateUser() // DeactivateUser | The username or id of the user that should be activated 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deactivateUser(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **user** | [**DeactivateUser**](DeactivateUser.md)| The username or id of the user that should be activated  | [optional] 

### Return type

[**ActivateDeactivateUserResponse**](ActivateDeactivateUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> Success deleteUser(username, password, usernameuserID)

Delete user by username or userID

Deletes specific user

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UsersApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var usernameuserID = "usernameuserID_example"; // String | The user's username or userID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUser(username, password, usernameuserID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **usernameuserID** | **String**| The user's username or userID | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editUser"></a>
# **editUser**
> Success editUser(username, password, opts)

Edit user

Edit existing users by modifying their attributes.  All edit user requests must include the `userName` field.  You can update more than one user at a time.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UsersApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'user': new ManageragentsApi.User() // User | Contains user attributes you want to add or edit. User requests must include a valid \"configuration\" object. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editUser(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **user** | [**User**](User.md)| Contains user attributes you want to add or edit. User requests must include a valid \"configuration\" object.  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> UserResponse getUser(username, password, usernameuserID)

Get user by username or userID

Returns details about specific user identified by their user name, userID, or email address

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UsersApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var usernameuserID = "usernameuserID_example"; // String | The user's username, userID or user email.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(username, password, usernameuserID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **usernameuserID** | **String**| The user's username, userID or user email. | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listusers"></a>
# **listusers**
> ListUsersResponse listusers(username, password)

List all users

List all users.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.UsersApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listusers(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 

### Return type

[**ListUsersResponse**](ListUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

