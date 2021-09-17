# ManageragentsApi.ObjectStorageProfilesApi

All URIs are relative to *https://manager.url/signiant/spring/admin/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createObjectStorageProfile**](ObjectStorageProfilesApi.md#createObjectStorageProfile) | **POST** /storageprofiles | Create Local S3 object storage profile
[**deleteStorageProfile**](ObjectStorageProfilesApi.md#deleteStorageProfile) | **DELETE** /storageprofiles/{storageprofilename|storageprofileID} | Delete Local S3/Azure/AWS S3 object storage profile
[**editObjectStorageProfile**](ObjectStorageProfilesApi.md#editObjectStorageProfile) | **PUT** /storageprofiles | Edit Local S3 object storage profile
[**getListStorageProfiles**](ObjectStorageProfilesApi.md#getListStorageProfiles) | **GET** /liststorageprofiles | Get a list of all object storage profiles
[**getLocalS3StorageProfile**](ObjectStorageProfilesApi.md#getLocalS3StorageProfile) | **GET** /storageprofiles/{storageprofilename|storageprofileID} | Get Local S3 Storage Profile by name or storage profile ID


<a name="createObjectStorageProfile"></a>
# **createObjectStorageProfile**
> CreateObjectStorageResponse createObjectStorageProfile(username, password, opts)

Create Local S3 object storage profile

Local S3 Object storage profile.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ObjectStorageProfilesApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'jSONForCreateLocalS3ObjectStorageProfileJSONForAzureStorageProfileIsInModelCreateAzureStorageProfileAndJSONForAWSS3StorageProfileIsInModelCreateAWSS3StorageProfile': new ManageragentsApi.StorageProfile() // StorageProfile | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createObjectStorageProfile(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jSONForCreateLocalS3ObjectStorageProfileJSONForAzureStorageProfileIsInModelCreateAzureStorageProfileAndJSONForAWSS3StorageProfileIsInModelCreateAWSS3StorageProfile** | [**StorageProfile**](StorageProfile.md)|  | [optional] 

### Return type

[**CreateObjectStorageResponse**](CreateObjectStorageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteStorageProfile"></a>
# **deleteStorageProfile**
> Success deleteStorageProfile(username, password, storageprofilenamestorageprofileID)

Delete Local S3/Azure/AWS S3 object storage profile

Deletes specific storage profileby name or by ID

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ObjectStorageProfilesApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var storageprofilenamestorageprofileID = "storageprofilenamestorageprofileID_example"; // String | storage profile name or storage profile ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteStorageProfile(username, password, storageprofilenamestorageprofileID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **storageprofilenamestorageprofileID** | **String**| storage profile name or storage profile ID | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editObjectStorageProfile"></a>
# **editObjectStorageProfile**
> Success editObjectStorageProfile(username, password, opts)

Edit Local S3 object storage profile

Object storage profile

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ObjectStorageProfilesApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'jSONForEditLocalS3ObjectStorageProfile': new ManageragentsApi.EditS3StorageProfile() // EditS3StorageProfile | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editObjectStorageProfile(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jSONForEditLocalS3ObjectStorageProfile** | [**EditS3StorageProfile**](EditS3StorageProfile.md)|  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListStorageProfiles"></a>
# **getListStorageProfiles**
> ListStorageProfiles getListStorageProfiles(username, password)

Get a list of all object storage profiles

Return a list of all object storage profiles

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ObjectStorageProfilesApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListStorageProfiles(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 

### Return type

[**ListStorageProfiles**](ListStorageProfiles.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLocalS3StorageProfile"></a>
# **getLocalS3StorageProfile**
> GetS3StorageProfile getLocalS3StorageProfile(username, password, storageprofilenamestorageprofileID)

Get Local S3 Storage Profile by name or storage profile ID

Returns details about specific Local S3 Storage profile

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.ObjectStorageProfilesApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var storageprofilenamestorageprofileID = "storageprofilenamestorageprofileID_example"; // String | The storage profile name or storage profile ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocalS3StorageProfile(username, password, storageprofilenamestorageprofileID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **storageprofilenamestorageprofileID** | **String**| The storage profile name or storage profile ID | 

### Return type

[**GetS3StorageProfile**](GetS3StorageProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

