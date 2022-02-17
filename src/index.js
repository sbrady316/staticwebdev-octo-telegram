async function getClientUserInfo() {
    const response = await fetch('/.auth/me');
    const rt = await response.text();
    console.log(`User Info: ${rt}`);

    const { clientPrincipal } = JSON.parse(rt);
    return rt;
}

async function getServerUserInfo() {
    const { text } = await( await fetch(`/api/AuthInfo`)).text();
    console.log(text);

    return text;
}

async function updateElement(elementName, infoProvider) {
    var user = await infoProvider();
    console.log(`Going to update element ${elementName} with ${JSON.stringify(user)}`);
    var element = document.getElementById(elementName);
    console.log(element);
    element.innerText = user;
}

updateElement("clientUserInfo", getClientUserInfo);
updateElement("serverUserInfo", getServerUserInfo);
