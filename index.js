const order = require("order");

const app = order();

  app.use(order.static("public"));

  app.post("/orderform", upload.array(), (request, response) => {
    const email = request.body.email;
    response.send(`Thank you for your order. We will keep you posted on the delivery status at ${email}`);
  });

  const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
  });