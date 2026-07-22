import {
  CalendarClock,
  CreditCardIcon,
  Goal,
  Landmark,
  PiggyBank,
  Wallet,
} from 'lucide-react'

import { PageHero } from '../components/shared/PageHero'
import { Card } from '../components/features/SimulationResults/Card'
import type { SimulationFormData } from '../data/simulation'
import { calcMonthlySavings } from '../utils/simulation'

const mock: SimulationFormData = {
  income: 'R$ 5.000,00',
  expenses: 'R$ 2.000,00',
  debts: 'R$ 500,00',
  goalName: 'Viagem para o Japão',
  goalAmount: 'R$ 15.000,00',
  goalDeadline: '12',
}

export function SimulationResultsPage() {
  const data: SimulationFormData = mock
  const monthlySavings = calcMonthlySavings(data)

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Resultado da sua simulação"
        subtitle="Com base no seu perfil financeiro e objetivos."
      />

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card
          icon={CalendarClock}
          label="Prazo"
          value={`${data.goalDeadline} meses`}
          subtitle="Prazo para atingir a meta"
        />

        <Card
          icon={Goal}
          label="Objetivo"
          value={data.goalName}
          subtitle="Meta financeira definida"
        />

        <Card
          icon={PiggyBank}
          label="Economia mensal"
          value={`R$ ${monthlySavings.toFixed(2)}`}
          subtitle="Valor disponível para investir"
          variant="primary"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
          <h2 className="mb-4 text-xl font-semibold">
            Painel de Insights
          </h2>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Você possui uma renda mensal de <strong>{data.income}</strong> e
              gastos fixos de <strong>{data.expenses}</strong>.
            </p>

            <p>
              Atualmente, você compromete{' '}
              <strong>{data.debts}</strong> com dívidas ou parcelas.
            </p>

            <p>
              Mantendo uma economia média de{' '}
              <strong>R$ {monthlySavings.toFixed(2)}</strong> por mês, será
              possível alcançar o objetivo "<strong>{data.goalName}</strong>"
              em aproximadamente <strong>{data.goalDeadline} meses</strong>.
            </p>
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Card
            icon={Wallet}
            label="Renda mensal"
            value={data.income}
            subtitle="Renda total bruta por mês"
          />

          <Card
            icon={CreditCardIcon}
            label="Custos fixos de vida"
            value={data.expenses}
            subtitle="Gastos essenciais por mês"
          />

          <Card
            icon={Landmark}
            label="Dívidas / Parcelas"
            value={data.debts}
            subtitle="Valor comprometido mensalmente"
          />
        </div>
      </div>
    </main>
  )
}