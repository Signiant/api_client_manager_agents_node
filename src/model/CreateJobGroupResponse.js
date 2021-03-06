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
    root.ManageragentsApi.CreateJobGroupResponse = factory(root.ManageragentsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateJobGroupResponse model module.
   * @module model/CreateJobGroupResponse
   * @version 14.1.0
   */

  /**
   * Constructs a new <code>CreateJobGroupResponse</code>.
   * @alias module:model/CreateJobGroupResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateJobGroupResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateJobGroupResponse} obj Optional instance to populate.
   * @return {module:model/CreateJobGroupResponse} The populated <code>CreateJobGroupResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('jobGroups'))
        obj.jobGroups = ApiClient.convertToType(data['jobGroups'], [Object]);
    }
    return obj;
  }

  /**
   * The username of the user that is used to create the job group.
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * @member {Array.<Object>} jobGroups
   */
  exports.prototype.jobGroups = undefined;


  return exports;

}));
