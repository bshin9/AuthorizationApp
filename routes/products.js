const router = require("express").Router();
let ProductModel = require("../Models/products_model");

// /players endpoint gets us all player information
router.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.send(products);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  let body = req.body;
  try {
    const add = await ProductModel.create(body);
    res.send(add);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
