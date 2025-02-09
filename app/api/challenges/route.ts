import { NextResponse, NextRequest } from "next/server";
import {
  createChallenge,
  getChallenges,
  getChallengeById,
  getChallengesByStatus,
  updateChallenge,
  deleteChallenge,
  ChallengeStatus,
} from "../../../../lib/challenge";

const validStatuses: ChallengeStatus[] = ["open", "ongoing", "completed"];

// Handle GET requests to fetch all challenges or by status
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const status = searchParams.get("status");

  try {
    if (id) {
      const challenge = await getChallengeById(id);
      if (!challenge) {
        return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
      }
      return NextResponse.json(challenge);
    }

    if (status && validStatuses.includes(status as ChallengeStatus)) {
      const challenges = await getChallengesByStatus(status as ChallengeStatus);
      return NextResponse.json(challenges);
    }

    const challenges = await getChallenges();
    return NextResponse.json(challenges);
  } catch (error) {
    console.error("Error fetching challenges:", error);
    return NextResponse.json({ error: "Failed to fetch challenges" }, { status: 500 });
  }
}

// Handle POST requests to create a new challenge
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const requiredFields = ['title', 'deadline', 'duration', 'moneyPrize', 'contactEmail', 'projectDescription', 'projectBrief', 'projectTasks'];
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const challengeId = await createChallenge(data);
    return NextResponse.json({ message: "Challenge created", id: challengeId }, { status: 201 });
  } catch (error) {
    console.error("Error creating challenge:", error);
    return NextResponse.json({ error: "Invalid JSON input" }, { status: 400 });
  }
}

// Handle PUT requests to update a challenge
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    const { id, ...updatedData } = data;

    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    const updated = await updateChallenge(id, updatedData);
    if (!updated) {
      return NextResponse.json({ error: "Challenge not found or not updated" }, { status: 404 });
    }

    return NextResponse.json({ message: "Challenge updated successfully" });
  } catch (error) {
    console.error("Error in PUT handler:", error);
    return NextResponse.json({ error: "Invalid JSON input or server error" }, { status: 500 });
  }
}

// Handle DELETE requests to delete a challenge
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  try {
    const deleted = await deleteChallenge(id);
    if (!deleted) {
      return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Challenge deleted" });
  } catch (error) {
    console.error("Error deleting challenge:", error);
    return NextResponse.json({ error: "Failed to delete challenge" }, { status: 500 });
  }
}