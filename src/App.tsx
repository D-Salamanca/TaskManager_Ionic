import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TasksListPage from './pages/TasksListPage'
import TaskFormPage from './pages/TaskFormPage'
import TaskDetailPage from './pages/TaskDetailPage'
import ProtectedRoute from './ProtectedRoute'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        {/* Rutas públicas */}
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/register">
          <RegisterPage />
        </Route>

        {/* Rutas protegidas */}
        <ProtectedRoute exact path="/tasks">
          <TasksListPage />
        </ProtectedRoute>

        <ProtectedRoute exact path="/tasks/create">
          <TaskFormPage />
        </ProtectedRoute>

        <ProtectedRoute exact path="/tasks/edit/:id">
          <TaskFormPage />
        </ProtectedRoute>

        <ProtectedRoute exact path="/tasks/detail/:id">
          <TaskDetailPage />
        </ProtectedRoute>

        {/* Entrada por defecto */}
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App