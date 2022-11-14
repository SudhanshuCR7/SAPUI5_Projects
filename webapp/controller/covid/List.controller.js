sap.ui.define([
    "../BaseController",
    "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("com.project1.project1.controller.covid.List", {
        dataPath: "https://api.rootnet.in/covid19-in/stats/latest",
        onInit: function () {
            var dataModel = new JSONModel(this.dataPath);
            this.getView().setModel(dataModel, "Latest");

        }
    }
    );

});