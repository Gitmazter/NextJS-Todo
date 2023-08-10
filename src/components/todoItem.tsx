"use client"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete:boolean) => void
}

export function TodoItem ({id, title, complete, toggleTodo}: TodoItemProps) {
  return <li key={id}>
    <input id={id} type="checkbox" className="" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
    <label htmlFor={id}>{title}</label>
  </li>
}
