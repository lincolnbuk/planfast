import { ArrowLeft, CalendarDays, Goal, PiggyBank, Wallet } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageHero } from '../components/shared/PageHero'
import { useSimulationStorage, type SimulationHistoryItem } from '../hooks/useSimulationStorage'
import { calcMonthlySavings } from '../utils/simulation'

export function SimulationHistoryPage() {
  const navigate = useNavigate()
  const { getSavedFormData } = useSimulationStorage()
  const [history, setHistory] = useState<SimulationHistoryItem[]>(() => getSavedFormData())

  useEffect(() => {
    setHistory(getSavedFormData())
  }, [])

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-primary transition hover:opacity-80"
      >
        <ArrowLeft size={16} />
        Voltar para nova simulação
      </button>

      <PageHero
        title="Histórico de simulações"
        subtitle="Revise as metas que você organizou e acompanhe sua evolução financeira."
      />

      {history.length === 0 ? (
        <section className="rounded-2xl border border-border bg-card p-8 text-center shadow-[4px_4px_18px_0px_rgba(0,0,0,0.12)]">
          <p className="text-lg font-semibold text-foreground">
            Ainda não há simulações salvas.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Complete uma simulação para ela aparecer aqui e acompanhar sua rotina financeira.
          </p>
        </section>
      ) : (
        <div className="grid gap-4">
          {history.map((item, index) => {
            const monthlySavings = calcMonthlySavings(item)
            const createdAt = new Date(item.createdAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })

            return (
              <article
                key={`${item.createdAt}-${index}`}
                className="rounded-2xl border border-border bg-card p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.12)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Simulação #{history.length - index}</p>
                    <h2 className="text-xl font-semibold text-foreground">{item.goalName}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Criada em {createdAt}
                    </p>
                  </div>

                  <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    Economia mensal: R$ {monthlySavings.toFixed(2)}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  <div className="rounded-xl bg-background/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Wallet size={16} className="text-primary" />
                      Renda
                    </div>
                    <p className="text-sm text-muted-foreground">{item.income}</p>
                  </div>

                  <div className="rounded-xl bg-background/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CalendarDays size={16} className="text-primary" />
                      Prazo
                    </div>
                    <p className="text-sm text-muted-foreground">{item.goalDeadline} meses</p>
                  </div>

                  <div className="rounded-xl bg-background/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Goal size={16} className="text-primary" />
                      Meta
                    </div>
                    <p className="text-sm text-muted-foreground">{item.goalAmount}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-dashed border-border p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <PiggyBank size={16} className="text-primary" />
                    Resumo da simulação
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Com uma economia mensal de R$ {monthlySavings.toFixed(2)}, sua meta de {item.goalName} pode ser acompanhada com mais clareza.
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </main>
  )
}
