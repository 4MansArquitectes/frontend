import teamMembers from "../lib/teamMembers";
import type { TeamMember, TeamMembers } from "../types/teamTypes";

export const mockTeamMember: TeamMember = teamMembers[0];

export const mockTeamMembers: TeamMembers = teamMembers;

export const mockTeamMembersExtends: TeamMembers = [
	...teamMembers,
	{
		index: 3,
		name: "Mock Team",
		tag: "Mock Team",
		image: "image.png",
	},
];
