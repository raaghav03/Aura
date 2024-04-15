export default function Card({ children }) {
  return (
    <>
      <div className="bg-white fit-content p-4 rounded-xl border border-zinc-200 shadow-sm shadow-slate-200">
        {children}
      </div>
    </>
  );
}
