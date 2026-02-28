import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react'
import { Task } from './types'
import TaskItem from './TaskItem'

type Props = {
    tasks: Task[]
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

function TaskList({ tasks, onToggle, onDelete }: Props) {
    const pending = tasks.filter(t => !t.completed)
    const completed = tasks.filter(t => t.completed)

    return (
    <>
        <IonCard className="ion-margin-top">
        <IonCardHeader>
            <IonCardTitle>Pendientes ({pending.length})</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            {pending.map(task => (
            <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </IonCardContent>
        </IonCard>

        <IonCard className="ion-margin-top">
        <IonCardHeader>
            <IonCardTitle>Completadas ({completed.length})</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            {completed.map(task => (
            <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </IonCardContent>
        </IonCard>
    </>
    )
}

export default TaskList