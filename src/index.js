async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const rt = await response.text();
    console.log(`User Info: ${rt}`);

    const { clientPrincipal } = JSON.parse(rt);
    return clientPrincipal;
  }

 async function main(elementName) {
    var user = await getUserInfo();
    console.log(`Going to update element ${elementName}`);
    var element = document.getElementById(elementName);
    console.log(element);
    element.innerText = user.userDetails;
  }

  main("clientUserInfo");
