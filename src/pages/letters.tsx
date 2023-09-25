import MainLayout from '@/layouts/main.layout';
import React from 'react';

export default function LettersPage() {
  return (
    <MainLayout>
      <div className='text-center space-y-3'>
        <h1 className="text-3xl font-bold ">Let&apos;s learn Hindi!</h1>
        <p className="text-gray-500">
          Get to know the characters and sounds for Hindi
        </p>
      </div>
    </MainLayout>
  );
}
