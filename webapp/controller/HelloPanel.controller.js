sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
], function(Controller, MessageToast) {
  'use strict';
  return Controller.extend('sap.ui.demo.walkthrough.controller.HelloPanel', {
    onShowHello: function() {
      let oBundle = this.getView().getModel('i18n').getResourceBundle();
      let sRecipient = this.getView().getModel().getProperty('/recipient/name');
      let sMsg = oBundle.getText('helloMsg', [sRecipient]);
      
      MessageToast.show(sMsg);
    }
  });
});
