import React from "react";
/* import { ArrowLeftIcon } from '@heroicons/react/24/outline' */

export const PrivacyPage = () => {

  window.scrollTo(0, 0);


  return (
    <section id="privacyPage" className="container mx-auto px-10 mb:px-5 pt-4 pb-10">
      {/* <button aria-label="Boton para ir a la página anterior" onClick={handleGoBack} className="flex flex-row align-middle cursor-pointer">
        <ArrowLeftIcon className="h-6 w-6 mr-2"/> Volver
      </button> */}
      <h1 className="text-2xl font-bold my-4">Aviso de Privacidad</h1>
      <p className="text-gray-800 my-4">
        Este aviso de privacidad describe cómo Taxi Andreu Sabadell recopila,
        utiliza y protege la información personal que proporcionas al utilizar
        nuestro formulario de solicitud de presupuesto. Tu privacidad es
        importante para nosotros, y estamos comprometidos a proteger tus datos
        personales.
      </p>
      <ol className="list-decimal list-inside text-gray-800 my-4 ml-6">
        <li className="mb-5">
          <p className="underline underline-offset-4">Información recopilada</p>
          <p>
            Al utilizar nuestro formulario de solicitud de presupuesto, podemos
            recopilar la siguiente información personal:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>Nombre y apellidos</li>
            <li>Número de teléfono</li>
            <li>Correo electrónico</li>
          </ul>
        </li>
        <li className="mb-5">
          <p className="underline underline-offset-4">Uso de la información</p>
          <p>
            La información personal recopilada se utiliza exclusivamente para el
            propósito de generar un presupuesto personalizado y responder a tus
            solicitudes. No compartiremos ni venderemos tu información a
            terceros sin tu consentimiento expreso.
          </p>
        </li>
        <li className="mb-5">
          <p className="underline underline-offset-4">Protección de la información</p>
          <p>
            Tomamos medidas razonables para proteger tus datos personales contra
            accesos no autorizados, divulgación, alteración o destrucción. Solo
            las personas autorizadas tienen acceso a la información que
            proporcionas.
          </p>
        </li>
        <li className="mb-5">
          <p className="underline underline-offset-4">Consentimiento</p>
          <p>
            Al proporcionar tu información a través de nuestro formulario,
            aceptas la recopilación y el uso de tus datos personales según lo
            descrito en este aviso de privacidad.
          </p>
        </li>
        <li className="mb-5">
          <p className="underline underline-offset-4">Acceso y corrección</p>
          <p>
            Tienes el derecho de acceder, actualizar o corregir la información
            personal que nos proporcionas. Si deseas ejercer este derecho,
            comunícate con nosotros a través de la información de contacto
            proporcionada a continuación.
          </p>
        </li>
        <li className="mb-5">
          <p className="underline underline-offset-4">Cambios en el aviso de privacidad</p>
          <p>
            Nos reservamos el derecho de actualizar este aviso de privacidad en
            el futuro para reflejar cambios en nuestras prácticas de
            recopilación y uso de datos. Cualquier cambio se publicará en
            nuestro sitio web.
          </p>
        </li>
        <li className="mb-5">
          <p className="underline underline-offset-4">Contacto</p>
          <p>
            Si tienes preguntas o inquietudes relacionadas con este aviso de
            privacidad o el uso de tus datos personales, comunícate con nosotros
            a través de los siguientes medios de contacto:
          </p>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Taxi Andreu Sabadell</li>
            <li>Sabadell</li>

            <li>
              <a href="tel:+34649713682">+34 649 713 682</a>
            </li>
            <li>
              <a href="mailto:taxiandreuf@gmail.com">taxiandreuf@gmail.com</a>
            </li>
          </ul>
        </li>
      </ol>
      <p className="text-gray-800 my-4">
        Fecha de última actualización: 15/10/2023
      </p>
      <p className="text-gray-800 my-4">
        Al proporcionar tus datos a través del formulario, confirmas que has
        leído y aceptado este aviso de privacidad. Tu consentimiento es esencial
        para procesar tu solicitud de presupuesto.
      </p>
    </section>
  );
};
