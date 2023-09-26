import MainLayout from "@/layouts/main.layout";
import React from "react";
import { Icon } from "@iconify/react";
import globeShowingAsiaAustralia from "@iconify/icons-fluent-emoji/globe-showing-asia-australia";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";

export default function LeaderboardPage() {
  const { data: session } = useSession();
  const { data: users, isLoading, error } = api.user.getLeaderboard.useQuery();

  if (isLoading) {
    return <MainLayout title="Leaderboard">Loading...</MainLayout>;
  }

  if (error) {
    return <MainLayout title="Leaderboard">{error.message}</MainLayout>;
  }
  return (
    <MainLayout title="Leaderboard">
      <div className="text-center">
        <Icon
          icon={globeShowingAsiaAustralia}
          className="mx-auto mb-4 h-20 w-20"
        />
        <h1 className="text-3xl font-bold ">Leaderboards</h1>
        <p className="text-gray-500">See how others are preforming</p>
      </div>
      <div className="mt-10">
        <div className="divide-y-2 rounded-2xl border-2">
          {users.map((user, index) => (
            <div key={user.id} className="flex items-center gap-4 p-4">
              {/* @ts-ignore */}
              <h1 className="font-semibold mr-4">{index + 1}</h1>
              <img
                src={user.image ?? undefined}
                className="h-8 w-8 rounded-full"
              />
              <h3 className="flex-1 font-bold">
                {user.name}
                {session?.user.id === user.id ? " (You)" : null}
              </h3>
              <h4>{user.xp} XP</h4>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
