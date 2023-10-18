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
    <section id="inicio" className="bg-sabablue-1">

      <div className="relative isolate px-6 pt-20 min-h-screen lg:px-8 tb:min-h-[50%]">
        <div className="mx-auto max-w-2xl flex flex-col mt-24 tb:mt-20 mb:!mt-0">
          <div className="mb-8 flex justify-start tb:justify-center">
            <div 
            className=" h-full cursor-pointer flex flex-row w-max relative rounded-full px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mb:flex-col mb:items-center">
              ¿Necesitas un presupuesto a medida?
              <div 
                onClick={() => scrollToNextSection('presupuesto', 220)}
                className="  ml-1 font-semibold text-sabagreen-50">
                <span className="absolute inset-0" aria-hidden="true" />
                Solicitar presupuesto <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </div>
          <div className="text-start tb:text-center">
            <h1 className="text-4xl font-bold tracking-tight mt-6 mb-10 text-gray-900 tb:mt-0 tb:mb-0 sm:text-6xl">
              Tu Taxi de confianza
            </h1>
            <p 
            className="mt-6 text-lg leading-8 text-gray-600">
            Si buscas un transporte confiable y seguro en la ciudad de Sabadell o alrededores para que te lleve a cualquier lugar de España, este es tu transporte. 
            </p>
            <div className="mt-10 flex items-center justify-start tb:justify-center gap-x-6">
              <a
                aria-label="llamar"
                href="tel:+34649713682"
                className="flex flex-row rounded-md bg-sabagreen-50 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sabagreen-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Llamar
                <PhoneIcon className='w-5 ml-2'/>
              </a>
              <div 
              onClick={() => scrollToNextSection('servicios')}
              className=" cursor-pointer flex flex-row rounded-md bg-sabagreen-50 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sabagreen-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Saber más <span className='ml-2' aria-hidden="true">→</span>
              </div>
            </div>
          </div>
        <img src="images/taxihero.webp" alt="imagen taxi" width="348" height="251" className='imagen-scale mt-6 mx-auto !w-64 hidden tb:block'/>
        <img src="images/taxihero.webp" alt="imagen taxi" width="256" height="167" className='imagen-scale mt-6 mx-auto !w-96 tb:hidden absolute right-52 bottom-56'/>
        </div>
      </div>
    </section>
  )
}
