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
    describe('FileLog', function() {
      beforeEach(function() {
        instance = new ManageragentsApi.FileLog();
      });

      it('should create an instance of FileLog', function() {
        // TODO: update the code to test FileLog
        expect(instance).to.be.a(ManageragentsApi.FileLog);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryRecords (base name: "deliveryRecords")', function() {
        // TODO: update the code to test the property deliveryRecords
        expect(instance).to.have.property('deliveryRecords');
        // expect(instance.deliveryRecords).to.be(expectedValueLiteral);
      });

      it('should have the property validCount (base name: "validCount")', function() {
        // TODO: update the code to test the property validCount
        expect(instance).to.have.property('validCount');
        // expect(instance.validCount).to.be(expectedValueLiteral);
      });

      it('should have the property certifiedCount (base name: "certifiedCount")', function() {
        // TODO: update the code to test the property certifiedCount
        expect(instance).to.have.property('certifiedCount');
        // expect(instance.certifiedCount).to.be(expectedValueLiteral);
      });

      it('should have the property fileLog (base name: "fileLog")', function() {
        // TODO: update the code to test the property fileLog
        expect(instance).to.have.property('fileLog');
        // expect(instance.fileLog).to.be(expectedValueLiteral);
      });

    });
  });

}));
