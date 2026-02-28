import { IonBadge, IonButton, IonItem, IonLabel } from '@ionic/react'
import { Task } from './types'

type Props = {
    task: Task
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

function TaskItem({ task, onToggle, onDelete }: Props) {
        return (
    <IonItem lines="none">
        <IonLabel>
        <h2 style={{ margin: 0, fontWeight: 700, textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
        </h2>
        </IonLabel>

        <IonBadge color={task.completed ? 'success' : 'medium'}>
        {task.completed ? 'Done' : 'Todo'}
        </IonBadge>

        <IonButton slot="end" size="small" fill="outline" onClick={() => onToggle(task.id)}>
        {task.completed ? 'Undo' : 'Done'}
        </IonButton>

        <IonButton slot="end" size="small" color="danger" fill="clear" onClick={() => onDelete(task.id)}>
        Delete
        </IonButton>
    </IonItem>
    )
}

export default TaskItem