import Image from 'next/image'
import './styles/index.css'
import Link from 'next/link'
import { prisma } from '@/db'
import { TodoItem } from '@/components/todoItem'

async function getTodos () {
  return prisma.todo.findMany()
}

async function toggleTodo (id:string, complete:boolean) {
  "use server"

  console.log(id, complete);

    /*   await prisma.todo.delete({ where: {id}}) ToDo DELENDA EST  */ 
}

export default async function Home() {
  const todos = await getTodos()



  console.log(todos);
  
  return <>
    <header>
      <h1 className='h1'>Todos.coom</h1>
      <div className='headerBtns'>
        <Link className='niceBtn' href="/newPage">New</Link>
        <Link className='niceBtn' href="/deleteTodo">Delete</Link>
      </div>

    </header>
    <ul>
      {todos.map(todo => {
        console.log(todo);
        
        return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
      })}
    </ul>
  </>
}
