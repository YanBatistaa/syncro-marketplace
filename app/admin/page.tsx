import AdminDashboard from '@/components/AdminDashboard'
import Header from '@/components/Header'

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Header />
      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-white tracking-tight">Painel Administrativo</h1>
            <p className="text-text-secondary mt-2 text-sm">Gerencie os templates da biblioteca. Alterações são salvas localmente no navegador (localStorage) para este MVP.</p>
          </div>
          <AdminDashboard />
        </div>
      </main>
    </div>
  )
}
