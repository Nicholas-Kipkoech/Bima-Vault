import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login.tsx'
import ErrorPage from './pages/error/error-page.tsx'
import App from './App.tsx'
import Layout from './pages/Layout.tsx'
import Tasks from './pages/tasks/Tasks.tsx'
import DocumentViewer from './pages/document-viewer/DocumentViewer.tsx'
import Calendar from './pages/calendar/Calendar.tsx'
import MyPerfomance from './pages/perfomance/MyPerfomance.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/tasks',
    element: (
      <Layout>
        <Tasks />
      </Layout>
    ),
  },
  {
    path: '/document-viewer',
    element: (
      <Layout>
        <DocumentViewer />
      </Layout>
    ),
  },
  {
    path: '/calendar',
    element: (
      <Layout>
        <Calendar />
      </Layout>
    ),
  },
  {
    path: '/perfomance',
    element: (
      <Layout>
        <MyPerfomance />
      </Layout>
    ),
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
