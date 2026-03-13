// pages/api/issues.js
import axios from "axios";

export default async function handler(req, res) {
  const GITHUB_USER = "YourUsername"; // replace with your GitHub username
  const REPO_NAME = "auto-issue-pr-demo"; // your repo name
  const TOKEN = process.env.GITHUB_TOKEN; // store token in .env.local

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${GITHUB_USER}/${REPO_NAME}/issues`,
      {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch issues" });
  }
}