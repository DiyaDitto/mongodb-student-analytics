require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const students = db.collection("students");

    console.log("Top Students:");
    console.log(await students.find().sort({ cgpa: -1 }).limit(5).toArray());

    console.log("CSE Students:");
    console.log(await students.find({ department: "CSE" }).toArray());

    console.log("High CGPA:");
    console.log(await students.find({ cgpa: { $gt: 8.5 } }).toArray());

    console.log("Age 20–23:");
    console.log(await students.find({ age: { $gte: 20, $lte: 23 } }).toArray());

    console.log("MongoDB Skill:");
    console.log(await students.find({ skills: "MongoDB" }).toArray());

  } finally {
    await client.close();
  }
}

run();