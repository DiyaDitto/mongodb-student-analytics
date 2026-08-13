require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const students = db.collection("students");

    console.log("Average CGPA:");
    console.log(await students.aggregate([
      { $group: { _id: "$department", avg: { $avg: "$cgpa" } } }
    ]).toArray());

    console.log("Count per Dept:");
    console.log(await students.aggregate([
      { $group: { _id: "$department", total: { $sum: 1 } } }
    ]).toArray());

    console.log("Top Student:");
    console.log(await students.aggregate([
      { $sort: { cgpa: -1 } },
      { $limit: 1 }
    ]).toArray());

    console.log("Top 3 per Dept:");
    console.log(await students.aggregate([
      { $sort: { cgpa: -1 } },
      {
        $group: {
          _id: "$department",
          students: { $push: "$$ROOT" }
        }
      },
      {
        $project: {
          topStudents: { $slice: ["$students", 3] }
        }
      }
    ]).toArray());

  } finally {
    await client.close();
  }
}

run();