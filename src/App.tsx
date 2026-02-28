import { useState } from 'react'
import {
  IonApp,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText
} from '@ionic/react'

import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { Task } from './types'

import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (title: string) => {
    setTasks(prev => [
      { id: Date.now(), title, completed: false },
      ...prev
    ])
  }

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Task Manager</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <div className="page-wrap">

            <IonText color="medium">
              <p style={{ marginTop: 0 }}>
                Organiza tus tareas de manera simple y elegante.
              </p>
            </IonText>

            <TaskForm onAdd={addTask} />

            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />

          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  )
}

export default App