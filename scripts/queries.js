const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

async function runQueries() {
  console.log("🔥 Script started");

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("college");
    const students = db.collection("students");

    const all = await students.find().toArray();
    console.log("Total students:", all.length);

    const topStudents = await students
      .find()
      .sort({ cgpa: -1 })
      .limit(5)
      .toArray();

    console.log("\nTop 5 Students:");
    console.log(topStudents);

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
    console.log("🔚 Script finished");
  }
}

runQueries();