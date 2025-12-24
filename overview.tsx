export default function PerformanceOverview() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        Performance Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded p-4">
          <h2 className="font-medium mb-1">Overall KPI Completion</h2>
          <p className="text-gray-500 text-sm">
            Summary of KPI progress across the organization.
          </p>
        </div>

        <div className="bg-white border rounded p-4">
          <h2 className="font-medium mb-1">Top Performing Teams</h2>
          <p className="text-gray-500 text-sm">
            Teams with highest goal achievement.
          </p>
        </div>

        <div className="bg-white border rounded p-4">
          <h2 className="font-medium mb-1">Review Status</h2>
          <p className="text-gray-500 text-sm">
            Pending and completed performance reviews.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-white border rounded p-4 text-gray-500">
        Detailed analytics, charts, and trends will be displayed here.
      </div>
    </div>
  );
}
