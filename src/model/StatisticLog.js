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
    root.ManageragentsApi.StatisticLog = factory(root.ManageragentsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatisticLog model module.
   * @module model/StatisticLog
   * @version 14.1.0
   */

  /**
   * Constructs a new <code>StatisticLog</code>.
   * @alias module:model/StatisticLog
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StatisticLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticLog} obj Optional instance to populate.
   * @return {module:model/StatisticLog} The populated <code>StatisticLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('statsLog'))
        obj.statsLog = ApiClient.convertToType(data['statsLog'], Object);
    }
    return obj;
  }

  /**
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * @member {Object} statsLog
   */
  exports.prototype.statsLog = undefined;


  return exports;

}));
