import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { Navigation, Rocket, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Client-side TanStack Router
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Frontend is now running in SPA mode only
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            TanStack Start server features and SSR demo routes have been removed.
            This app uses the client-only TanStack Router setup.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={<Navigation className="w-8 h-8 text-cyan-400" />}
            title="File-based routes"
            description="Routes are generated from files in src/routes."
          />
          <Card
            icon={<Rocket className="w-8 h-8 text-cyan-400" />}
            title="Client-only app"
            description="No server handlers or SSR route settings."
          />
          <Card
            icon={<Sparkles className="w-8 h-8 text-cyan-400" />}
            title="React Compiler on"
            description="Compiler is enabled in the Vite React plugin."
          />
        </div>
      </section>
    </div>
  )
}

function Card({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}
