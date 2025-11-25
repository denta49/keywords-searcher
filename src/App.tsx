import LegacyTable from './LegacyTable'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Senuto - Keyword Analytics
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Enterprise Dashboard (Recruitment Task)
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow">
          <LegacyTable />
        </div>
      </main>
    </div>
  )
}

export default App

