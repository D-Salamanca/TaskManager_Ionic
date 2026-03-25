import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Task } from '../types'

interface TasksContextType {
  tasks: Task[]
  addTask: (title: string, description: string) => void
  updateTask: (updated: Task) => void
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

const TasksContext = createContext<TasksContextType | null>(null)

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    }
    setTasks(prev => [newTask, ...prev])
  }

  const updateTask = (updated: Task) => {
    setTasks(prev => prev.map(t => t.id === updated.id ? updated : t))
  }

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    )
  }

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      addTask,
      updateTask,
      toggleTask,
      deleteTask,
    }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasksContext() {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('useTasksContext debe usarse dentro de TasksProvider')
  }
  return context
}