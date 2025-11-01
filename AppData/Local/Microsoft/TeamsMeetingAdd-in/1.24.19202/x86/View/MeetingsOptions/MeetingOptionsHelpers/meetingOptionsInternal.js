window.external = {
    getAadCurrentUser: async (successCallback, errorCallback) => {
        if (!successCallback || !errorCallback) {
            return;
        }
        const dataProvider = chrome.webview.hostObjects.dataProvider;
        let responseString = await dataProvider.getAadCurrentUser();
        var aadUserInfo = JSON.parse(responseString);
        if (aadUserInfo.success) {
            successCallback(aadUserInfo.success);
        }
        else if (aadUserInfo.error) {
            errorCallback(aadUserInfo.error);
        }
    },
    getAadToken: async (successCallback, errorCallback, resource, claim) => {
        if (!successCallback || !errorCallback) {
            return;
        }
        const dataProvider = chrome.webview.hostObjects.dataProvider;
        var aadRequestJson = {
            resource: resource        }

        var json = JSON.stringify(aadRequestJson);
        let responseString = await dataProvider.getAadToken(resource);
        var response = JSON.parse(responseString);
        if (response.success) {
            successCallback(response.success);
        }
        else if (response.error) {
            errorCallback(response.error);
        }
     },    
        //this.log("meetingOptionsScript: requesting meetingOptions aad token", this.logType.LogInfo);
        //webkit.messageHandlers.listener.postMessage({ "event": "getAadToken", "requestId": this.requestId++, "resource": resource, });
    getRecipients: async (successCallback, errorCallback) => {
        if (!successCallback || !errorCallback) {
            return;
        }
        const dataProvider = chrome.webview.hostObjects.dataProvider;
        let responseString = await dataProvider.GetRecipients();
        var response = JSON.parse(responseString);
        if (response.success != undefined) {
            successCallback(response.success);
        }
        else if (response.error) {
            errorCallback(response.error);
        }
    },
    sendPresenters: async (presenterJson) => {
        const dataProvider = chrome.webview.hostObjects.dataProvider;
        dataProvider.sendPresenters(presenterJson);
    },

    getSensitivityLabelId: async (successCallback, errorCallback) => {
        if (!successCallback || !errorCallback) {
            return;
        }
        const dataProvider = chrome.webview.hostObjects.dataProvider;
        let responseString = await dataProvider.getSensitivityLabelId();
        var response = JSON.parse(responseString);
        if (response.success != undefined) {
            successCallback(response.success);
        }
        else if (response.error) {
            errorCallback(response.error);
        }
    },

    sendSensitivityLabelId: async (sensitivityLabelId) => {
        const dataProvider = chrome.webview.hostObjects.dataProvider;
        dataProvider.setSensitivityLabel(sensitivityLabelId);
    },

};