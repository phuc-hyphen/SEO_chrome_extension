var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
var API_key = "2IJ7zwcAmdnpj7gIEDaNVYGZzhLralluttC9vDt15GDsvMvkQa9rgeZIPKgs"
var base_url = "https://www.babbar.tech/api";
var endpoint = "/url/similar-links"
var final_url = base_url + endpoint + "?api_token=" + API_key;
document.addEventListener('DOMContentLoaded', function () {
    // Get the input element by its ID
    var inputElement = document.getElementById('myInput');
    var submitBut = document.getElementById('myButton');

    // // Add an event listener for the 'input' event
    // inputElement.addEventListener('input', function () {
    //     // Get the value of the input
    //     var inputValue = inputElement.value;

    //     // Call your custom function passing the input value
    //     sendMessage(inputValue);
    // });

    // Define your custom function
    submitBut.addEventListener('click', function () {
        // Call your custom function
        if (!urlRegex.test(inputElement.value)) {
            console.log("not valid url")
            var warn_div = document.createElement("div")

            var warn = document.createElement("p")
            warn.innerHTML = "Please enter a valid url";
            warn.style.color = "red";
            warn_div.appendChild(warn);
            document.body.appendChild(warn_div);
        }
        else {
            var inputValue = inputElement.value;
            getUrl(inputValue);
        }
    });
});


function getUrl(url) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var raw = JSON.stringify({
        "url": url
        // "limit": 3,
        // "sort": "desc",
        // "type": "semanticValue"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(final_url, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            sendMessage(result);
        })
        .catch(error => console.log('error', error));
}

function sendMessage(value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(value)
        let msg = {
            txt: value
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
    })
}
