export default function TeamPerformance() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        Team Performance
      </h1>

      <div className="bg-white border rounded p-4">
        <p className="text-gray-600 mb-2">
          This section will display team-wise KPIs, progress, and performance summaries.
        </p>

        <ul className="list-disc list-inside text-gray-500">
          <li>Employee KPI progress</li>
          <li>Goal completion status</li>
          <li>Manager reviews</li>
          <li>Performance trends</li>
        </ul>
      </div>
    </div>
  );
}
