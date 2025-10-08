// util/fix-gifts-wrapper.js
const connectToDatabase = require("../models/db");

(async () => {
  const db = await connectToDatabase();
  const collection = db.collection("gifts");

  const wrapper = await collection.findOne({});
  if (wrapper && wrapper.docs) {
    console.log(`Found wrapper with ${wrapper.docs.length} items. Fixing...`);

    // 1️⃣ Delete the single wrapped document
    await collection.deleteMany({});

    // 2️⃣ Insert all gifts as individual documents
    await collection.insertMany(wrapper.docs);

    console.log("✅ Fixed: All gifts inserted individually.");
  } else {
    console.log("⚠️ No wrapper found or already fixed.");
  }

  process.exit(0);
})();
