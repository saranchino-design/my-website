var ExecuteRedirect = function() {
    this.execute = function(tab, data, istructions) {
        // redirect to URL
        chrome.tabs.update(tab.id, {
            url: data.url
        }, function() {

            chrome.tabs.onUpdated.addListener(function onload(tabId, changeInfo) {
                if (tabId === tab.id && changeInfo.status === 'complete') {
                    chrome.tabs.onUpdated.removeListener(onload);
                    chrome.pageAction.show(tab.id);
                    if (istructions != null) {
                        mainNavigationController.process(tab, istructions);
                    }
                }
            });


        });
        return true;
    }
}