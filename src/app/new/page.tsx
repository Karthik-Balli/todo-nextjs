export default function New() {
  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl">New Todo</h1>
      </header>
      <form className="flex gap-2 flex-col">
        <input
          type="text"
          className="border border-slate-300 rounded bg-transparent px-2 py-1 focus-within:bg-slate-700 "
        />
        <div className="flex gap-2 justify-end">
            <button className="border border-slate-300 rounded px-4 py-1 hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Cancel</button>
            <button className="border border-slate-300 rounded px-4 py-1 hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Add</button>
        </div>
      </form>
    </>
  );
}
