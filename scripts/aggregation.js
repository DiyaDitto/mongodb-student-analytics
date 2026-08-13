const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

async function runAggregation() {
  console.log("🔥 Aggregation started");

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("college");
    const students = db.collection("students");

    // 1. Average CGPA per department
    const avgCgpa = await students.aggregate([
      {
        $group: {
          _id: "$department",
          avgCgpa: { $avg: "$cgpa" }
        }
      }
    ]).toArray();

    console.log("\n📊 Average CGPA per Department:");
    console.log(avgCgpa);

    // 2. Count students per department
    const countDept = await students.aggregate([
      {
        $group: {
          _id: "$department",
          totalStudents: { $sum: 1 }
        }
      }
    ]).toArray();

    console.log("\n👥 Students per Department:");
    console.log(countDept);

    // 3. Highest CGPA student
    const topStudent = await students.aggregate([
      { $sort: { cgpa: -1 } },
      { $limit: 1 }
    ]).toArray();

    console.log("\n🏆 Top Student:");
    console.log(topStudent);

    // 4. Students with CGPA > 8.5 grouped by department
    const highCgpaDept = await students.aggregate([
      { $match: { cgpa: { $gt: 8.5 } } },
      {
        $group: {
          _id: "$department",
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    console.log("\n📈 High CGPA Students by Department:");
    console.log(highCgpaDept);

    // 5. Project only name and cgpa
    const projection = await students.aggregate([
      {
        $project: {
          _id: 0,
          name: 1,
          cgpa: 1
        }
      }
    ]).toArray();

    console.log("\n📄 Name & CGPA only:");
    console.log(projection);

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
    console.log("🔚 Aggregation finished");
  }
}

runAggregation();