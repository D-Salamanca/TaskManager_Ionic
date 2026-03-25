import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonBadge,
  IonButtons,
  IonButton,
} from '@ionic/react'
import { add } from 'ionicons/icons'
import { useHistory } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useTasksContext } from '../context/TasksContext'

export default function TasksListPage() {
  const history = useHistory()
  const { logout } = useAuthContext()
  const { tasks, deleteTask, toggleTask } = useTasksContext()

  const handleLogout = async () => {
    await logout()
    history.push('/login')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task Manager</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleLogout}>Logout</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {tasks.map(t => (
            <IonItemSliding key={t.id}>
              <IonItem
                button
                routerLink={`/tasks/detail/${t.id}`}
              >
                <IonLabel>
                  <h2 style={{
                    fontWeight: 700,
                    textDecoration: t.completed ? 'line-through' : 'none'
                  }}>
                    {t.title}
                  </h2>
                  <p>{t.description}</p>
                </IonLabel>
                <IonBadge color={t.completed ? 'success' : 'medium'}>
                  {t.completed ? 'Done' : 'Todo'}
                </IonBadge>
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption
                  color="success"
                  onClick={() => toggleTask(t.id)}
                >
                  {t.completed ? 'Undo' : 'Done'}
                </IonItemOption>

                <IonItemOption
                  color="primary"
                  routerLink={`/tasks/edit/${t.id}`}
                >
                  Edit
                </IonItemOption>

                <IonItemOption
                  color="danger"
                  onClick={() => deleteTask(t.id)}
                >
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/tasks/create">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}