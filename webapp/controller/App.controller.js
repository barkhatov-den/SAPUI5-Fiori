sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast) {
  'use strict';
  return Controller.extend('sap.ui.demo.walkthrough.App', {
    onShowHello: function() {
      // read msg from i18n model
      let oBundle = this.getView().getModel('i18n').getResourceBundle();
      let sRecipient = this.getView().getModel().getProperty('/recipient/name');
      let sMsg = oBundle.getText('helloMsg', [sRecipient]);
      
      MessageToast.show(sMsg);
    }
  });
});
