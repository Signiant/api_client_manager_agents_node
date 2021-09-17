# Manager+Agents API

ManageragentsApi - JavaScript client for manageragents_api
Signiant Manager+Agents provides a REST API to automate user management, user group, agent groups, jobs, resource controls, and job groups. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 14.1.0
- Package version: 14.1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install manageragents_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your manageragents_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('manageragents_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/manageragents_api
then install it via:

```shell
    npm install YOUR_USERNAME/manageragents_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ManageragentsApi = require('manageragents_api');

var api = new ManageragentsApi.AgentGroupsApi()

var username = "username_example"; // {String} Administrator user name.

var password = "password_example"; // {String} Administrator password.

var opts = { 
  'jSONForCreateAgentGroup': new ManageragentsApi.AgentGroup() // {AgentGroup} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createAgentGroup(username, password, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://manager.url/signiant/spring/admin/v1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ManageragentsApi.AgentGroupsApi* | [**createAgentGroup**](docs/AgentGroupsApi.md#createAgentGroup) | **POST** /agentgroups | Create agent group
*ManageragentsApi.AgentGroupsApi* | [**deleteAgentGroup**](docs/AgentGroupsApi.md#deleteAgentGroup) | **DELETE** /agentgroups/{agentgroupname|agentgroupID} | Delete agent group
*ManageragentsApi.AgentGroupsApi* | [**editAgentGroup**](docs/AgentGroupsApi.md#editAgentGroup) | **PUT** /agentgroups | Edit agent group
*ManageragentsApi.AgentGroupsApi* | [**getAgentGroup**](docs/AgentGroupsApi.md#getAgentGroup) | **GET** /agentgroups/{agentgroupname|agentgroupID} | View Agent Group
*ManageragentsApi.AgentGroupsApi* | [**getAgentGroups**](docs/AgentGroupsApi.md#getAgentGroups) | **GET** /listagentgroups | List all agent groups
*ManageragentsApi.AgentsApi* | [**getAgent**](docs/AgentsApi.md#getAgent) | **GET** /listagents | List agents
*ManageragentsApi.AgentsApi* | [**revokeCertificate**](docs/AgentsApi.md#revokeCertificate) | **POST** /certificate/revoke | Revoke certificate
*ManageragentsApi.JobGroupsApi* | [**createJobGroup**](docs/JobGroupsApi.md#createJobGroup) | **POST** /jobgroups | Create job group
*ManageragentsApi.JobGroupsApi* | [**deleteJobGroup**](docs/JobGroupsApi.md#deleteJobGroup) | **DELETE** /jobgroups/{jobgroupname|jobgroupID} | Delete job group
*ManageragentsApi.JobGroupsApi* | [**editJobGroup**](docs/JobGroupsApi.md#editJobGroup) | **PUT** /jobgroups | Edit a job group
*ManageragentsApi.JobGroupsApi* | [**getJobGroup**](docs/JobGroupsApi.md#getJobGroup) | **GET** /jobgroups/{jobgroupname|jobgroupID} | Get job group by name or by jobGroupID
*ManageragentsApi.JobGroupsApi* | [**listJobGroups**](docs/JobGroupsApi.md#listJobGroups) | **GET** /listjobgroups | List all job groups
*ManageragentsApi.JobsApi* | [**addJobVariable**](docs/JobsApi.md#addJobVariable) | **POST** /jobs/variables/{jobname}/{jobgroup} | Edit or add job arguments/variables for a specified job
*ManageragentsApi.JobsApi* | [**commandsForJob**](docs/JobsApi.md#commandsForJob) | **GET** /jobs/command/{jobname}/{jobgroupname|jobgroupID}/{command} | Send commands to a job
*ManageragentsApi.JobsApi* | [**createJob**](docs/JobsApi.md#createJob) | **POST** /jobs | Create new job
*ManageragentsApi.JobsApi* | [**deleteJob**](docs/JobsApi.md#deleteJob) | **DELETE** /jobs/{jobname}/{jobgroupname|jobgroupID} | Soft delete a job by name or ID
*ManageragentsApi.JobsApi* | [**getFileLogWithRunNumber**](docs/JobsApi.md#getFileLogWithRunNumber) | **GET** /jobs/filelog/{jobName}/{jobGroupName|jobGroupID}/{runNumber} | View the file log for a job in some job group for a specific job run
*ManageragentsApi.JobsApi* | [**getJob**](docs/JobsApi.md#getJob) | **GET** /jobs/{jobname}/{jobgroupname|jobgroupID} | View job by name
*ManageragentsApi.JobsApi* | [**getJobByID**](docs/JobsApi.md#getJobByID) | **GET** /jobs/{jobID} | View job by job ID
*ManageragentsApi.JobsApi* | [**getJobFileLog**](docs/JobsApi.md#getJobFileLog) | **GET** /jobs/filelog/{jobName}/{jobGroupName|jobGroupID} | View the file log for a job in some job group
*ManageragentsApi.JobsApi* | [**getJobLog**](docs/JobsApi.md#getJobLog) | **GET** /jobs/joblog/{jobName}/{jobGroupName} | View the job log for a job in some job group
*ManageragentsApi.JobsApi* | [**getJobLogWithRunNumber**](docs/JobsApi.md#getJobLogWithRunNumber) | **GET** /jobs/joblog/{jobName}/{jobGroupName}/{runNumber} | View the job log for a job in some job group for a specific job run
*ManageragentsApi.JobsApi* | [**getJobView**](docs/JobsApi.md#getJobView) | **GET** /jobs/jobview/{jobviewname|jobviewID} | Get a job view by job view name or job view ID
*ManageragentsApi.JobsApi* | [**getListJobs**](docs/JobsApi.md#getListJobs) | **GET** /listjobs/{jobgroupname|jobgroupID} | Get a list of jobs from a specified job group
*ManageragentsApi.JobsApi* | [**getStatsLog**](docs/JobsApi.md#getStatsLog) | **GET** /jobs/statslog/{jobName}/{jobGroupName|jobGroupID} | View the statistic log for a job in some job group
*ManageragentsApi.JobsApi* | [**getStatsLogWithRunNumber**](docs/JobsApi.md#getStatsLogWithRunNumber) | **GET** /jobs/statslog/{jobName}/{jobGroupName|jobGroupID}/{runNumber} | View the statistic log for a job in some job group for a specific job run
*ManageragentsApi.JobsApi* | [**hardDeleteJob**](docs/JobsApi.md#hardDeleteJob) | **DELETE** /jobs | Hard Delete a job by ID or name
*ManageragentsApi.JobsApi* | [**statsJob**](docs/JobsApi.md#statsJob) | **POST** /jobs/stats/{jobname}/{jobgroupname|jobgroupID} | Request specific statistics from a job by group name or group ID
*ManageragentsApi.JobsApi* | [**statsRunNumberJob**](docs/JobsApi.md#statsRunNumberJob) | **POST** /jobs/stats/{jobname}/{jobgroupname|jobgroupID}/{runnumber} | Request specific statistics from a job with a group name or group ID by run number
*ManageragentsApi.JobsApi* | [**updateJob**](docs/JobsApi.md#updateJob) | **PUT** /jobs | Edit job
*ManageragentsApi.ObjectStorageProfilesApi* | [**createObjectStorageProfile**](docs/ObjectStorageProfilesApi.md#createObjectStorageProfile) | **POST** /storageprofiles | Create Local S3 object storage profile
*ManageragentsApi.ObjectStorageProfilesApi* | [**deleteStorageProfile**](docs/ObjectStorageProfilesApi.md#deleteStorageProfile) | **DELETE** /storageprofiles/{storageprofilename|storageprofileID} | Delete Local S3/Azure/AWS S3 object storage profile
*ManageragentsApi.ObjectStorageProfilesApi* | [**editObjectStorageProfile**](docs/ObjectStorageProfilesApi.md#editObjectStorageProfile) | **PUT** /storageprofiles | Edit Local S3 object storage profile
*ManageragentsApi.ObjectStorageProfilesApi* | [**getListStorageProfiles**](docs/ObjectStorageProfilesApi.md#getListStorageProfiles) | **GET** /liststorageprofiles | Get a list of all object storage profiles
*ManageragentsApi.ObjectStorageProfilesApi* | [**getLocalS3StorageProfile**](docs/ObjectStorageProfilesApi.md#getLocalS3StorageProfile) | **GET** /storageprofiles/{storageprofilename|storageprofileID} | Get Local S3 Storage Profile by name or storage profile ID
*ManageragentsApi.ResourceControlsApi* | [**activateResourceControl**](docs/ResourceControlsApi.md#activateResourceControl) | **POST** /activateresourcecontrols | Activate resource control
*ManageragentsApi.ResourceControlsApi* | [**createResourceControl**](docs/ResourceControlsApi.md#createResourceControl) | **POST** /resourcecontrols | Create resource control
*ManageragentsApi.ResourceControlsApi* | [**deactivateResourceControl**](docs/ResourceControlsApi.md#deactivateResourceControl) | **POST** /deactivateresourcecontrols | Deactivate resource control
*ManageragentsApi.ResourceControlsApi* | [**deleteResourceControl**](docs/ResourceControlsApi.md#deleteResourceControl) | **DELETE** /resourcecontrols/resourcecontrolname|resourcecontrolID | Delete resource control
*ManageragentsApi.ResourceControlsApi* | [**editResourceControl**](docs/ResourceControlsApi.md#editResourceControl) | **PUT** /resourcecontrols | Edit a resource control
*ManageragentsApi.ResourceControlsApi* | [**getConsumersResourceControl**](docs/ResourceControlsApi.md#getConsumersResourceControl) | **GET** /listresourcecontrolqueue/resourcecontrolname|resourcecontrolID | List of all consumers by name or ID for a specified resource control.
*ManageragentsApi.ResourceControlsApi* | [**getresourceControl**](docs/ResourceControlsApi.md#getresourceControl) | **GET** /resourcecontrols/resourcecontrolname|resourcecontrolID | View a specific resource control
*ManageragentsApi.ResourceControlsApi* | [**listresourcecontrols**](docs/ResourceControlsApi.md#listresourcecontrols) | **GET** /listresourcecontrols | List all Resource Controls
*ManageragentsApi.ResourceControlsApi* | [**moveAgentResourceControl**](docs/ResourceControlsApi.md#moveAgentResourceControl) | **GET** /resourceontrols/move/consumerID/value | Move jobs in the Agent|MediaExchange resource control queue.
*ManageragentsApi.ResourceControlsApi* | [**moveJobResourceControl**](docs/ResourceControlsApi.md#moveJobResourceControl) | **GET** /resourcecontrols/move/jobname|jobID/jobgroupname/value | Move jobs in resource control queue.
*ManageragentsApi.UserGroupsApi* | [**createUserGroup**](docs/UserGroupsApi.md#createUserGroup) | **POST** /usergroups | Create a user group
*ManageragentsApi.UserGroupsApi* | [**deleteUserGroup**](docs/UserGroupsApi.md#deleteUserGroup) | **DELETE** /usergroups/{groupname|groupID} | Delete a user group by name or by groupID
*ManageragentsApi.UserGroupsApi* | [**editUserGroup**](docs/UserGroupsApi.md#editUserGroup) | **PUT** /usergroups | Edit a user group
*ManageragentsApi.UserGroupsApi* | [**getUserGroup**](docs/UserGroupsApi.md#getUserGroup) | **GET** /usergroups/{groupname|groupID} | Get a user group by name or by groupID
*ManageragentsApi.UserGroupsApi* | [**listUserGroups**](docs/UserGroupsApi.md#listUserGroups) | **GET** /listusergroups | Get a list of user groups
*ManageragentsApi.UsersApi* | [**activateUser**](docs/UsersApi.md#activateUser) | **POST** /activateusers | Activate user
*ManageragentsApi.UsersApi* | [**changePassword**](docs/UsersApi.md#changePassword) | **POST** /changepassword | Change user password
*ManageragentsApi.UsersApi* | [**createUser**](docs/UsersApi.md#createUser) | **POST** /users | Create user
*ManageragentsApi.UsersApi* | [**deactivateUser**](docs/UsersApi.md#deactivateUser) | **POST** /deactivateusers | Deactivate user
*ManageragentsApi.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /users/{username|userID} | Delete user by username or userID
*ManageragentsApi.UsersApi* | [**editUser**](docs/UsersApi.md#editUser) | **PUT** /users | Edit user
*ManageragentsApi.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{username|userID} | Get user by username or userID
*ManageragentsApi.UsersApi* | [**listusers**](docs/UsersApi.md#listusers) | **GET** /listusers | List all users


## Documentation for Models

 - [ManageragentsApi.AccessAcl](docs/AccessAcl.md)
 - [ManageragentsApi.AccessAcls](docs/AccessAcls.md)
 - [ManageragentsApi.ActivateDeactivateResourceControl](docs/ActivateDeactivateResourceControl.md)
 - [ManageragentsApi.ActivateDeactivateResourceControlsResponse](docs/ActivateDeactivateResourceControlsResponse.md)
 - [ManageragentsApi.ActivateDeactivateUserResponse](docs/ActivateDeactivateUserResponse.md)
 - [ManageragentsApi.ActivateUser](docs/ActivateUser.md)
 - [ManageragentsApi.AddAgentGroupMembers](docs/AddAgentGroupMembers.md)
 - [ManageragentsApi.AgentGroup](docs/AgentGroup.md)
 - [ManageragentsApi.AgentGroups](docs/AgentGroups.md)
 - [ManageragentsApi.AgentGroupsObject](docs/AgentGroupsObject.md)
 - [ManageragentsApi.Agents](docs/Agents.md)
 - [ManageragentsApi.ChangePassword](docs/ChangePassword.md)
 - [ManageragentsApi.CreateAWSS3StorageProfile](docs/CreateAWSS3StorageProfile.md)
 - [ManageragentsApi.CreateAgentGroupResponse](docs/CreateAgentGroupResponse.md)
 - [ManageragentsApi.CreateAzureStorageProfile](docs/CreateAzureStorageProfile.md)
 - [ManageragentsApi.CreateJobGroupResponse](docs/CreateJobGroupResponse.md)
 - [ManageragentsApi.CreateJobResponse](docs/CreateJobResponse.md)
 - [ManageragentsApi.CreateObjectStorageResponse](docs/CreateObjectStorageResponse.md)
 - [ManageragentsApi.CreateResourceControlResponse](docs/CreateResourceControlResponse.md)
 - [ManageragentsApi.CreateS3StorageProfile](docs/CreateS3StorageProfile.md)
 - [ManageragentsApi.CreateUserGroupResponse](docs/CreateUserGroupResponse.md)
 - [ManageragentsApi.CreateUserResponse](docs/CreateUserResponse.md)
 - [ManageragentsApi.DeactivateUser](docs/DeactivateUser.md)
 - [ManageragentsApi.DeleteJob](docs/DeleteJob.md)
 - [ManageragentsApi.EditJob](docs/EditJob.md)
 - [ManageragentsApi.EditS3StorageProfile](docs/EditS3StorageProfile.md)
 - [ManageragentsApi.FileLog](docs/FileLog.md)
 - [ManageragentsApi.GetAgentGroup](docs/GetAgentGroup.md)
 - [ManageragentsApi.GetAgentGroupsObject](docs/GetAgentGroupsObject.md)
 - [ManageragentsApi.GetJob](docs/GetJob.md)
 - [ManageragentsApi.GetS3StorageProfile](docs/GetS3StorageProfile.md)
 - [ManageragentsApi.Job](docs/Job.md)
 - [ManageragentsApi.JobArgs](docs/JobArgs.md)
 - [ManageragentsApi.JobGroup](docs/JobGroup.md)
 - [ManageragentsApi.JobGroupResponse](docs/JobGroupResponse.md)
 - [ManageragentsApi.JobLog](docs/JobLog.md)
 - [ManageragentsApi.JobView](docs/JobView.md)
 - [ManageragentsApi.ListJobGroupsResponse](docs/ListJobGroupsResponse.md)
 - [ManageragentsApi.ListJobs](docs/ListJobs.md)
 - [ManageragentsApi.ListResourceControlQueueResponse](docs/ListResourceControlQueueResponse.md)
 - [ManageragentsApi.ListResourceControlsResponse](docs/ListResourceControlsResponse.md)
 - [ManageragentsApi.ListStorageProfiles](docs/ListStorageProfiles.md)
 - [ManageragentsApi.ListUserGroupsResponse](docs/ListUserGroupsResponse.md)
 - [ManageragentsApi.ListUsersResponse](docs/ListUsersResponse.md)
 - [ManageragentsApi.Members](docs/Members.md)
 - [ManageragentsApi.Menu](docs/Menu.md)
 - [ManageragentsApi.MxProperties](docs/MxProperties.md)
 - [ManageragentsApi.PutAgentGroupsObject](docs/PutAgentGroupsObject.md)
 - [ManageragentsApi.Relays](docs/Relays.md)
 - [ManageragentsApi.RemoveAgentGroupMembers](docs/RemoveAgentGroupMembers.md)
 - [ManageragentsApi.ResourceControl](docs/ResourceControl.md)
 - [ManageragentsApi.ResourceControlResponse](docs/ResourceControlResponse.md)
 - [ManageragentsApi.RevokeAgentCertificate](docs/RevokeAgentCertificate.md)
 - [ManageragentsApi.StatisticLog](docs/StatisticLog.md)
 - [ManageragentsApi.Stats](docs/Stats.md)
 - [ManageragentsApi.StatsResponse](docs/StatsResponse.md)
 - [ManageragentsApi.StorageProfile](docs/StorageProfile.md)
 - [ManageragentsApi.Success](docs/Success.md)
 - [ManageragentsApi.User](docs/User.md)
 - [ManageragentsApi.UserGroup](docs/UserGroup.md)
 - [ManageragentsApi.UserGroupResponse](docs/UserGroupResponse.md)
 - [ManageragentsApi.UserResponse](docs/UserResponse.md)


## Documentation for Authorization

 All endpoints do not require authorization.

