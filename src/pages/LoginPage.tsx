import { useState } from 'react'
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
} from '@ionic/react'
import { useHistory } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function LoginPage() {
  const history = useHistory()
  const { login } = useAuthContext()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    const e = email.trim()
    const p = password.trim()

    if (!e || !p) {
      setError('Completa email y contraseña')
      return
    }

    try {
      await login(e, p)
      history.push('/tasks')
    } catch (err: any) {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput
            value={email}
            type="email"
            onIonInput={ev => setEmail(ev.detail.value ?? '')}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            value={password}
            type="password"
            onIonInput={ev => setPassword(ev.detail.value ?? '')}
          />
        </IonItem>

        {error && (
          <IonText color="danger">
            <p>{error}</p>
          </IonText>
        )}

        <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
          Login
        </IonButton>

        <IonButton
          expand="block"
          fill="outline"
          onClick={() => history.push('/register')}
        >
          Create account
        </IonButton>
      </IonContent>
    </IonPage>
  )
}