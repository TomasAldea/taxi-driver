import { ClockIcon, CloudArrowUpIcon, FingerPrintIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Servicios a medida',
    description:
      'Indica cuales són tus necesidades y me apdataré a ellas.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'All-in',
    description:
      'Servicio de ida y vuelta a aeropuerto.',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Disponible todos los días',
    description:
      'Disponibilidad todos los días de la semana.',
    icon: ClockIcon,
  },
  {
    name: 'Transporte urgente a hospitales',
    description:
      'Transporte a hospitales con opcion de espera.',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <section id="servicios" className="aos bg-sabablue-1 py-24 sm:py-32 mb:pb-6" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sabagreen-50">Servicio 24h</h2>
          <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <div>Tu servicio de transporte de confiaza</div>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Soy un taxista autónomo, que trabaja con su propia base de clientes, basados en la confianza y seguridad.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 shadow-2xl p-4 rounded-lg bg-white  min-w-[13px]">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-4 top-5 flex h-10 w-10 items-center justify-center rounded-lg bg-sabagreen-50">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-800">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
