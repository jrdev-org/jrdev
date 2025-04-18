"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import type { Member, MemberLevel } from "@/app/interfaces/types";

const getLevelColor = (level: MemberLevel): string => {
  const colors = {
    NOOB: "bg-green-500",
    AMATEUR: "bg-blue-500",
    INTERMEDIATE: "bg-purple-500",
    "10X": "bg-amber-500",
    "CODE NINJA": "bg-red-500",
    "BYTE WIZARD": "bg-indigo-500",
    "TECH GURU": "bg-pink-500",
    "DEBUGGING DEITY": "bg-yellow-500",
  };
  return colors[level];
};

export default function MembersPage() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState<Member[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/members");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch members: ${response.status} ${response.statusText}`,
          );
        }
        const data: Member[] = await response.json();
        setMembers(data);
      } catch (error: any) {
        console.error("Error fetching members:", error);
        // Handle the error appropriately (e.g., display an error message)
      }
    };

    fetchMembers();
  }, []);

  const filteredMembers = members.filter((member) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      member.name.toLowerCase().includes(searchLower) ||
      member.email.toLowerCase().includes(searchLower) ||
      member.organization.toLowerCase().includes(searchLower) ||
      member.level.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <div className="mx-auto max-w-[1200px] p-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-3xl font-bold">Members</h1>
          <input
            type="text"
            placeholder="Search members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 rounded-lg border border-edge bg-secondary px-4 py-2 focus:border-text-main focus:outline-none"
          />
        </div>
        <hr className="my-6" />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-edge bg-secondary">
                <th className="p-4 text-left text-heading">Name</th>
                <th className="p-4 text-left text-heading">Email</th>
                <th className="p-4 text-left text-heading">Phone</th>
                <th className="p-4 text-left text-heading">Organization</th>
                <th className="p-4 text-left text-heading">Level</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr
                  key={member.id}
                  onClick={() => router.push(`/members/${member.id}`)}
                  className="cursor-pointer border-b border-edge transition-colors hover:bg-secondary"
                >
                  <td className="p-4">{member.name}</td>
                  <td className="p-4">{member.email}</td>
                  <td className="p-4">{member.phone}</td>
                  <td className="p-4">{member.organization}</td>
                  <td className="p-4">
                    <div
                      className="relative w-48"
                      onMouseEnter={() => setHoveredMember(member.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                    >
                      <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                        <div
                          className={`h-full ${getLevelColor(member.level)} transition-all duration-300`}
                          style={{ width: `${member.levelProgress}%` }}
                        />
                      </div>
                      {hoveredMember === member.id && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded border border-edge bg-secondary px-3 py-1 text-sm whitespace-nowrap text-text-border-text-main">
                          {member.level}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
