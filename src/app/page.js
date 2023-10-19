import AddTodo from '@/components/addTodo'
import TodoSection from '@/components/todoSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-40">
      <AddTodo></AddTodo>
      <TodoSection></TodoSection>
    </main>
  )
}
