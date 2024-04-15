export default function KPI({
  heading,
  subheading,
  metric,
  chart,
  icon,
  change,
  children,
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-center gap-x-2 text-neutral-400">
          {icon}
          <p className="flex-1">{heading}</p>
          {subheading}
        </div>
        <h1 className="font-medium text-4xl text-gray-800">{metric}</h1>
        {children}
      </div>
    </>
  );
}
