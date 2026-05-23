import { useEffect, useState } from 'react';

interface HealthResponse {
  status: string;
  uptimeSeconds: number;
}

function HealthPage() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((data: HealthResponse) => setHealth(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h2>API Health</h2>
      {error ? (
        <div className="alert alert-danger">{error}</div>
      ) : health ? (
        <div className="alert alert-success">
          <p>Status: {health.status}</p>
          <p>Uptime: {health.uptimeSeconds.toFixed(1)} seconds</p>
        </div>
      ) : (
        <div>Loading health information…</div>
      )}
    </div>
  );
}

export default HealthPage;
