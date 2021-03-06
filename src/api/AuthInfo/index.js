module.exports = async function (context, req) {
  // context.res.json({
  //   text: "Hello from the API"
  // });

    var principal;

    const header = req.headers['x-ms-client-principal'];
    context.log(`Request with auth header ${header}`);

    if (header != null)
    {
        const encoded = Buffer.from(header, 'base64');
        const decoded = encoded.toString('ascii');
        principal = JSON.parse(decoded);
    context.log(`Returning auth info as ${decoded}`);
    }
    else
    {
        principal = {
            "clientPrincipal": {
              "identityProvider": "aad",
              "userId": "0db7780d7985465098c512c58eeac286",
              "userDetails": "sbrady@somewhere.com",
              "userRoles": [
                "anonymous",
                "authenticated"
              ]
            }
          };
    }


    context.res = {
      body: principal,
    };
  };


