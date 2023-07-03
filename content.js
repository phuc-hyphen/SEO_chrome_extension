console.log("trio expert inect your link :) !")

let paragraphe = document.getElementsByTagName("p");

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
    console.log("message received");
    var msg_json = JSON.parse(message.txt);
    ad_count = msg_json.length > paragraphe.length ? paragraphe.length : msg_json.length;
    for (let i = 0; i < ad_count; i++) {
        console.log(msg_json[i].similar)
        var ad_div = document.createElement("div")
        ad_div.className = "adbox"
        var ad_text = document.createElement("a")
        ad_text.href = msg_json[i].similar;
        ad_text.innerHTML = msg_json[i].metrics.original.title;
        ad_text.style.color = "blue";
        ad_div.appendChild(ad_text);
        paragraphe[i].insertAdjacentElement('afterend', ad_div);
    }
}