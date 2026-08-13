# Schema Design

## Student Document Structure

Each student document contains:

* name (String)
* age (Number)
* department (String)
* cgpa (Number)
* skills (Array)
* address (Embedded Object)

## Why Embedded Documents?

The address is embedded because:

* It belongs only to the student
* It is small in size
* It is frequently accessed together

## Why Arrays?

Skills are stored as an array because:

* A student can have multiple skills
* Easy to query using MongoDB operators

## Why No Referencing?

This project avoids referencing because:

* Dataset is small
* Simpler for beginner-level understanding
* No need for joins

## Conclusion

This schema is optimized for:

* Simplicity
* Read performance
* Easy querying
