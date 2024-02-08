sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/ui/core/Fragment'
], function(Controller, MessageToast, Fragment) {
  'use strict';
  return Controller.extend('sap.ui.demo.walkthrough.controller.HelloPanel', {
    onShowHello: function() {
      let oBundle = this.getView().getModel('i18n').getResourceBundle();
      let sRecipient = this.getView().getModel().getProperty('/recipient/name');
      let sMsg = oBundle.getText('helloMsg', [sRecipient]);
      
      MessageToast.show(sMsg);
    },
    onOpenDialog: function() {
      let oView = this.getView();
      
      //create the dialog lazily
      if (!this.byId("helloDialog")) {
        // load async XML fragment
        Fragment.load({
          id: oView.getId(),
          name: 'sap.ui.demo.walkthrough.view.HelloDialog'
        }).then(function(oDialog) {
          // connect dialog to the root view of this component (models, lifecycle)
          oView.addDependent(oDialog);
          oDialog.open();
        });
      } else {
        this.byId("helloDialog").open();
      }
    }
  });
});
