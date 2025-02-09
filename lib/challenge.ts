

import { ObjectId } from "mongodb";
import clientPromise from "./mongodb"; 

export type ChallengeStatus = "open" | "ongoing" | "completed";
export type SeniorityLevel = "junior" | "mid" | "senior";

export interface Challenge {
  _id?: ObjectId | string;
  title: string;
  deadline: Date;
  duration: string;
  moneyPrize: string;
  contactEmail: string;
  projectDescription: string;
  projectBrief: string;
  projectTasks: string[];
  status: ChallengeStatus;
  seniority: SeniorityLevel;
  skills: string[];
  createdAt?: Date;
}


//search

export async function searchChallenges(query: string, limit: number = 10, page: number = 1) {
  // Validate input
  if (!query || typeof query !== "string") {
    throw new Error("Invalid search query");
  }

  const client = await clientPromise;
  const db = client.db("umurava");
  const regex = new RegExp(query, "i");

  try {
    const challenges = await db.collection<Challenge>("challenges")
      .find({
        $or: [
          { title: regex },
          { projectDescription: regex },
          { projectBrief: regex }
        ],
      })
      .skip((page - 1) * limit) // Pagination
      .limit(limit) // Limit results
      .toArray();

    return challenges.map(challenge => ({
      ...challenge,
      _id: challenge._id?.toString(),
    }));
  } catch (error) {
    console.error("Error searching challenges:", error);
    throw new Error("Database query failed"); // Handle error gracefully
  }
}

export async function getChallengeCounts() {
  const client = await clientPromise;
  const db = client.db("umurava");

  // Count all challenges
  const allChallenges = await db.collection("challenges").countDocuments();

  // Count challenges based on different statuses
  const completedCount = await db.collection("challenges").countDocuments({ status: "completed" });
  const openCount = await db.collection("challenges").countDocuments({ status: "open" });
  const ongoingCount = await db.collection("challenges").countDocuments({ status: "ongoing" });

  return {
    all: allChallenges,
    completed: completedCount,
    open: openCount,
    ongoing: ongoingCount,
  };
}




export async function createChallenge(challenge: Omit<Challenge, "_id">) {
  const client = await clientPromise;
  const db = client.db("umurava");

  const result = await db.collection<Challenge>("challenges").insertOne({
    ...challenge,
    createdAt: new Date(),
    status: challenge.status || "open",
  });

  return result.insertedId.toString();
}

export async function getChallenges() {
  const client = await clientPromise;
  const db = client.db("umurava");

  const challenges = await db.collection<Challenge>("challenges").find({}).toArray();
  return challenges.map(challenge => ({
    ...challenge,
    _id: challenge._id?.toString(),
  }));
}

export async function getChallengeById(id: string) {
  const client = await clientPromise;
  const db = client.db("umurava");

  const challenge = await db.collection<Challenge>("challenges").findOne({
    _id: new ObjectId(id),
  });

  if (challenge) {
    return { ...challenge, _id: challenge._id.toString() };
  }

  return null;
}

export async function getChallengesByStatus(status: ChallengeStatus) {
  const client = await clientPromise;
  const db = client.db("umurava");

  const challenges = await db.collection<Challenge>("challenges").find({ status }).toArray();
  return challenges.map(challenge => ({
    ...challenge,
    _id: challenge._id?.toString(),
  }));
}

export async function updateChallenge(id: string, updatedData: Partial<Omit<Challenge, "_id">>) {
  const client = await clientPromise;
  const db = client.db("umurava");

  const result = await db.collection<Challenge>("challenges").updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );

  return result.modifiedCount > 0;
}

export async function deleteChallenge(id: string) {
  const client = await clientPromise;
  const db = client.db("umurava");

  const result = await db.collection<Challenge>("challenges").deleteOne({
    _id: new ObjectId(id),
  });

  return result.deletedCount > 0;
}
