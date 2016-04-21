(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.Group = factory(root.IronTitan.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Group model module.
   * @module model/Group
   * @version 0.3.3
   */

  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
    }
    return obj;
  }


  /**
   * Name of this group. Must be different than the image name. Can ony contain alphanumeric, -, and _.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Time when image first used/created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;




  return exports;
}));
