import { useAuth } from '../contexts/AuthContext'

export default function Navbar() {
  const { currentUser, userProfile, logout } = useAuth()
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <span className="text-lg">📧</span>
          <span className="font-semibold tracking-wide">DermLux Email Marketing</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-300 hidden sm:inline">
            {userProfile?.displayName || currentUser?.email}
          </span>
          <button
            onClick={logout}
            className="text-sm px-3 py-1.5 rounded-lg border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-colors"
          >
            Έξοδος
          </button>
        </div>
      </div>
    </nav>
  )
}
