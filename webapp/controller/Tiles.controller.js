sap.ui.define([
  "./BaseController",
  "sap/m/MessageBox",
  "sap/ui/model/json/JSONModel"
], function (BaseController, MessageBox,JSONModel) {
  "use strict";

  return BaseController.extend("com.project1.project1.controller.Tiles", {
     onInit: function () {
      let myTilesModel = new JSONModel("../model/tiles.json");
      this.getView().setModel(myTilesModel,"tiles")
     },
     onPress: function(oRoute) {
      this.getOwnerComponent().getRouter().navTo(oRoute)
     }

    }
  );

});
