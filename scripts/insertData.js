require("dotenv").config();
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

const uri = process.env.MONGO_URI;

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected");

    const db = client.db(process.env.DB_NAME);
    const students = db.collection("students");

    const dataPath = path.join(__dirname, "../data/students.json");
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    await students.deleteMany({});
    await students.insertMany(data);

    console.log("✅ Data inserted");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();