const itemCollection = require("../modals/_itemschema");
const singleItemCollection = require("../modals/_eachitemschema");

exports.getSingleItem = async (req, res, next) => {
  try {
    const { _id } = req.query;
    const itemDetails = await singleItemCollection.find({ itemId: _id });
    const itemName = await itemCollection.findOne({ _id });

    res
      .status(200)
      .json({ status: true, itemName: itemName, itemDetails: itemDetails });
  } catch (err) {
    console.log(err, "Get All Items Err");
    res.status(400).json({ status: false, message: " Get All Item Err" });
  }
};

exports.postAddSiingleItem = async (req, res, next) => {
  try {
    const { _id, itemDetails } = req.body;

    const isPresent = await itemCollection.findOne({ _id });
    if (isPresent) {
      console.log("Item Already Presented In the Database");
      return res
        .status(202)
        .json({ status: true, message: "Item Already Present" });
    }

    await singleItemCollection.insertMany([...itemDetails]);

    const newItem = new itemCollection({ _id, itemName });
    await newItem.save();
    res.status(200).json({ status: true, message: "Item Added Sucssessfully" });
  } catch (err) {
    console.log(err, "Post Add Item Err");
    res.status(400).json({ status: false, message: " Post Add Item Err" });
  }
};

exports.postAddItem = async (req, res, next) => {
  try {
    const { itemId, itemSize, itemQuantity, itemPrice } = req.body;

    const newItem = new singleItemCollection({
      itemId,
      itemSize,
      itemQuantity,
      itemPrice,
    });
    await newItem.save();
    res
      .status(200)
      .json({ status: true, message: "Single Item Added Sucssessfully" });
  } catch (err) {
    console.log(err, "Post Single Add Item Err");
    res
      .status(400)
      .json({ status: false, message: " Post Single Add Item Err" });
  }
};

exports.patchUpdateSingleItem = async (req, res, next) => {
  try {
    const { itemId, itemSize, itemQuantity = 0, itemPrice = 0 } = req.body;

    await singleItemCollection.updateOne(
      { itemId, itemSize },
      { $set: { itemQuantity: itemQuantity, itemPrice: itemPrice } }
    );
    res
      .status(202)
      .json({ status: true, message: " Update Single Item Sucssesfully" });
  } catch (err) {
    console.log(err, " Update Single Item Err");
    res.status(400).json({ status: false, message: " Update Single Item Err" });
  }
};

exports.patchUpdateItem = async (req, res, next) => {
  try {
    const { _id, itemName } = req.body;

    await itemCollection.updateOne({ _id }, { $set: { itemName: itemName } });
    res
      .status(202)
      .json({ status: true, message: " Update Item Sucssesfully" });
  } catch (err) {
    console.log(err, " Update Item Err");
    res.status(400).json({ status: false, message: " Update Item Err" });
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await singleItemCollection.deleteMany({ itemId: _id });
    await itemCollection.deleteOne({ _id });

    res
      .status(200)
      .json({ status: true, message: "Item Deleted Sucssesfully" });
  } catch (err) {
    console.log(err, "Delete All Items Err");
    res.status(400).json({ status: false, message: " Delete Item Err" });
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const { itemId } = req.body;
    await singleItemCollection.deleteOne({ itemId });

    res
      .status(200)
      .json({ status: true, message: "Item Deleted Sucssesfully" });
  } catch (err) {
    console.log(err, "Delete All Items Err");
    res.status(400).json({ status: false, message: " Delete All Item Err" });
  }
};

exports.getAllItems = async (req, res, next) => {
  try {
    const result = await itemCollection.find({});
    res.status(200).json({ status: true, result: result });
  } catch (err) {
    console.log(err, "Get All Items Err");
    res.status(400).json({ status: false, message: "Get All Item Err" });
  }
};
