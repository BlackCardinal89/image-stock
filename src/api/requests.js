export const tokenRequest = async () => {
  let formData = new FormData();
  const tokenRequestBody = {
    grant_type: "client_credentials",
    scope: "payment usermanagement",
    client_id: "test",
    client_secret: "yF587AV9Ms94qN2QShFzVR3vFnWkhjbAK3sG",
    invoiceID: "324234234124",
    amount: 1000,
    currency: "KZT",
    terminal: "67e34d63-102f-4bd1-898e-370781d0074d",
  };

  const tokenURL = "https://testoauth.homebank.kz/epay2/oauth2/token";
  const response = await fetch(tokenURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tokenRequestBody),
    // mode: "cors",
  });
  console.log(response);
};
