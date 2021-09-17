# ManageragentsApi.JobGroupsApi

All URIs are relative to *https://manager.url/signiant/spring/admin/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJobGroup**](JobGroupsApi.md#createJobGroup) | **POST** /jobgroups | Create job group
[**deleteJobGroup**](JobGroupsApi.md#deleteJobGroup) | **DELETE** /jobgroups/{jobgroupname|jobgroupID} | Delete job group
[**editJobGroup**](JobGroupsApi.md#editJobGroup) | **PUT** /jobgroups | Edit a job group
[**getJobGroup**](JobGroupsApi.md#getJobGroup) | **GET** /jobgroups/{jobgroupname|jobgroupID} | Get job group by name or by jobGroupID
[**listJobGroups**](JobGroupsApi.md#listJobGroups) | **GET** /listjobgroups | List all job groups


<a name="createJobGroup"></a>
# **createJobGroup**
> CreateJobGroupResponse createJobGroup(username, password, opts)

Create job group

Creates a job group.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'jobGroup': new ManageragentsApi.JobGroup() // JobGroup | The attributes of the job group to be created. All create job group requests must include the name of the job group. Job group requests must include a valid \"configuration\" object. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createJobGroup(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jobGroup** | [**JobGroup**](JobGroup.md)| The attributes of the job group to be created. All create job group requests must include the name of the job group. Job group requests must include a valid \"configuration\" object.  | [optional] 

### Return type

[**CreateJobGroupResponse**](CreateJobGroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteJobGroup"></a>
# **deleteJobGroup**
> Success deleteJobGroup(username, password, jobgroupnamejobgroupID)

Delete job group

Delete a specific job group by name or by ID.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var jobgroupnamejobgroupID = "jobgroupnamejobgroupID_example"; // String | job group name or job group id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteJobGroup(username, password, jobgroupnamejobgroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jobgroupnamejobgroupID** | **String**| job group name or job group id | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editJobGroup"></a>
# **editJobGroup**
> Success editJobGroup(username, password, opts)

Edit a job group

Modifies a specific job group.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'jobGroup': new ManageragentsApi.JobGroup() // JobGroup | The attributes of the job group to be modified. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editJobGroup(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jobGroup** | [**JobGroup**](JobGroup.md)| The attributes of the job group to be modified.  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobGroup"></a>
# **getJobGroup**
> JobGroupResponse getJobGroup(username, password, jobgroupnamejobgroupID)

Get job group by name or by jobGroupID

Returns details about specific job group by name or by jobGroupID

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator user name.

var jobgroupnamejobgroupID = "jobgroupnamejobgroupID_example"; // String | The job group name or jobGroupID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobGroup(username, password, jobgroupnamejobgroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator user name. | 
 **jobgroupnamejobgroupID** | **String**| The job group name or jobGroupID | 

### Return type

[**JobGroupResponse**](JobGroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listJobGroups"></a>
# **listJobGroups**
> ListJobGroupsResponse listJobGroups(username, password)

List all job groups

Get a list of job groups

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobGroupsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listJobGroups(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 

### Return type

[**ListJobGroupsResponse**](ListJobGroupsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

