import { DeletableTodoItem } from "@/components/deleteableTodoItem";
import { prisma } from "@/db";
import Link from "next/link";


async function getTodos () {
  return prisma.todo.findMany()
}
async function toggleTodo (id:string, complete:boolean) {
  "use server"

  console.log(id, complete);

  await prisma.todo.delete({ where: {id}})
}

export default async function () {
  const todos = await getTodos()

  return <>
      <header>
        <h1 className='h1'>Select To Delete</h1>
      </header>
      <ul>
          {todos.map(todo => {
            console.log(todo);
            
            return <DeletableTodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          })}
      </ul>
    <Link href=".." className="niceBtn">Return</Link>
  </>
}

