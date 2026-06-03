import PiggyBankImage from '../../../assets/images/gold-piggy-bank.jpg'

export function SimulationHero() {
  return (
    <div className="mb-8 text-center">
      <div className="flex flex-col items-center sm:flex-row">
        <h1 className="text-foreground text-3xl font-semibold sm:text-4xl">
          Vamos Planejar o Seu Futuro Financeiro?
        </h1>

        <img
          src={PiggyBankImage}
          alt=""
          aria-hidden="true"
          className="h-16 w-16 sm:-mt-2 sm:-ml-3"
        />
      </div>

      <p className="text-muted-foreground text-sm">
        Responda algumas perguntas para que possamos criar um plano financeiro
        personalizado para você.
      </p>
    </div>
  )
}