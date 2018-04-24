const keys = require("../config/key");
const stripe = require("stripe")(keys.stripeSecretKey);
module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Service costs $5",
      source: req.body.id
    });
    res.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
