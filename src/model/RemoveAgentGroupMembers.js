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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ManageragentsApi) {
      root.ManageragentsApi = {};
    }
    root.ManageragentsApi.RemoveAgentGroupMembers = factory(root.ManageragentsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RemoveAgentGroupMembers model module.
   * @module model/RemoveAgentGroupMembers
   * @version 14.1.0
   */

  /**
   * Constructs a new <code>RemoveAgentGroupMembers</code>.
   * Agent to be added to an Agent Group
   * @alias module:model/RemoveAgentGroupMembers
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RemoveAgentGroupMembers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveAgentGroupMembers} obj Optional instance to populate.
   * @return {module:model/RemoveAgentGroupMembers} The populated <code>RemoveAgentGroupMembers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * Agent name.
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
