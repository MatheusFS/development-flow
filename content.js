chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.message === "clicked_browser_action") {

            chrome.storage.sync.get([
                'domain_dev',
                'domain_sta',
                'domain_pro',
                'https_dev',
                'https_sta',
                'https_pro',
            ], items => {

                // confirm(items.domain_dev);
                window.location.href = `${items.https_dev ? 'https://' : 'http://'}${items.domain_dev}/${window.location.pathname}`;
                
            });
        }
    }
);