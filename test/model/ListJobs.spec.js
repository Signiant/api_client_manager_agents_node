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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ManageragentsApi);
  }
}(this, function(expect, ManageragentsApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ListJobs', function() {
      beforeEach(function() {
        instance = new ManageragentsApi.ListJobs();
      });

      it('should create an instance of ListJobs', function() {
        // TODO: update the code to test ListJobs
        expect(instance).to.be.a(ManageragentsApi.ListJobs);
      });

    });
  });

}));
