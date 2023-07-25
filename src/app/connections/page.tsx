"use client";

import { page } from "@d-exclaimation/next";
import { useState } from "react";

type Friend = {
  name: string;
};

type Team = {
  name: string;
  sport: string;
};

export default page(() => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [followingTeam, setFollowingTeam] = useState<Team[]>([]);

  const [invites, setInvites] = useState<Friend[]>([
    { name: "Zaki" },
    { name: "Matthew Minish" },
    { name: "vincent" },
  ]);
  const [suggestedFriends, setSuggestedFriends] = useState<Friend[]>([
    { name: "Hugh Avery" },
    { name: "Joshua Brown" },
    { name: "Kaiya Patel" },
    { name: "Lily-Rose Singh" },
    { name: "Fabian Gilson" },
    { name: "Arianna Mccormack" },
    { name: "John Smith" },
    { name: "Jane Doe" },
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "Dan Carter" },
    { name: "Snoop Dogg" },
    { name: "Mark Zuckerberg" },
    { name: "Andrew Tate" },
    { name: "Elon Musk" },
    { name: "Mustapha" },
  ]);
  const [suggestedTeams, setSuggestedTeams] = useState<Team[]>([
    { name: "Lotto", sport: "Cycling" },
    { name: "Lakers", sport: "Basketball" },
    { name: "Raptors", sport: "Basketball" },
    { name: "Rockets", sport: "Basketball" },
    { name: "Staggs", sport: "Cricket" },
    { name: "007", sport: "Software" },
    { name: "KFC", sport: "Friend Chicken" },
  ]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-start md:items-start md:justify-center w-[90vw] min-h-[90dvh] md:min-h-[unset] gap-4 py-4">
      <div className="w-full md:w-[30%] md:sticky md:top-4 md:min-h-[90dvh] flex flex-col items-start justify-start bg-white rounded-md shadow p-4">
        {/* Friends */}
        <div className="w-full flex flex-col items-start justify-start bg-white rounded-md">
          <div className="flex items-center gap-2 w-[100%]">
            <img
              className="w-6 px-1 aspect-square md:w-7"
              src="/molecule.svg"
              alt="connections"
            />
            <span className="font-semibold text-lg md:text-xl">Friends</span>
          </div>

          {!friends.length ? (
            <div className="w-full my-5 flex items-center justify-center">
              <span className="text-black/50">You have no friends</span>
            </div>
          ) : (
            <div className="w-full my-2 flex flex-col items-center justify-start">
              {friends.map((friend, i) => (
                <div
                  className="group w-full flex items-center py-2 px-3 rounded border border-black/5 gap-3 hover:bg-slate-100 active:bg-slate-100"
                  key={friend.name}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 border rounded-full overflow-hidden">
                    <img
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full group-hover:scale-110"
                      src={`https://api.dicebear.com/6.x/shapes/svg?seed=${friend.name}`}
                    />
                  </div>
                  <span className="max-w-[60%] truncate">{friend.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Team following */}
        <div className="mt-2 w-full flex flex-col items-start justify-start bg-white rounded-md">
          <div className="flex items-center gap-2 w-[100%]">
            <img
              className="w-6 px-1 aspect-square md:w-7"
              src="/ping-pong.svg"
              alt="team-following"
            />
            <span className="font-semibold text-lg md:text-xl">
              Team Following
            </span>
          </div>

          {!followingTeam.length ? (
            <div className="w-full my-5 flex items-center justify-center">
              <span className="text-black/50">
                You are not following any team
              </span>
            </div>
          ) : (
            <div className="w-full my-2 flex flex-col items-center justify-start">
              {followingTeam.map((team, i) => (
                <div
                  className="group w-full flex items-center py-2 px-3 rounded border border-black/5 gap-3 hover:bg-slate-100 active:bg-slate-100"
                  key={team.name}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 border rounded-full overflow-hidden">
                    <img
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full group-hover:scale-110"
                      src={`https://api.dicebear.com/6.x/shapes/svg?seed=${team.name}`}
                    />
                  </div>
                  <span className="max-w-[60%] truncate">{team.name}</span>
                  <span className="max-w-[10%] text-sm text-black/50 truncate">
                    {team.sport}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full md:w-[unset] md:min-h-[90dvh] flex-col items-center justify-start gap-3">
        {/* Invites */}
        <div className="w-full md:w-[min(90vw,36rem)] flex flex-col items-start justify-center p-4 bg-white rounded-md shadow">
          <div className="flex items-center gap-2 w-[100%]">
            <img
              className="w-6 px-1 aspect-square md:w-7"
              src="/add-user.svg"
              alt="invites"
            />
            <span className="font-semibold text-lg md:text-xl">Invites</span>
          </div>

          {!invites.length ? (
            <div className="w-full my-5 flex items-center justify-center">
              <span className="text-black/50">There's no pending invites</span>
            </div>
          ) : (
            <div className="w-full my-2 flex flex-col items-center justify-start gap-2">
              {invites.map((invite, i) => (
                <div
                  className="group w-full flex flex-col md:flex-row items-center py-2 px-3 rounded border border-black/5 gap-3 md:hover:bg-slate-100 md:active:bg-slate-100"
                  key={invite.name}
                >
                  <div className="flex items-center w-full gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 border rounded-full overflow-hidden">
                      <img
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full group-hover:scale-110"
                        src={`https://api.dicebear.com/6.x/shapes/svg?seed=${invite.name}`}
                      />
                    </div>
                    <span className="max-w-[60%] truncate">{invite.name}</span>
                  </div>

                  <div className="flex gap-2 w-full md:w-[unset] md:ml-auto">
                    <button
                      className="px-3 w-full md:w-[unset] py-2 rounded-md bg-[#eef3f6] hover:bg-blue-200 active:bg-blue-200"
                      onClick={() => {
                        setFriends([...friends, invite]);
                        setInvites(invites.filter((_, j) => j !== i));
                      }}
                    >
                      Accept
                    </button>
                    <button
                      className="px-3 w-full md:w-[unset] py-2 rounded-md bg-[#eef3f6] hover:bg-red-200 active:bg-red-200"
                      onClick={() => {
                        setInvites(invites.filter((_, j) => j !== i));
                      }}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Suggested Friends */}
        <div className="w-full md:w-[min(90vw,36rem)] flex flex-col items-start justify-center p-4 bg-white rounded-md shadow">
          <div className="flex items-center gap-2 w-[100%]">
            <img
              className="w-6 px-1 aspect-square md:w-7"
              src="/like.svg"
              alt="suggested-friends"
            />
            <span className="font-semibold text-lg md:text-xl">
              Suggested Friends
            </span>
          </div>

          {!suggestedFriends.length ? (
            <div className="w-full my-5 flex items-center justify-center">
              <span className="text-black/50">
                There's no friend suggestions
              </span>
            </div>
          ) : (
            <div className="w-full my-2 grid grid-cols-2 md:grid-cols-3 gap-2">
              {suggestedFriends.slice(0, 6).map((friend, i) => (
                <div
                  key={friend.name}
                  className="flex flex-col items-center justify-center w-full h-full rounded py-4 border border-black/5 gap-3"
                >
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    src={`https://api.dicebear.com/6.x/shapes/svg?seed=${friend.name}`}
                  />
                  <span className="font-medium">{friend.name}</span>
                  <button
                    className="px-4 py-2 rounded-md bg-[#eef3f6] hover:bg-blue-200 active:bg-blue-200"
                    onClick={() => {
                      setFriends([...friends, friend]);
                      setSuggestedFriends(
                        suggestedFriends.filter((_, j) => j !== i)
                      );
                    }}
                  >
                    Add Friend
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Suggested Teams */}
        <div className="w-full md:w-[min(90vw,36rem)] flex flex-col items-start justify-center p-4 bg-white rounded-md shadow">
          <div className="flex items-center gap-2 w-[100%]">
            <img
              className="w-6 px-1 aspect-square md:w-7"
              src="/campfire.svg"
              alt="suggested-teams"
            />
            <span className="font-semibold text-lg md:text-xl">
              Suggested Teams
            </span>
          </div>

          {!suggestedTeams.length ? (
            <div className="w-full my-5 flex items-center justify-center">
              <span className="text-black/50">There's no team suggestions</span>
            </div>
          ) : (
            <div className="w-full my-2 grid grid-cols-2 md:grid-cols-3 gap-2">
              {suggestedTeams.slice(0, 6).map((team, i) => (
                <div
                  key={team.name}
                  className="flex flex-col items-center justify-center w-full h-full rounded py-4 border border-black/5 gap-3"
                >
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    src={`https://api.dicebear.com/6.x/shapes/svg?seed=${team.name}`}
                  />
                  <div className="w-full flex flex-col items-center justify-center gap-1">
                    <span className="font-medium">{team.name}</span>
                    <span className="font-light text-sm text-black/50">
                      {team.sport}
                    </span>
                  </div>
                  <button
                    className="px-4 py-2 rounded-md bg-[#eef3f6] hover:bg-blue-200 active:bg-blue-200"
                    onClick={() => {
                      setFollowingTeam([...followingTeam, team]);
                      setSuggestedTeams(
                        suggestedTeams.filter((_, j) => j !== i)
                      );
                    }}
                  >
                    Follow
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export const runtime = "edge";
