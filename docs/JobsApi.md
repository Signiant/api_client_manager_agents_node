# ManageragentsApi.JobsApi

All URIs are relative to *https://manager.url/signiant/spring/admin/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addJobVariable**](JobsApi.md#addJobVariable) | **POST** /jobs/variables/{jobname}/{jobgroup} | Edit or add job arguments/variables for a specified job
[**commandsForJob**](JobsApi.md#commandsForJob) | **GET** /jobs/command/{jobname}/{jobgroupname|jobgroupID}/{command} | Send commands to a job
[**createJob**](JobsApi.md#createJob) | **POST** /jobs | Create new job
[**deleteJob**](JobsApi.md#deleteJob) | **DELETE** /jobs/{jobname}/{jobgroupname|jobgroupID} | Soft delete a job by name or ID
[**getFileLogWithRunNumber**](JobsApi.md#getFileLogWithRunNumber) | **GET** /jobs/filelog/{jobName}/{jobGroupName|jobGroupID}/{runNumber} | View the file log for a job in some job group for a specific job run
[**getJob**](JobsApi.md#getJob) | **GET** /jobs/{jobname}/{jobgroupname|jobgroupID} | View job by name
[**getJobByID**](JobsApi.md#getJobByID) | **GET** /jobs/{jobID} | View job by job ID
[**getJobFileLog**](JobsApi.md#getJobFileLog) | **GET** /jobs/filelog/{jobName}/{jobGroupName|jobGroupID} | View the file log for a job in some job group
[**getJobLog**](JobsApi.md#getJobLog) | **GET** /jobs/joblog/{jobName}/{jobGroupName} | View the job log for a job in some job group
[**getJobLogWithRunNumber**](JobsApi.md#getJobLogWithRunNumber) | **GET** /jobs/joblog/{jobName}/{jobGroupName}/{runNumber} | View the job log for a job in some job group for a specific job run
[**getJobView**](JobsApi.md#getJobView) | **GET** /jobs/jobview/{jobviewname|jobviewID} | Get a job view by job view name or job view ID
[**getListJobs**](JobsApi.md#getListJobs) | **GET** /listjobs/{jobgroupname|jobgroupID} | Get a list of jobs from a specified job group
[**getStatsLog**](JobsApi.md#getStatsLog) | **GET** /jobs/statslog/{jobName}/{jobGroupName|jobGroupID} | View the statistic log for a job in some job group
[**getStatsLogWithRunNumber**](JobsApi.md#getStatsLogWithRunNumber) | **GET** /jobs/statslog/{jobName}/{jobGroupName|jobGroupID}/{runNumber} | View the statistic log for a job in some job group for a specific job run
[**hardDeleteJob**](JobsApi.md#hardDeleteJob) | **DELETE** /jobs | Hard Delete a job by ID or name
[**statsJob**](JobsApi.md#statsJob) | **POST** /jobs/stats/{jobname}/{jobgroupname|jobgroupID} | Request specific statistics from a job by group name or group ID
[**statsRunNumberJob**](JobsApi.md#statsRunNumberJob) | **POST** /jobs/stats/{jobname}/{jobgroupname|jobgroupID}/{runnumber} | Request specific statistics from a job with a group name or group ID by run number
[**updateJob**](JobsApi.md#updateJob) | **PUT** /jobs | Edit job


<a name="addJobVariable"></a>
# **addJobVariable**
> Success addJobVariable(username, password, jobname, jobgroup, opts)

Edit or add job arguments/variables for a specified job

Add or edit job variables for a specified job

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobname = "jobname_example"; // String | 

var jobgroup = "jobgroup_example"; // String | 

var opts = { 
  'jSONForAddeditVariablesForASpecifiedJob': new ManageragentsApi.JobArgs() // JobArgs | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addJobVariable(username, password, jobname, jobgroup, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobname** | **String**|  | 
 **jobgroup** | **String**|  | 
 **jSONForAddeditVariablesForASpecifiedJob** | [**JobArgs**](JobArgs.md)|  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commandsForJob"></a>
# **commandsForJob**
> Success commandsForJob(username, password, jobname, jobgroupnamejobgroupID, command)

Send commands to a job

 Send commands to a job by specifying the job name, job group name or ID, and a command.  Valid job commands:  * `force` - Start the job immediately. * `kill` - Cancel the running job. * `suspend` - Prevent future scheduled runs of the job, and prevent it from running automatically in the future. * `resume` - Resume a suspended job. * `delete` - Remove the job from the manager. * `setbwlimits` - Set the bandwidth limits for a job. For more information, see [the getting started guide](https://developer.signiant.com/manager-agents/get-started-with-rest.html#bandwidth-limits). 

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobname = "jobname_example"; // String | 

var jobgroupnamejobgroupID = "jobgroupnamejobgroupID_example"; // String | 

var command = "command_example"; // String | cancel, delete, pause or continue


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsForJob(username, password, jobname, jobgroupnamejobgroupID, command, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobname** | **String**|  | 
 **jobgroupnamejobgroupID** | **String**|  | 
 **command** | **String**| cancel, delete, pause or continue | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createJob"></a>
# **createJob**
> CreateJobResponse createJob(username, password, opts)

Create new job

Create a new job. For more information on creating Media Mover or Object Mover jobs, see [REST API Job examples](https://developer.signiant.com/manager-agents/job-examples.html) and [Scheduling Jobs](https://developer.signiant.com/manager-agents/job-scheduling.html).

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'jSONForCreateAJob': new ManageragentsApi.Job() // Job | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createJob(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jSONForCreateAJob** | [**Job**](Job.md)|  | [optional] 

### Return type

[**CreateJobResponse**](CreateJobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteJob"></a>
# **deleteJob**
> Success deleteJob(username, password, jobname, jobgroupnamejobgroupID)

Soft delete a job by name or ID

Delete a job from the manager and mark a job to be deleted from the database when the next maintenance job runs.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobname = "jobname_example"; // String | 

var jobgroupnamejobgroupID = "jobgroupnamejobgroupID_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteJob(username, password, jobname, jobgroupnamejobgroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobname** | **String**|  | 
 **jobgroupnamejobgroupID** | **String**|  | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileLogWithRunNumber"></a>
# **getFileLogWithRunNumber**
> FileLog getFileLogWithRunNumber(username, password, jobName, jobGroupNamejobGroupID, runNumber)

View the file log for a job in some job group for a specific job run

The file log from some job for a specific job run

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobName = "jobName_example"; // String | 

var jobGroupNamejobGroupID = "jobGroupNamejobGroupID_example"; // String | 

var runNumber = "runNumber_example"; // String | can be 0, 1 or 2


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFileLogWithRunNumber(username, password, jobName, jobGroupNamejobGroupID, runNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobName** | **String**|  | 
 **jobGroupNamejobGroupID** | **String**|  | 
 **runNumber** | **String**| can be 0, 1 or 2 | 

### Return type

[**FileLog**](FileLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJob"></a>
# **getJob**
> GetJob getJob(username, password, jobname, jobgroupnamejobgroupID)

View job by name

Display the details and properties associated with a specific job. To retrieve jobs by name, you must specify a `jobGroupName` or `jobGroupId`

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobname = "jobname_example"; // String | 

var jobgroupnamejobgroupID = "jobgroupnamejobgroupID_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJob(username, password, jobname, jobgroupnamejobgroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobname** | **String**|  | 
 **jobgroupnamejobgroupID** | **String**|  | 

### Return type

[**GetJob**](GetJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobByID"></a>
# **getJobByID**
> GetJob getJobByID(username, password, jobID)

View job by job ID

Display the details and properties associated with a specific job.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobID = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobByID(username, password, jobID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobID** | **Number**|  | 

### Return type

[**GetJob**](GetJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobFileLog"></a>
# **getJobFileLog**
> FileLog getJobFileLog(username, password, jobName, jobGroupNamejobGroupID)

View the file log for a job in some job group

The file log from some job

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobName = "jobName_example"; // String | 

var jobGroupNamejobGroupID = "jobGroupNamejobGroupID_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobFileLog(username, password, jobName, jobGroupNamejobGroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobName** | **String**|  | 
 **jobGroupNamejobGroupID** | **String**|  | 

### Return type

[**FileLog**](FileLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobLog"></a>
# **getJobLog**
> JobLog getJobLog(username, password, jobName, jobGroupName)

View the job log for a job in some job group

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobName = "jobName_example"; // String | 

var jobGroupName = "jobGroupName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobLog(username, password, jobName, jobGroupName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobName** | **String**|  | 
 **jobGroupName** | **String**|  | 

### Return type

[**JobLog**](JobLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobLogWithRunNumber"></a>
# **getJobLogWithRunNumber**
> JobLog getJobLogWithRunNumber(username, password, jobName, jobGroupName, runNumber)

View the job log for a job in some job group for a specific job run

The job log from some job for a specific job run

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobName = "jobName_example"; // String | 

var jobGroupName = "jobGroupName_example"; // String | 

var runNumber = "runNumber_example"; // String | can be 0, 1 or 2


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobLogWithRunNumber(username, password, jobName, jobGroupName, runNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobName** | **String**|  | 
 **jobGroupName** | **String**|  | 
 **runNumber** | **String**| can be 0, 1 or 2 | 

### Return type

[**JobLog**](JobLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobView"></a>
# **getJobView**
> JobView getJobView(username, password, jobviewnamejobviewID)

Get a job view by job view name or job view ID

Return a jobs from some job view.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobviewnamejobviewID = "jobviewnamejobviewID_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobView(username, password, jobviewnamejobviewID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobviewnamejobviewID** | **String**|  | 

### Return type

[**JobView**](JobView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListJobs"></a>
# **getListJobs**
> ListJobs getListJobs(username, password, jobgroupnamejobgroupID)

Get a list of jobs from a specified job group

Return a list of jobs from a specified job group

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobgroupnamejobgroupID = "jobgroupnamejobgroupID_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListJobs(username, password, jobgroupnamejobgroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobgroupnamejobgroupID** | **String**|  | 

### Return type

[**ListJobs**](ListJobs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStatsLog"></a>
# **getStatsLog**
> StatisticLog getStatsLog(username, password, jobName, jobGroupNamejobGroupID)

View the statistic log for a job in some job group

The statistic log from some job

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobName = "jobName_example"; // String | 

var jobGroupNamejobGroupID = "jobGroupNamejobGroupID_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatsLog(username, password, jobName, jobGroupNamejobGroupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobName** | **String**|  | 
 **jobGroupNamejobGroupID** | **String**|  | 

### Return type

[**StatisticLog**](StatisticLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStatsLogWithRunNumber"></a>
# **getStatsLogWithRunNumber**
> StatisticLog getStatsLogWithRunNumber(username, password, jobName, jobGroupNamejobGroupID, runNumber)

View the statistic log for a job in some job group for a specific job run

The statistic log from some job for a specific job run

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobName = "jobName_example"; // String | 

var jobGroupNamejobGroupID = "jobGroupNamejobGroupID_example"; // String | 

var runNumber = "runNumber_example"; // String | can be 0, 1 or 2


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatsLogWithRunNumber(username, password, jobName, jobGroupNamejobGroupID, runNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobName** | **String**|  | 
 **jobGroupNamejobGroupID** | **String**|  | 
 **runNumber** | **String**| can be 0, 1 or 2 | 

### Return type

[**StatisticLog**](StatisticLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="hardDeleteJob"></a>
# **hardDeleteJob**
> Success hardDeleteJob(username, password, opts)

Hard Delete a job by ID or name

Hard delete specific job from the database.

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var opts = { 
  'jSONForHardDeleteJob': new ManageragentsApi.DeleteJob() // DeleteJob | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.hardDeleteJob(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jSONForHardDeleteJob** | [**DeleteJob**](DeleteJob.md)|  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="statsJob"></a>
# **statsJob**
> StatsResponse statsJob(username, password, jobname, jobgroupnamejobgroupID, opts)

Request specific statistics from a job by group name or group ID

Request specific statistics from a job by group name or group ID by including a JSON array with the stats to be returned

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var jobname = "jobname_example"; // String | 

var jobgroupnamejobgroupID = "jobgroupnamejobgroupID_example"; // String | 

var opts = { 
  'jSONToVieweditStatsForTheJob': new ManageragentsApi.Stats() // Stats | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statsJob(username, password, jobname, jobgroupnamejobgroupID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **jobname** | **String**|  | 
 **jobgroupnamejobgroupID** | **String**|  | 
 **jSONToVieweditStatsForTheJob** | [**Stats**](Stats.md)|  | [optional] 

### Return type

[**StatsResponse**](StatsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="statsRunNumberJob"></a>
# **statsRunNumberJob**
> StatsResponse statsRunNumberJob(jobname, jobgroupnamejobgroupID, runnumber, opts)

Request specific statistics from a job with a group name or group ID by run number

Request specific statistics from a job by group name or group ID and number. The number can be 0, 1 and 2

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var jobname = "jobname_example"; // String | 

var jobgroupnamejobgroupID = "jobgroupnamejobgroupID_example"; // String | 

var runnumber = "runnumber_example"; // String | can be 0, 1 and 2

var opts = { 
  'username': "username_example", // String | 
  'password': "password_example", // String | 
  'jSONToVieweditStatsForTheJob': new ManageragentsApi.Stats() // Stats | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statsRunNumberJob(jobname, jobgroupnamejobgroupID, runnumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobname** | **String**|  | 
 **jobgroupnamejobgroupID** | **String**|  | 
 **runnumber** | **String**| can be 0, 1 and 2 | 
 **username** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **jSONToVieweditStatsForTheJob** | [**Stats**](Stats.md)|  | [optional] 

### Return type

[**StatsResponse**](StatsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateJob"></a>
# **updateJob**
> Success updateJob(username, password, opts)

Edit job

Edit a job

### Example
```javascript
var ManageragentsApi = require('manageragents_api');

var apiInstance = new ManageragentsApi.JobsApi();

var username = "username_example"; // String | Administrator user name.

var password = "password_example"; // String | Administrator password.

var opts = { 
  'jSONForEditAJob': new ManageragentsApi.EditJob() // EditJob | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateJob(username, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Administrator user name. | 
 **password** | **String**| Administrator password. | 
 **jSONForEditAJob** | [**EditJob**](EditJob.md)|  | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

