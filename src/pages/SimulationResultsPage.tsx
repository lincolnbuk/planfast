import {
  ArrowRight,
  CalendarClock,
  CreditCardIcon,
  Goal,
  Landmark,
  PiggyBank,
  Wallet,
} from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { PageHero } from "../components/shared/PageHero";
import { Card } from "../components/features/SimulationResults/Card";
import type { SimulationFormData } from "../data/simulation";
import { useSimulationStorage } from "../hooks/useSimulationStorage";
import { formatCurrency, parseCurrency } from "../utils/currency";
import { calcMonthlySavings } from "../utils/simulation";

const mock: SimulationFormData = {
  income: "R$ 5.000,00",
  expenses: "R$ 2.000,00",
  debts: "R$ 500,00",
  goalName: "Viagem para o Japão",
  goalAmount: "R$ 15.000,00",
  goalDeadline: "12",
};

export function SimulationResultsPage() {
  const navigate = useNavigate();
  const { getSavedFormData } = useSimulationStorage();
  const savedSimulations = useMemo(
    () => getSavedFormData(),
    [getSavedFormData],
  );
  const data = savedSimulations[0] ?? mock;
  const monthlySavings = calcMonthlySavings(data);
  const goalAmount = parseCurrency(data.goalAmount);
  const monthsToGoal =
    monthlySavings > 0 ? Math.ceil(goalAmount / monthlySavings) : null;
  const monthlySavingsLabel = formatCurrency(monthlySavings);
  const incomeLabel = formatCurrency(parseCurrency(data.income));
  const expensesLabel = formatCurrency(parseCurrency(data.expenses));
  const debtsLabel = formatCurrency(parseCurrency(data.debts));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <button
        type="button"
        onClick={() => navigate("/historico")}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-primary transition hover:opacity-80"
      >
        Ver histórico
        <ArrowRight size={16} />
      </button>

      <PageHero
        title="Resultado da sua simulação"
        subtitle="Com base no seu perfil financeiro e objetivos."
      />

      <div className="mb-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Insight estratégico
            </p>
            <p className="text-sm text-muted-foreground">
              Com uma economia mensal de <strong>{monthlySavingsLabel}</strong>,{" "}
              {monthsToGoal
                ? `você poderá atingir ${data.goalName} em cerca de ${monthsToGoal} meses.`
                : "ainda é preciso ajustar o plano para chegar até a meta."}
            </p>
          </div>
          <div className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            {monthsToGoal ? `${monthsToGoal} meses` : "Em revisão"}
          </div>
        </div>
      </div>

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
          value={monthlySavingsLabel}
          subtitle="Valor disponível para investir"
          variant="primary"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
          <h2 className="mb-4 text-xl font-semibold">Painel de Insights</h2>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Você possui uma renda mensal de <strong>{incomeLabel}</strong> e
              gastos fixos de <strong>{expensesLabel}</strong>.
            </p>

            <p>
              Atualmente, você compromete <strong>{debtsLabel}</strong> com
              dívidas ou parcelas.
            </p>

            <p>
              Mantendo uma economia média de{" "}
              <strong>{monthlySavingsLabel}</strong> por mês, será possível
              alcançar o objetivo "<strong>{data.goalName}</strong>" em
              aproximadamente <strong>{data.goalDeadline} meses</strong>.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-4">
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Registros salvos
            </h3>
            <div className="space-y-3">
              {savedSimulations.length > 0 ? (
                savedSimulations.map((simulation, index) => {
                  const simulationMonthlySavings =
                    calcMonthlySavings(simulation);
                  const simulationLabel = formatCurrency(
                    simulationMonthlySavings,
                  );

                  return (
                    <div
                      key={
                        simulation.createdAt ??
                        `${simulation.goalName}-${index}`
                      }
                      className="rounded-xl border border-border/60 bg-background/70 p-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-foreground">
                          {simulation.goalName || `Meta ${index + 1}`}
                        </p>
                        <span className="text-xs text-muted-foreground">
                          {new Date(simulation.createdAt).toLocaleString(
                            "pt-BR",
                          )}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span>
                          Renda:{" "}
                          {formatCurrency(parseCurrency(simulation.income))}
                        </span>
                        <span>
                          Gastos:{" "}
                          {formatCurrency(parseCurrency(simulation.expenses))}
                        </span>
                        <span>
                          Dívidas:{" "}
                          {formatCurrency(parseCurrency(simulation.debts))}
                        </span>
                        <span>Economia: {simulationLabel}</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-muted-foreground">
                  Nenhuma simulação salva ainda.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Card
            icon={Wallet}
            label="Renda mensal"
            value={incomeLabel}
            subtitle="Renda total bruta por mês"
          />

          <Card
            icon={CreditCardIcon}
            label="Custos fixos de vida"
            value={expensesLabel}
            subtitle="Gastos essenciais por mês"
          />

          <Card
            icon={Landmark}
            label="Dívidas / Parcelas"
            value={debtsLabel}
            subtitle="Valor comprometido mensalmente"
          />
        </div>
      </div>
    </main>
  );
}
