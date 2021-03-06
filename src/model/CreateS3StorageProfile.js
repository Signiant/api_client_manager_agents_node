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
    define(['ApiClient', 'model/AccessAcls'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccessAcls'));
  } else {
    // Browser globals (root is window)
    if (!root.ManageragentsApi) {
      root.ManageragentsApi = {};
    }
    root.ManageragentsApi.CreateS3StorageProfile = factory(root.ManageragentsApi.ApiClient, root.ManageragentsApi.AccessAcls);
  }
}(this, function(ApiClient, AccessAcls) {
  'use strict';

  /**
   * The CreateS3StorageProfile model module.
   * @module model/CreateS3StorageProfile
   * @version 14.1.0
   */

  /**
   * Constructs a new <code>CreateS3StorageProfile</code>.
   * S3 Object Storage Profiles.
   * @alias module:model/CreateS3StorageProfile
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateS3StorageProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateS3StorageProfile} obj Optional instance to populate.
   * @return {module:model/CreateS3StorageProfile} The populated <code>CreateS3StorageProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('storageType'))
        obj.storageType = ApiClient.convertToType(data['storageType'], 'String');
      if (data.hasOwnProperty('storageServer'))
        obj.storageServer = ApiClient.convertToType(data['storageServer'], 'String');
      if (data.hasOwnProperty('bucket'))
        obj.bucket = ApiClient.convertToType(data['bucket'], 'String');
      if (data.hasOwnProperty('subFolder'))
        obj.subFolder = ApiClient.convertToType(data['subFolder'], 'String');
      if (data.hasOwnProperty('accessStyle'))
        obj.accessStyle = ApiClient.convertToType(data['accessStyle'], 'String');
      if (data.hasOwnProperty('accessKey'))
        obj.accessKey = ApiClient.convertToType(data['accessKey'], 'String');
      if (data.hasOwnProperty('secretKey'))
        obj.secretKey = ApiClient.convertToType(data['secretKey'], 'String');
      if (data.hasOwnProperty('accessAcls'))
        obj.accessAcls = ApiClient.convertToType(data['accessAcls'], [AccessAcls]);
    }
    return obj;
  }

  /**
   * Local s3 storage type
   * @member {String} storageType
   */
  exports.prototype.storageType = undefined;

  /**
   * Local s3 storage server
   * @member {String} storageServer
   */
  exports.prototype.storageServer = undefined;

  /**
   * S3 bucket name
   * @member {String} bucket
   */
  exports.prototype.bucket = undefined;

  /**
   * S3 subfolder name
   * @member {String} subFolder
   */
  exports.prototype.subFolder = undefined;

  /**
   * S3 object storage profile access style
   * @member {String} accessStyle
   */
  exports.prototype.accessStyle = undefined;

  /**
   * S3 object storage profile access key
   * @member {String} accessKey
   */
  exports.prototype.accessKey = undefined;

  /**
   * S3 object storage profile encoded secret key
   * @member {String} secretKey
   */
  exports.prototype.secretKey = undefined;

  /**
   * @member {Array.<module:model/AccessAcls>} accessAcls
   */
  exports.prototype.accessAcls = undefined;


  return exports;

}));
