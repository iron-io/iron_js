/**
 * IronWorker CE API
 * The ultimate, language agnostic, container based task processing framework.
 *
 * OpenAPI spec version: 0.5.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    factory(root.expect, root.WorkerJs);
  }
}(this, function(expect, WorkerJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WorkerJs.Group();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Group', function() {
    it('should create an instance of Group', function() {
      // uncomment below and update the code to test Group
      //var instane = new WorkerJs.Group();
      //expect(instance).to.be.a(WorkerJs.Group);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new WorkerJs.Group();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new WorkerJs.Group();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new WorkerJs.Group();
      //expect(instance).to.be();
    });

    it('should have the property envVars (base name: "env_vars")', function() {
      // uncomment below and update the code to test the property envVars
      //var instane = new WorkerJs.Group();
      //expect(instance).to.be();
    });

    it('should have the property maxConcurrency (base name: "max_concurrency")', function() {
      // uncomment below and update the code to test the property maxConcurrency
      //var instane = new WorkerJs.Group();
      //expect(instance).to.be();
    });

  });

}));
