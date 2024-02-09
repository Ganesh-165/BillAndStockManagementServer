const singleItemCollection = require("../modals/_eachitemschema");
const itemCollection = require("../modals/_itemschema");

exports.postAddItem = async (req, res, nest) => {
  try {
    const { itemId, itemName, itemDetails } = req.body;

    const  items = await singleItemCollection.bulkWrite([...itemDetails]);
    if(items.ok){
        const itemIds = items.insertedIds.map(inserted=>inserted._id);
        console.log(itemIds);
    }

  } catch (err) {
    console.log(err, "Post Add Item Err");
  }
};
