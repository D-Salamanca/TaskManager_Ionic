import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonBadge,
} from '@ionic/react'
import { useHistory, useParams } from 'react-router-dom'
import { useTasksContext } from '../context/TasksContext'

export default function TaskDetailPage() {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const { tasks, toggleTask } = useTasksContext()

  const task = tasks.find(t => t.id === Number(id)) ?? null

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task Detail</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {!task ? (
          <>
            <IonText color="danger">
              <p>Tarea no encontrada.</p>
            </IonText>
            <IonButton expand="block" onClick={() => history.push('/tasks')}>
              Volver
            </IonButton>
          </>
        ) : (
          <>
            <IonItem>
              <IonLabel>
                <h2 style={{ fontWeight: 700, margin: 0 }}>Title</h2>
                <p style={{ margin: 0 }}>{task.title}</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                <h2 style={{ fontWeight: 700, margin: 0 }}>Description</h2>
                <p style={{ margin: 0 }}>{task.description || 'Sin descripción'}</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                <h2 style={{ fontWeight: 700, margin: 0 }}>Status</h2>
              </IonLabel>
              <IonBadge color={task.completed ? 'success' : 'medium'}>
                {task.completed ? 'Done' : 'Todo'}
              </IonBadge>
            </IonItem>

            <IonButton
              expand="block"
              className="ion-margin-top"
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? 'Mark as Todo' : 'Mark as Done'}
            </IonButton>

            <IonButton
              expand="block"
              color="primary"
              fill="outline"
              onClick={() => history.push(`/tasks/edit/${task.id}`)}
            >
              Edit
            </IonButton>

            <IonButton
              expand="block"
              fill="outline"
              onClick={() => history.push('/tasks')}
            >
              Back
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  )
}