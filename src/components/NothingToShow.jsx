export default function NothingToShow() {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-inherit px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Nothing to show
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 dark:text-gray-200 sm:text-xl/8">
              Seems like we don't have any data to show you in this page or category...
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  