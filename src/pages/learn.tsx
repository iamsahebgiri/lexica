import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/main.layout";

function LearnPage() {
  return (
    <MainLayout>
      <div className="space-y-12">
        <div className="rounded-xl bg-indigo-500 px-6 py-5">
          <h1 className="text-2xl font-bold text-white">Unit 1</h1>
          <p className="text-base font-medium tracking-wide text-white">
            Pair letters and sounds
          </p>
        </div>
        <div className="mx-auto flex max-w-xs flex-col items-center gap-12">
          <div className="flex w-full items-center justify-between">
            <Button variant="indigo" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.78 2.62a.75.75 0 0 1 0 1.06L4.683 9.777a.75.75 0 0 1-1.069-.009L1.211 7.284a.75.75 0 0 1 1.078-1.043l1.873 1.936L9.72 2.62a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
            <Button variant="indigo" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.78 2.62a.75.75 0 0 1 0 1.06L4.683 9.777a.75.75 0 0 1-1.069-.009L1.211 7.284a.75.75 0 0 1 1.078-1.043l1.873 1.936L9.72 2.62a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
          <Button variant="gray" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M12.225 4.462C9.89 3.142 7 4.827 7 7.508V24.5c0 2.682 2.892 4.367 5.226 3.045l14.997-8.498c2.367-1.341 2.366-4.751 0-6.091L12.224 4.462Z"
              />
            </svg>
          </Button>
          <Button variant="outline" size="icon" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7z"
              />
            </svg>
          </Button>
          <Button variant="outline" size="icon">
            E
          </Button>
          <div className="flex w-full items-center justify-between">
            <Button variant="outline" size="icon">
              F
            </Button>
            <Button variant="outline" size="icon">
              G
            </Button>
          </div>
        </div>
        <div className="rounded-xl bg-lime-500 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Unit 1</h1>
          <p className="text-lg font-semibold tracking-wide text-white">
            Pair letters and sounds
          </p>
        </div>
        <div className="mx-auto flex max-w-xs flex-col items-center gap-12">
          <div className="flex w-full items-center justify-between">
            <Button variant="lime" size="icon">
              A
            </Button>
            <Button variant="lime" size="icon">
              B
            </Button>
          </div>
          <Button variant="gray" size="icon">
            C
          </Button>
          <Button variant="outline" size="icon">
            D
          </Button>
          <Button variant="outline" size="icon">
            E
          </Button>
          <div className="flex w-full items-center justify-between">
            <Button variant="outline" size="icon">
              F
            </Button>
            <Button variant="outline" size="icon">
              G
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

LearnPage.auth = true;

export default LearnPage;
