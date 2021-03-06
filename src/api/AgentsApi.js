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
    define(['ApiClient', 'model/Agents', 'model/RevokeAgentCertificate', 'model/Success'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Agents'), require('../model/RevokeAgentCertificate'), require('../model/Success'));
  } else {
    // Browser globals (root is window)
    if (!root.ManageragentsApi) {
      root.ManageragentsApi = {};
    }
    root.ManageragentsApi.AgentsApi = factory(root.ManageragentsApi.ApiClient, root.ManageragentsApi.Agents, root.ManageragentsApi.RevokeAgentCertificate, root.ManageragentsApi.Success);
  }
}(this, function(ApiClient, Agents, RevokeAgentCertificate, Success) {
  'use strict';

  /**
   * Agents service.
   * @module api/AgentsApi
   * @version 14.1.0
   */

  /**
   * Constructs a new AgentsApi. 
   * @alias module:api/AgentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAgent operation.
     * @callback module:api/AgentsApi~getAgentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Agents} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List agents
     * Return a list of all agents
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {module:api/AgentsApi~getAgentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Agents}
     */
    this.getAgent = function(username, password, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getAgent");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling getAgent");
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
      var returnType = Agents;

      return this.apiClient.callApi(
        '/listagents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeCertificate operation.
     * @callback module:api/AgentsApi~revokeCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke certificate
     * Revoke an agent's certificate
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {module:model/RevokeAgentCertificate} requestBody 
     * @param {module:api/AgentsApi~revokeCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.revokeCertificate = function(username, password, requestBody, callback) {
      var postBody = requestBody;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling revokeCertificate");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling revokeCertificate");
      }

      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling revokeCertificate");
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
        '/certificate/revoke', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
