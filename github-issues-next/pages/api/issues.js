```javascript
// pages/api/issues.js
import axios from "axios";

export default async function handler(req, res) {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME; // Get GitHub username from environment variable
  const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME;   // Get repository name from environment variable
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Get GitHub token from environment variable

  // The issue number to fetch should be dynamic, typically from a query parameter.
  // Example usage: /api/issues?number=7
  const { number } = req.query;
  const issueNumberToFetch = number ? parseInt(number, 10) : null;

  // Validate the presence and type of the issue number
  if (!issueNumberToFetch || isNaN(issueNumberToFetch)) {
    return res.status(400).json({ error: "Missing or invalid 'number' query parameter. Usage: /api/issues?number=7" });
  }

  // Validate configuration environment variables
  if (!GITHUB_USERNAME) {
    return res.status(500).json({ error: "GITHUB_USERNAME environment variable is not configured." });
  }
  if (!GITHUB_REPO_NAME) {
    return res.status(500).json({ error: "GITHUB_REPO_NAME environment variable is not configured." });
  }
  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: "GITHUB_TOKEN environment variable is not configured." });
  }

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/issues/${issueNumberToFetch}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json", // Specify GitHub API version
        },
      }
    );

    // GitHub's /repos/:owner/:repo/issues/:issue_number endpoint can return both issues and pull requests.
    // If "Fix issue #7" implies only fetching actual issues and not pull requests,
    // we should check for the 'pull_request' key.
    if (response.data.pull_request) {
      return res.status(404).json({ error: `Item #${issueNumberToFetch} is a Pull Request, not a standard issue.` });
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error(`Error fetching issue #${issueNumberToFetch}:`, error.message);

    if (error.response) {
      // Handle specific HTTP error responses from GitHub API
      if (error.response.status === 404) {
        return res.status(404).json({ error: `Issue #${issueNumberToFetch} not found in ${GITHUB_USERNAME}/${GITHUB_REPO_NAME}.` });
      }
      // Forward other GitHub API error messages
      return res.status(error.response.status).json({ error: `GitHub API error: ${error.response.data.message || error.message}` });
    }
    // Generic server error
    res.status(500).json({ error: `Failed to fetch issue #${issueNumberToFetch}. Please check server logs.` });
  }
}
```