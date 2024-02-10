const express = require("express");
const {
  postAddItem,
  getSingleItem,
  deleteItem,
  patchUpdateItem,
} = require("../controllers/_stockcontroller");

const router = express.Router();

router.get("/stock/getItem", getSingleItem);
router.post("/stock/addItem", postAddItem);
router.patch("/stock/updateItem", patchUpdateItem);
router.delete("/stock/deleteItem", deleteItem);

module.exports = router;
