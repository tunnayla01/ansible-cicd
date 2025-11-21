export default function Tools() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">DevOps Tools</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Explore a collection of popular DevOps tools and frameworks.
        </p>
  
        <ul className="mt-8 space-y-4 text-gray-800 dark:text-gray-200">
          <li>
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Docker
            </a>
            - Containerization platform
          </li>
          <li>
            <a
              href="https://www.kubernetes.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Kubernetes
            </a>
            - Container orchestration system
          </li>
          <li>
            <a
              href="https://www.terraform.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Terraform
            </a>
            - Infrastructure as Code (IaC) tool
          </li>
          <li>
            <a
              href="https://www.jenkins.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Jenkins
            </a>
            - Automation server for CI/CD
          </li>
        </ul>
      </main>
    );
  }
  