import { PhoneIcon } from '@heroicons/react/24/outline'

export default function Hero() {

  const scrollToNextSection = (sectionId, extraPx = 0) => {
    var element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y - extraPx,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div id="inicio" className="bg-white">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <img src="images/taxiteslamodels.webp" alt="" className='absolute bottom-0 right-0 -z-10 mb:-bottom-16' data-aos-delay="800" data-aos-duration="400" data-aos="fade-in" data-aos-offset="0"/>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 mb:pt-8">
          <div className="mb-8 flex justify-center">
            <div 
            
            className="cursor-pointer flex flex-row w-max relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mb:flex-col mb:items-center">
              ¿Necesitas un presupuesto a medida?
              <div 
                onClick={() => scrollToNextSection('presupuesto', 220)}
                className="  ml-1 font-semibold text-sabagreen-50">
                <span className="absolute inset-0" aria-hidden="true" />
                Solicitar presupuesto <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" data-aos-delay="500" data-aos-duration="400" data-aos="fade-in" data-aos-offset="0">
              Tu Taxi de confianza
            </h1>
            <p 
            data-aos-delay="1000" data-aos-duration="600" data-aos="fade-in" data-aos-offset="0"
            className="mt-6 text-lg leading-8 text-gray-600">
            Si buscas un transporte confiable y seguro en la ciudad de Sabadell o alrededores para que te lleve a cualquier lugar de España, este es tu transporte. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                aria-label="llamar"
                data-aos-delay="500" data-aos-duration="400" data-aos="fade-in" data-aos-offset="0"
                href="tel:+34649713682"
                className="flex flex-row rounded-md bg-sabagreen-50 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sabagreen-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Llamar
                <PhoneIcon className='w-5 ml-2'/>
              </a>
              <div 
              onClick={() => scrollToNextSection('servicios')}
              data-aos-delay="500" data-aos-duration="400" data-aos="fade-in" data-aos-offset="0"
              className=" cursor-pointer flex flex-row rounded-md bg-sabagreen-50 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sabagreen-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Saber más <span className='ml-2' aria-hidden="true">→</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
    </div>
  )
}
