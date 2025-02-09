"use client";
import React, { useEffect, useState } from "react";
import ProjectBrief from "../../Components/ProjectBrief";

const ChallengeDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [challenge, setChallenge] = useState<any>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    const fetchChallenge = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/challenges?id=${id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch challenge");
        }
        const data = await response.json();
        setChallenge(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchChallenge();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      {challenge && <ProjectBrief id={id!} />} {/* Pass the ID to ProjectBrief */}
    </div>
  );
};

export default ChallengeDetail;