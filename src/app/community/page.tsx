export default function Community() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Join the DevOps Community</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Connect with other DevOps professionals and stay up to date.
        </p>
  
        <ul className="mt-8 space-y-4 text-gray-800 dark:text-gray-200">
          <li>
            <a
              href="https://www.reddit.com/r/devops/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              r/devops on Reddit
            </a>
            - A vibrant online DevOps community
          </li>
          <li>
            <a
              href="https://devops.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              DevOps.com
            </a>
            - News and events related to DevOps
          </li>
          <li>
            <a
              href="https://www.meetup.com/topics/devops/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Meetup DevOps Groups
            </a>
            - Local DevOps meetups and events
          </li>
          <li>
            <a
              href="https://www.allthingsopen.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              All Things Open
            </a>
            - Open source and DevOps conference
          </li>
        </ul>
      </main>
    );
  }
  