// export const tokenRequest = async () => {
//   let formData = new FormData();
//   const tokenRequestBody = {
//     grant_type: "client_credentials",
//     scope: "payment usermanagement",
//     client_id: "test",
//     client_secret: "yF587AV9Ms94qN2QShFzVR3vFnWkhjbAK3sG",
//     invoiceID: "324234234124",
//     amount: 1000,
//     currency: "KZT",
//     terminal: "67e34d63-102f-4bd1-898e-370781d0074d",
//   };

//   const tokenURL = "https://testoauth.homebank.kz/epay2/oauth2/token";
//   const response = await fetch(tokenURL, {
//     method: "POST",
//     body: ,
//     // mode: "cors",
//   });
//   console.log(response);
// };

export const tokenRequest = async (amount) => {
  const requestBody = {
    grant_type: "client_credentials",
    scope: "payment usermanagement",
    client_id: "test",
    client_secret: "yF587AV9Ms94qN2QShFzVR3vFnWkhjbAK3sG",
    invoiceID: "000000001",
    amount,
    currency: "KZT",
    terminal: "67e34d63-102f-4bd1-898e-370781d0074d",
    postLink: "",
    failurePostLink: "",
  };

  let formData = new FormData();

  for (const key in requestBody) {
    formData.append(key, requestBody[key]);
  }

  let authToken = await fetch(
    "https://testoauth.homebank.kz/epay2/oauth2/token",
    {
      method: "POST",
      body: formData,
    }
  );

  return authToken.json();
};

export const transferToPaymentPage = async (amount) => {
  const authToken = await tokenRequest(amount);
  console.log(authToken);

  const invoiceId = Math.ceil(Math.random() * 100000000);

  const createPaymentObject = function (authToken, invoiceId, amount) {
    var paymentObject = {
      invoiceId: invoiceId,
      backLink: "https://example.kz/success.html",
      failureBackLink: "https://example.kz/failure.html",
      postLink: "https://example.kz/",
      failurePostLink: "https://example.kz/order/1123/fail",
      language: "RU",
      description: "Оплата в интернет магазине",
      accountId: "testuser1",
      terminal: "67e34d63-102f-4bd1-898e-370781d0074d",
      amount,
      currency: "KZT",
      phone: "77777777777",
      email: "example@example.com",
      cardSave: "true",
    };
    paymentObject.auth = authToken;
    return paymentObject;
  };

  window.halyk.pay(createPaymentObject(authToken, invoiceId, amount));
};
