const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

const uri = "mongodb://127.0.0.1:27017";

async function insertData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("college");
    const collection = db.collection("students");

    // Read JSON file
    const dataPath = path.join(__dirname, "../data/students.json");
    const students = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    // Clear old data (important for testing)
    await collection.deleteMany({});

    // Insert new data
    await collection.insertMany(students);

    console.log("✅ Data inserted successfully");
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
  }
}

insertData();