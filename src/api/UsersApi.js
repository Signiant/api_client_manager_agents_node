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
    define(['ApiClient', 'model/ActivateDeactivateUserResponse', 'model/ActivateUser', 'model/ChangePassword', 'model/CreateUserResponse', 'model/DeactivateUser', 'model/ListUsersResponse', 'model/Success', 'model/User', 'model/UserResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ActivateDeactivateUserResponse'), require('../model/ActivateUser'), require('../model/ChangePassword'), require('../model/CreateUserResponse'), require('../model/DeactivateUser'), require('../model/ListUsersResponse'), require('../model/Success'), require('../model/User'), require('../model/UserResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ManageragentsApi) {
      root.ManageragentsApi = {};
    }
    root.ManageragentsApi.UsersApi = factory(root.ManageragentsApi.ApiClient, root.ManageragentsApi.ActivateDeactivateUserResponse, root.ManageragentsApi.ActivateUser, root.ManageragentsApi.ChangePassword, root.ManageragentsApi.CreateUserResponse, root.ManageragentsApi.DeactivateUser, root.ManageragentsApi.ListUsersResponse, root.ManageragentsApi.Success, root.ManageragentsApi.User, root.ManageragentsApi.UserResponse);
  }
}(this, function(ApiClient, ActivateDeactivateUserResponse, ActivateUser, ChangePassword, CreateUserResponse, DeactivateUser, ListUsersResponse, Success, User, UserResponse) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 14.1.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the activateUser operation.
     * @callback module:api/UsersApi~activateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivateDeactivateUserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate user
     * Activates a specific user account
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivateUser} opts.user The username or userID of the user that should be activated. 
     * @param {module:api/UsersApi~activateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivateDeactivateUserResponse}
     */
    this.activateUser = function(username, password, opts, callback) {
      opts = opts || {};
      var postBody = opts['user'];

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling activateUser");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling activateUser");
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
      var returnType = ActivateDeactivateUserResponse;

      return this.apiClient.callApi(
        '/activateusers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the changePassword operation.
     * @callback module:api/UsersApi~changePasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change user password
     * Change a user's password.  You must have the user's current password to perform this operation. 
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {module:model/ChangePassword} user The user's **name**, **new password** and **current password**
     * @param {module:api/UsersApi~changePasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.changePassword = function(username, password, user, callback) {
      var postBody = user;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling changePassword");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling changePassword");
      }

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling changePassword");
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
        '/changepassword', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/UsersApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateUserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create user
     * Creates a new user by specifying user details, roles, access ACLs and menu permissions.
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {module:model/User} user Contains user attributes. All calls must include **userName**, **firstName**, **lastName**, **email**, **password**, and **organization**.  
     * @param {module:api/UsersApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateUserResponse}
     */
    this.createUser = function(username, password, user, callback) {
      var postBody = user;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling createUser");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling createUser");
      }

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling createUser");
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
      var returnType = CreateUserResponse;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deactivateUser operation.
     * @callback module:api/UsersApi~deactivateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivateDeactivateUserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deactivate user
     * Deactivates a specific user account
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {Object} opts Optional parameters
     * @param {module:model/DeactivateUser} opts.user The username or id of the user that should be activated 
     * @param {module:api/UsersApi~deactivateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivateDeactivateUserResponse}
     */
    this.deactivateUser = function(username, password, opts, callback) {
      opts = opts || {};
      var postBody = opts['user'];

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deactivateUser");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling deactivateUser");
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
      var returnType = ActivateDeactivateUserResponse;

      return this.apiClient.callApi(
        '/deactivateusers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UsersApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete user by username or userID
     * Deletes specific user
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {String} usernameuserID The user's username or userID
     * @param {module:api/UsersApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.deleteUser = function(username, password, usernameuserID, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteUser");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling deleteUser");
      }

      // verify the required parameter 'usernameuserID' is set
      if (usernameuserID === undefined || usernameuserID === null) {
        throw new Error("Missing the required parameter 'usernameuserID' when calling deleteUser");
      }


      var pathParams = {
        'username|userID': usernameuserID
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
        '/users/{username|userID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editUser operation.
     * @callback module:api/UsersApi~editUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit user
     * Edit existing users by modifying their attributes.  All edit user requests must include the `userName` field.  You can update more than one user at a time.
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user Contains user attributes you want to add or edit. User requests must include a valid \"configuration\" object. 
     * @param {module:api/UsersApi~editUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.editUser = function(username, password, opts, callback) {
      opts = opts || {};
      var postBody = opts['user'];

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling editUser");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling editUser");
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
        '/users', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UsersApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user by username or userID
     * Returns details about specific user identified by their user name, userID, or email address
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {String} usernameuserID The user's username, userID or user email.
     * @param {module:api/UsersApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */
    this.getUser = function(username, password, usernameuserID, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUser");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling getUser");
      }

      // verify the required parameter 'usernameuserID' is set
      if (usernameuserID === undefined || usernameuserID === null) {
        throw new Error("Missing the required parameter 'usernameuserID' when calling getUser");
      }


      var pathParams = {
        'username|userID': usernameuserID
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
      var returnType = UserResponse;

      return this.apiClient.callApi(
        '/users/{username|userID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listusers operation.
     * @callback module:api/UsersApi~listusersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListUsersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all users
     * List all users.
     * @param {String} username Administrator user name.
     * @param {String} password Administrator password.
     * @param {module:api/UsersApi~listusersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListUsersResponse}
     */
    this.listusers = function(username, password, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling listusers");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling listusers");
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
      var returnType = ListUsersResponse;

      return this.apiClient.callApi(
        '/listusers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
