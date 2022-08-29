const router = require("express").Router();

const CoffeeBeans = require("../models/CoffeeBeans.model");
const CoffeeShop = require("../models/CoffeeShop.model");

// Routes

router.get('/mylist/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    let myBeans = await CoffeeBeans.find({user: userId})
    let myShops = await CoffeeShop.find({user: userId})

    res.json({myBeans, myShops})

  } catch (error) {
    res.json(error)
  }

})


module.exports = router;
