import Link from "next/link";
import { prisma } from "@/db";
import TodoItem from "../components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}
export default async function Home() {
  const todos = await getTodos();
  // await prisma.todo.create({ data: { title: "Complete NextJS", complete: false}})
  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl">ToDo Application</h1>
        <Link
          className="border border-slate-300 text-slate-300 rounded-lg py-2 px-4 hover:bg-slate-700 focus-within:bg-slate-700"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
