sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/ui/model/json/JSONModel'
], function(Controller, MessageToast, JSONModel) {
  'use strict';
  return Controller.extend('sap.ui.demo.walkthrough.App', {
    onInit: function() {
      let oData = {
        recipient: {
          name: 'Thomas'
        }
      };
      let oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
    },
    onShowHello: function() {
      MessageToast.show('Hello there!');
    }
  });
});
