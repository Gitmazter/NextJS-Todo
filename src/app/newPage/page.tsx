import Link from "next/link";
import '../styles/index.css'
import { Prisma } from "@prisma/client";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

export default function Page () { 

  async function createTodo(data : FormData) {
    "use server"  
    console.log('hi')

    const title = data.get('title')?.valueOf()

    if(typeof title !== "string" || title.length === 0) {
      throw new Error ("Invalid Title")
    }

    await prisma.todo.create({ data: { title, complete: false}})

    console.log(title);
    redirect("/")
    redirect
  }


  return <>
    <header>
      <h1 className='h1'>New</h1>
    </header>
    
    <form action={createTodo}>  
      <input type="text" name="title"/>
      <div>

        <Link 
        href=".." 
        className='niceBtn'
        >Cancel</Link>

        <button 
        type="submit" 
        className='niceBtn'
        >Save</button>

      </div>
    </form>
  </>
}