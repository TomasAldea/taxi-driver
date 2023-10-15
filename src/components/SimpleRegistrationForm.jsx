import {
  Card,
  Input,
  Checkbox,
  Textarea,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import LocationInput from "./LocationInput";
import { send } from "emailjs-com";
import { useEffect, useState } from "react";

export function SimpleRegistrationForm() {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successSend, setSuccessSend] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentario: "",
  });

  /* useEffect(() => {
    sendEmail();
    console.log(formData);
  }, [submit]); */

  const sendEmail = () => {
    setTimeout(() => {
      console.log("bingo!");
      setSuccessSend(true);
      setLoading(false);

      var element = document.getElementById('presupuesto');
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y - 220,
        behavior: 'smooth'
      });
    }, 1500);
    return;
    send(
      "service_35chdfk", // service id
      "template_0rm34bh", // template id
      formData,
      "9iD__X8bPeR42obVK" // user id
    )
      .then((response) => {
        setSuccessSend(true);
        setLoading(false);

        var element = document.getElementById('presupuesto');
        const y = element.getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: y - 220,
          behavior: 'smooth'
        });

      })
      .catch((err) => {
        setSuccessSend(false);
        setLoading(false);
        console.log("FAILED...", err);
      });
  };

  const getInputValueById = (inputId) => {
    const inputElement = document.querySelector(`#${inputId}`);
    if (inputElement) {
      return inputElement.value;
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const destinoValue = getInputValueById("destino");
    const origenValue = getInputValueById("origen");

    setFormData({
      ...formData,
      destinoValue,
      origenValue,
    });

    setSubmit(true);

    sendEmail();
  };

  return (
    <Card
      id="presupuesto"
      className="mt-5 mb-8 items-center mb:px-8"
      color="transparent"
      shadow={false}
    >
      <h2 className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Presupuesto a medida
      </h2>

      {!successSend ? (
        <>
          <Typography
            color="gray"
            className="mt-1 font-normal text-center max-w-md"
          >
            Envíame un email con todas tus dudas y te enviaré un presupuesto
            adaptado a tus necesidades
          </Typography>
          <form
            className={`mt-8 mb-2 xl:w-1/2 mb:w-full ${
              loading ? "loading" : ""
            }`}
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                required
                id="nombre"
                name="nombre"
                labelProps={{ htmlFor: "nombre" }}
                aria-label="nombre"
                size="lg"
                label="Nombre y Apellidos"
                className="shadow-xl bg-white"
                value={formData.nombre}
                onChange={handleInputChange}
              />
              <Input
                required
                id="email"
                name="email"
                labelProps={{ htmlFor: "email" }}
                aria-label="email"
                size="lg"
                label="Email"
                className="shadow-xl bg-white"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                required
                id="telefono"
                aria-label="telefono"
                name="telefono"
                labelProps={{ htmlFor: "telefono" }}
                type="number"
                size="lg"
                label="Teléfono"
                className="shadow-xl bg-white"
                value={formData.telefono}
                onChange={handleInputChange}
              />
              <LocationInput />
              <Typography className="font-medium text-sabagreen-50 text-center mt-5">
                ¿Tienes dudas adicionales? <br /> ¿No encuentras el destino en
                la lista? <br /> Escríbeme y te responderé lo antes posible.
              </Typography>
              <Textarea
                id="comentario"
                aria-label="comentario"
                name="comentario"
                labelProps={{ htmlFor: "comentario" }}
                type="textarea"
                size="lg"
                label="Comentarios"
                className="shadow-xl bg-white"
                value={formData.comentario}
                onChange={handleInputChange}
              />
              <div className="flex flex-row align-middle items-center">
                <Checkbox
                  required
                  aria-label="consentimiento"
                  name="consentimiento"
                  labelProps={{ htmlFor: "consentimiento" }}
                ></Checkbox>
                <div>
                  Acepto la{" "}
                  <Link
                    to="/privacidad"
                    target="_blank"
                    className="underline underline-offset-4"
                    aria-label="Enlace a Regulación de privacidad"
                  >
                    Regulación de privacidad
                  </Link>
                </div>
              </div>
            </div>

            <Button
              className="mt-6 bg-sabagreen-50 flex justify-center"
              fullWidth
              aria-label="Botón para enviar formulario de presupuesto."
              type="submit"
            >
              {!loading ? "Enviar" : <Spinner />}
            </Button>
          </form>
        </>
      ) : (
        <div className=" text-center text-lg leading-8 text-gray-600 mt-8">
          Tu solicitud ha sido enviada con éxito, en breve recibirás respuesta
          por mi parte, vía telefonía o a través del email proporcionado. <br/>
          Grácias por confiar en Taxi Andreu.
        </div>
      )}
    </Card>
  );
}
