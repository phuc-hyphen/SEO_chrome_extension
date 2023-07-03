console.log("trio expert is running in your background :) !")
// chrome.Action.onClicked.addListener(async (info, tab) => {

//     console.log("button clicked");
// });
chrome.action.onClicked.addListener((tab) => {
    // chrome.scripting.executeScript({
    //   target: {tabId: tab.id},
    //   files: ['content.js']
    // });
    console.log("tab id is " + tab.id);
    console.log("button clicked");
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
});
