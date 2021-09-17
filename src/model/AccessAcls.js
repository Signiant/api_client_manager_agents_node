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
    root.ManageragentsApi.AccessAcls = factory(root.ManageragentsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccessAcls model module.
   * @module model/AccessAcls
   * @version 14.1.0
   */

  /**
   * Constructs a new <code>AccessAcls</code>.
   * Access Control Level (ACL) for users or user groups  **Note**: You cannot assign ACL permissions to a group when creating it via `POST /usergroups`. To assign ACLs to a user group, use `PUT` once the group is created. 
   * @alias module:model/AccessAcls
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccessAcls</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessAcls} obj Optional instance to populate.
   * @return {module:model/AccessAcls} The populated <code>AccessAcls</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('edit'))
        obj.edit = ApiClient.convertToType(data['edit'], 'Boolean');
      if (data.hasOwnProperty('execute'))
        obj.execute = ApiClient.convertToType(data['execute'], 'Boolean');
      if (data.hasOwnProperty('read'))
        obj.read = ApiClient.convertToType(data['read'], 'Boolean');
      if (data.hasOwnProperty('remove'))
        obj.remove = ApiClient.convertToType(data['remove'], 'Boolean');
      if (data.hasOwnProperty('userName'))
        obj.userName = ApiClient.convertToType(data['userName'], 'String');
    }
    return obj;
  }

  /**
   * Edit ACL of user/user group
   * @member {Boolean} edit
   */
  exports.prototype.edit = undefined;

  /**
   * Execute ACL of user/user group (If applicable)
   * @member {Boolean} execute
   */
  exports.prototype.execute = undefined;

  /**
   * Read ACL of user/user group
   * @member {Boolean} read
   */
  exports.prototype.read = undefined;

  /**
   * Remove ACL of user/user group
   * @member {Boolean} remove
   */
  exports.prototype.remove = undefined;

  /**
   * User name.
   * @member {String} userName
   */
  exports.prototype.userName = undefined;


  return exports;

}));
