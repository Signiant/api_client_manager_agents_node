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

  beforeEach(function() {
    instance = new ManageragentsApi.ResourceControlsApi();
  });

  describe('(package)', function() {
    describe('ResourceControlsApi', function() {
      describe('activateResourceControl', function() {
        it('should call activateResourceControl successfully', function(done) {
          // TODO: uncomment, update parameter values for activateResourceControl call and complete the assertions
          /*
          var username = "username_example";
          var password = "password_example";
          var resourceControl = new ManageragentsApi.ActivateDeactivateResourceControl();

          instance.activateResourceControl(username, password, resourceControl, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.ActivateDeactivateResourceControlsResponse);
            expect(data.editor).to.be.a('string');
            expect(data.editor).to.be("user1");
            {
              let dataCtr = data.users;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createResourceControl', function() {
        it('should call createResourceControl successfully', function(done) {
          // TODO: uncomment, update parameter values for createResourceControl call and complete the assertions
          /*
          var username = "username_example";
          var password = "password_example";
          var resourceControl = new ManageragentsApi.ResourceControl();

          instance.createResourceControl(username, password, resourceControl, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.CreateResourceControlResponse);
            expect(data.creator).to.be.a('string');
            expect(data.creator).to.be("user1");
            {
              let dataCtr = data.resourceControls;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deactivateResourceControl', function() {
        it('should call deactivateResourceControl successfully', function(done) {
          // TODO: uncomment, update parameter values for deactivateResourceControl call and complete the assertions
          /*
          var username = "username_example";
          var password = "password_example";
          var opts = {};
          opts.resourceControl = new ManageragentsApi.ActivateDeactivateResourceControl();

          instance.deactivateResourceControl(username, password, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.ActivateDeactivateResourceControlsResponse);
            expect(data.editor).to.be.a('string');
            expect(data.editor).to.be("user1");
            {
              let dataCtr = data.users;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteResourceControl', function() {
        it('should call deleteResourceControl successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteResourceControl call and complete the assertions
          /*
          var username = "username_example";
          var password = "password_example";
          var resourcecontrolnameresourcecontrolID = "resourcecontrolnameresourcecontrolID_example";

          instance.deleteResourceControl(username, password, resourcecontrolnameresourcecontrolID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.Success);
            expect(data.success).to.be.a('string');
            expect(data.success).to.be("true");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('editResourceControl', function() {
        it('should call editResourceControl successfully', function(done) {
          // TODO: uncomment, update parameter values for editResourceControl call and complete the assertions
          /*
          var username = "username_example";
          var password = "password_example";
          var opts = {};
          opts.resourceControl = new ManageragentsApi.ResourceControl();

          instance.editResourceControl(username, password, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.Success);
            expect(data.success).to.be.a('string');
            expect(data.success).to.be("true");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getConsumersResourceControl', function() {
        it('should call getConsumersResourceControl successfully', function(done) {
          // TODO: uncomment, update parameter values for getConsumersResourceControl call and complete the assertions
          /*
          var resourcecontrolnameresourcecontrolID = "resourcecontrolnameresourcecontrolID_example";
          var opts = {};
          opts.username = "username_example";
          opts.password = "password_example";

          instance.getConsumersResourceControl(resourcecontrolnameresourcecontrolID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.ListResourceControlQueueResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getresourceControl', function() {
        it('should call getresourceControl successfully', function(done) {
          // TODO: uncomment, update parameter values for getresourceControl call and complete the assertions
          /*
          var username = "username_example";
          var password = "password_example";
          var resourcecontrolnameresourcecontrolID = "resourcecontrolnameresourcecontrolID_example";

          instance.getresourceControl(username, password, resourcecontrolnameresourcecontrolID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.ResourceControlResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listresourcecontrols', function() {
        it('should call listresourcecontrols successfully', function(done) {
          // TODO: uncomment, update parameter values for listresourcecontrols call and complete the assertions
          /*
          var username = "username_example";
          var password = "password_example";

          instance.listresourcecontrols(username, password, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.ListResourceControlsResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('moveAgentResourceControl', function() {
        it('should call moveAgentResourceControl successfully', function(done) {
          // TODO: uncomment, update parameter values for moveAgentResourceControl call and complete the assertions
          /*
          var consumerID = "consumerID_example";
          var value = "value_example";
          var opts = {};
          opts.usernamex = "usernamex_example";
          opts.password = "password_example";

          instance.moveAgentResourceControl(consumerID, value, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.Success);
            expect(data.success).to.be.a('string');
            expect(data.success).to.be("true");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('moveJobResourceControl', function() {
        it('should call moveJobResourceControl successfully', function(done) {
          // TODO: uncomment, update parameter values for moveJobResourceControl call and complete the assertions
          /*
          var username = "username_example";
          var password = "password_example";
          var jobnamejobID = "jobnamejobID_example";
          var jobgroupname = "jobgroupname_example";
          var value = "value_example";

          instance.moveJobResourceControl(username, password, jobnamejobID, jobgroupname, value, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ManageragentsApi.Success);
            expect(data.success).to.be.a('string');
            expect(data.success).to.be("true");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
