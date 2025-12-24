interface KpiCardProps {
  title: string;
  target?: string | number;
  value?: string | number;
}

export default function KpiCard({
  title,
  target,
  value
}: KpiCardProps) {
  return (
    <div className="bg-white border rounded p-4">
      <h3 className="text-sm text-gray-500 mb-1">
        {title}
      </h3>

      <div className="text-xl font-semibold">
        {value ?? "--"}
      </div>

      {target !== undefined && (
        <p className="text-xs text-gray-400 mt-1">
          Target: {target}
        </p>
      )}
    </div>
  );
}
