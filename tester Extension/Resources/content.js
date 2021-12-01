
//
function showKenobiButton() {
    var container = document.createElement("div");
    container.style.position = "fixed";
    container.style.left = "30vw";
    container.style.top = "50vh";
    container.style.height = "150px";
    container.style.width = "150px";
    container.style.background = "black";
    container.style.zIndex = "1";
    container.style.textAlign = "center";

    var kenobi = document.createElement("img");
    kenobi.style.width = "125px";
    kenobi.style.height = "125px";
    kenobi.src = "https://c.tenor.com/enzHTw7sfR4AAAAM/obi-one-kenobi-grievous.gif";
    kenobi.onclick = function() { 
        window.location.href = "https://iteo.com"
    }

    document.body.appendChild(container)
    container.appendChild(kenobi)
}

browser.runtime.sendMessage({ greeting: "hello there" });

browser.runtime.onMessage.addListener(request => {
    console.log(request.nativeResponse)
    console.log(request.nativeResponse.answer)
    
    if (request.nativeResponse.answer === "general kenobi") {
        showKenobiButton()
    }
    
    return Promise.resolve({ response: "Hi from content script" });
});
