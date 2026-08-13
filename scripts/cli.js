require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const action = process.argv[2];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const students = db.collection("students");

    if (action === "top") {
      console.log(await students.find().sort({ cgpa: -1 }).limit(5).toArray());
    } else if (action === "cse") {
      console.log(await students.find({ department: "CSE" }).toArray());
    } else {
      console.log("Usage: node cli.js [top | cse]");
    }

  } finally {
    await client.close();
  }
}

run();