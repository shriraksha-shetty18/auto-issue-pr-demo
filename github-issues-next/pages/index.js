// pages/index.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const res = await axios.get("/api/issues");
      setIssues(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>GitHub Issues Demo (Next.js)</h1>
      {loading ? (
        <p>Loading issues...</p>
      ) : issues.length === 0 ? (
        <p>No issues found!</p>
      ) : (
        <div>
          {issues.map((issue) => (
            <div
              key={issue.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>{issue.title}</h3>
              <p>{issue.body}</p>
              <a href={issue.html_url} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}