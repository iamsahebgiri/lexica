/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Icon } from "@iconify/react";
import flagForIndia from "@iconify/icons-emojione-v1/flag-for-india";
import flagForFrance from "@iconify/icons-emojione-v1/flag-for-france";
import MainLayout from "@/layouts/main.layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { api } from "@/utils/api";

function ProfilePage() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, isLoading, error } = api.user.getById.useQuery({
    id,
  });

  if (isLoading) {
    return <MainLayout title="Profile">Loading...</MainLayout>;
  }

  if (error) {
    return <MainLayout title="Profile">{error.message}</MainLayout>;
  }

  return (
    <MainLayout title={`${data?.name} - Profile`}>
      <div className="flex items-center justify-between border-b-2 pb-5">
        <div>
          <h1 className="text-3xl font-bold">{data?.name}</h1>
          <p className="text-gray-500">{data?.bio}</p>
          <p className="font-bold text-gray-500">{data?.xp} XP</p>
          <p className="mt-4 text-gray-500">
            Joined on{" "}
            {data?.createdAt.toLocaleDateString("en-IN", {
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
        <img
          src={data?.image ?? undefined}
          alt={data?.name ?? undefined}
          title={data?.name ?? undefined}
          className="h-32 w-32 rounded-full"
        />
      </div>
      <div className="mt-8 space-y-2">
        <h2 className="text-2xl font-bold">Progress</h2>
        <div className="divide-y-2 rounded-2xl border-2">
          <div className="flex items-center gap-4 p-4">
            <Icon icon={flagForIndia} className="h-20 w-20" />
            <div className="flex-1 space-y-2">
              <div className="flex justify-between">
                <h3 className="font-bold">Hindi</h3>
                <p className="text-gray-500">90%</p>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-amber-500 p-1"
                  style={{
                    width: "90%",
                  }}
                >
                  <div className="h-[3px] rounded-full bg-amber-200/30" />
                </div>
              </div>
            </div>
            <div>
              <Button variant="destructive">Reset</Button>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <Icon icon={flagForFrance} className="h-20 w-20" />
            <div className="flex-1 space-y-2">
              <div className="flex justify-between">
                <h3 className="font-bold">French</h3>
                <p className="text-gray-500">20%</p>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-amber-500 p-1"
                  style={{
                    width: "20%",
                  }}
                >
                  <div className="h-[3px] rounded-full bg-amber-200/30" />
                </div>
              </div>
            </div>
            <div>
              <Button variant="destructive">Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

ProfilePage.auth = true;

export default ProfilePage;
