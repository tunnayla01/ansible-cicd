import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50 dark:bg-gray-900">
      <header className="w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Welcome to devKtOps</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Empowering DevOps for your organization</p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">We provide tools, learning resources, and a community to help you succeed.</p>
        <Image
          src="/devktops.jpeg"
          alt="devKtOps Logo"
          width={200}
          height={200}
          className="mt-8 mx-auto rounded"
        />
      </header>

      <section className="my-16 grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Tools</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Discover the best tools and frameworks for DevOps.</p>
          <a
            href="/tools"
            className="inline-block mt-4 text-blue-500 hover:underline"
          >
            Explore Tools &rarr;
          </a>
        </div>

        <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Learning</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Find courses and resources to enhance your DevOps skills.</p>
          <a
            href="/learning"
            className="inline-block mt-4 text-blue-500 hover:underline"
          >
            Start Learning &rarr;
          </a>
        </div>

        <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Community</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Join our community and connect with DevOps professionals.</p>
          <a
            href="/community"
            className="inline-block mt-4 text-blue-500 hover:underline"
          >
            Join Now &rarr;
          </a>
        </div>
      </section>

      <footer className="w-full text-center">
        <p className="text-gray-700 dark:text-gray-300">Powered by devKtOps © 2024</p>
      </footer>
    </main>
  );
}
