import CreatePost from "./CreatePost";

export default function NoPost() {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-inherit px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              No Post Found
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 dark:text-gray-200 sm:text-xl/8">
              Seems like you don't have created any post.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <CreatePost />
            </div>
          </div>
        </main>
      </>
    )
  }
  