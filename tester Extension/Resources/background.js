browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello there") {
        console.log("Sending message from background to native")
        browser.runtime.sendNativeMessage({ message: request.greeting }).then((response) => {
            console.log("Sending message back to content")
            browser.tabs.sendMessage(sender.tab.id, { nativeResponse: response })
        });
    }
});
