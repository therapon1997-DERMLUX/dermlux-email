import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import Login from './components/Login'
import Navbar from './components/Navbar'
import ErrorBoundary from './components/ErrorBoundary'

const EmailMarketing  = lazy(() => import('./components/email/EmailMarketing'))
const UnsubscribePage = lazy(() => import('./components/email/UnsubscribePage'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="text-blue-600 text-sm font-medium animate-pulse">Φόρτωση…</div>
    </div>
  )
}

// Only admin or marketer may use the email tool. Everyone else is bounced to login.
function EmailRoute({ children }) {
  const { currentUser, isAdmin, isMarketer } = useAuth()
  if (!currentUser) return <Navigate to="/login" replace />
  if (!isAdmin && !isMarketer) {
    return (
      <div className="max-w-md mx-auto mt-24 text-center px-6">
        <p className="text-lg font-semibold text-gray-900">Δεν έχετε πρόσβαση</p>
        <p className="text-sm text-gray-500 mt-2">Ο λογαριασμός σας δεν έχει δικαίωμα email marketing.</p>
      </div>
    )
  }
  return children
}

export default function App() {
  const { currentUser } = useAuth()
  const location = useLocation()
  const isPublicPage = location.pathname === '/unsubscribe'

  return (
    <div className="min-h-screen flex flex-col">
      {currentUser && !isPublicPage && <Navbar />}
      <main className="flex-1">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <div key={location.pathname} className="route-fade">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/email" element={<EmailRoute><EmailMarketing /></EmailRoute>} />
                <Route path="/unsubscribe" element={<UnsubscribePage />} />
                <Route path="/" element={<Navigate to="/email" replace />} />
                <Route path="*" element={<Navigate to="/email" replace />} />
              </Routes>
            </div>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}
