sap.ui.define([
  'sap/ui/core/UIComponent',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/resource/ResourceModel'
], function (UIComponent, JSONModel) {
  'use strict';
  return UIComponent.extend('sap.ui.demo.walkthrough.Component', {
    metadata: {
      manifest: "json"
    },
    init: function() {
      // cll the init function of the parent
      UIComponent.prototype.init.apply(this, arguments);
      // set data models
      let oData = {
        recipient: {
          name: 'Christoph'
        }
      };
      let oModel = new JSONModel(oData);
      this.setModel(oModel);
    }
  })
});
