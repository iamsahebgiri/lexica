import MainLayout from '@/layouts/main.layout';
import React from 'react';
import { Icon } from '@iconify/react';
import globeShowingAsiaAustralia from '@iconify/icons-fluent-emoji/globe-showing-asia-australia';

export default function LeaderboardPage() {
  return (
    <MainLayout>
      <div className="text-center">
        <Icon
          icon={globeShowingAsiaAustralia}
          className="h-20 w-20 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold ">Leaderboards</h1>
        <p className="text-gray-500">See how others are preforming</p>
      </div>
      
    </MainLayout>
  );
}
