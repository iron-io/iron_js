/**
 * IronWorker CE API
 * The ultimate, language agnostic, container based task processing framework.
 *
 * OpenAPI spec version: 0.5.7
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Task'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Task'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkerJs) {
      root.WorkerJs = {};
    }
    root.WorkerJs.TaskWrapper = factory(root.WorkerJs.ApiClient, root.WorkerJs.Task);
  }
}(this, function(ApiClient, Task) {
  'use strict';




  /**
   * The TaskWrapper model module.
   * @module model/TaskWrapper
   * @version 0.5.7
   */

  /**
   * Constructs a new <code>TaskWrapper</code>.
   * @alias module:model/TaskWrapper
   * @class
   * @param task {module:model/Task} 
   */
  var exports = function(task) {
    var _this = this;

    _this['task'] = task;
  };

  /**
   * Constructs a <code>TaskWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskWrapper} obj Optional instance to populate.
   * @return {module:model/TaskWrapper} The populated <code>TaskWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('task')) {
        obj['task'] = Task.constructFromObject(data['task']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Task} task
   */
  exports.prototype['task'] = undefined;



  return exports;
}));


