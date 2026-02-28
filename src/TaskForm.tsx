import {
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
} from '@ionic/react'
import { useState } from 'react'

type Props = { onAdd: (title: string) => void }

function TaskForm({ onAdd }: Props) {
    const [value, setValue] = useState('')

    const handleAdd = () => {
    const t = value.trim()
    if (!t) return
    onAdd(t)
    setValue('')
    }

    return (
    <IonCard>
        <IonCardHeader>
        <IonCardTitle>Nueva tarea</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
        <IonItem lines="inset">
            <IonLabel position="stacked">Título</IonLabel>
            <IonInput
            value={value}
            placeholder="Ej: Estudiar Ionic"
            onIonInput={e => setValue(e.detail.value ?? '')}
            />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={handleAdd}>
            Agregar
        </IonButton>
        </IonCardContent>
    </IonCard>
    )
}

export default TaskForm