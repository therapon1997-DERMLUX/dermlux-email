import { Component } from 'react'

// Catches any JS error in the tree below and shows a friendly screen
// instead of a blank white page.
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center space-y-4">
            <div className="text-4xl">😵</div>
            <h1 className="text-lg font-bold text-gray-800">Κάτι πήγε στραβά</h1>
            <p className="text-sm text-gray-500">
              Παρουσιάστηκε απρόσμενο σφάλμα. Πάτησε το κουμπί για επαναφόρτωση —
              τα δεδομένα σου είναι ασφαλή.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              🔄 Επαναφόρτωση
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
