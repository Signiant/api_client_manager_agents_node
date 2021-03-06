/*
 * Manager+Agents API
 * Signiant Manager+Agents provides a REST API to automate user management, user group, agent groups, jobs, resource controls, and job groups. 
 *
 * OpenAPI spec version: 14.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateJobGroupResponse', 'model/JobGroup', 'model/JobGroupResponse', 'model/ListJobGroupsResponse', 'model/Success'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateJobGroupResponse'), require('../model/JobGroup'), require('../model/JobGroupResponse'), require('../model/ListJobGroupsResponse'), require('../model/Success'));
  } else {
    // Browser globals (root is window)
    if (!root.ManageragentsApi) {
      root.ManageragentsApi = {};
    }
    root.ManageragentsApi.JobGroupsApi = factory(root.ManageragentsApi.ApiClient, root.ManageragentsApi.CreateJobGroupResponse, root.ManageragentsApi.JobGroup, root.ManageragentsApi.JobGroupResponse, root.ManageragentsApi.ListJobGroupsResponse, root.ManageragentsApi.Success);
  }
}(this, function(ApiClient, CreateJobGroupResponse, JobGroup, JobGroupResponse, ListJobGroupsResponse, Success) {
  'use strict';

  /**
   * JobGroups service.
   * @module api/JobGroupsApi
   * @version 14.1.0
   */

  /**
   * Constructs a new JobGroupsApi. 
   * @alias module:api/JobGroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createJobGroup operation.
     * @callback module:api/JobGroupsApi~createJobGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateJobGroupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create job group
     * Creates a job group.
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {Object} opts Optional parameters
     * @param {module:model/JobGroup} opts.jobGroup The attributes of the job group to be created. All create job group requests must include the name of the job group. Job group requests must include a valid \"configuration\" object. 
     * @param {module:api/JobGroupsApi~createJobGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateJobGroupResponse}
     */
    this.createJobGroup = function(username, password, opts, callback) {
      opts = opts || {};
      var postBody = opts['jobGroup'];

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling createJobGroup");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling createJobGroup");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'username': username,
        'password': password
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateJobGroupResponse;

      return this.apiClient.callApi(
        '/jobgroups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobGroup operation.
     * @callback module:api/JobGroupsApi~deleteJobGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete job group
     * Delete a specific job group by name or by ID.
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {String} jobgroupnamejobgroupID job group name or job group id
     * @param {module:api/JobGroupsApi~deleteJobGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.deleteJobGroup = function(username, password, jobgroupnamejobgroupID, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteJobGroup");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling deleteJobGroup");
      }

      // verify the required parameter 'jobgroupnamejobgroupID' is set
      if (jobgroupnamejobgroupID === undefined || jobgroupnamejobgroupID === null) {
        throw new Error("Missing the required parameter 'jobgroupnamejobgroupID' when calling deleteJobGroup");
      }


      var pathParams = {
        'jobgroupname|jobgroupID': jobgroupnamejobgroupID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'username': username,
        'password': password
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Success;

      return this.apiClient.callApi(
        '/jobgroups/{jobgroupname|jobgroupID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editJobGroup operation.
     * @callback module:api/JobGroupsApi~editJobGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a job group
     * Modifies a specific job group.
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {Object} opts Optional parameters
     * @param {module:model/JobGroup} opts.jobGroup The attributes of the job group to be modified. 
     * @param {module:api/JobGroupsApi~editJobGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.editJobGroup = function(username, password, opts, callback) {
      opts = opts || {};
      var postBody = opts['jobGroup'];

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling editJobGroup");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling editJobGroup");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'username': username,
        'password': password
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Success;

      return this.apiClient.callApi(
        '/jobgroups', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobGroup operation.
     * @callback module:api/JobGroupsApi~getJobGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobGroupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get job group by name or by jobGroupID
     * Returns details about specific job group by name or by jobGroupID
     * @param {String} username Administrator user name.
     * @param {String} password Administrator user name.
     * @param {String} jobgroupnamejobgroupID The job group name or jobGroupID
     * @param {module:api/JobGroupsApi~getJobGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobGroupResponse}
     */
    this.getJobGroup = function(username, password, jobgroupnamejobgroupID, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getJobGroup");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling getJobGroup");
      }

      // verify the required parameter 'jobgroupnamejobgroupID' is set
      if (jobgroupnamejobgroupID === undefined || jobgroupnamejobgroupID === null) {
        throw new Error("Missing the required parameter 'jobgroupnamejobgroupID' when calling getJobGroup");
      }


      var pathParams = {
        'jobgroupname|jobgroupID': jobgroupnamejobgroupID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'username': username,
        'password': password
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JobGroupResponse;

      return this.apiClient.callApi(
        '/jobgroups/{jobgroupname|jobgroupID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listJobGroups operation.
     * @callback module:api/JobGroupsApi~listJobGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListJobGroupsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all job groups
     * Get a list of job groups
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {module:api/JobGroupsApi~listJobGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListJobGroupsResponse}
     */
    this.listJobGroups = function(username, password, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling listJobGroups");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling listJobGroups");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'username': username,
        'password': password
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListJobGroupsResponse;

      return this.apiClient.callApi(
        '/listjobgroups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
