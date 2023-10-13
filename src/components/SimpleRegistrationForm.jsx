import {
  Card,
  Input,
  Checkbox,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import LocationInput from "./LocationInput";

export function SimpleRegistrationForm() {
  return (
    <Card
      id="presupuesto"
      className="mt-5 mb-8 items-center mb:px-8"
      color="transparent"
      shadow={false}
      data-aos-duration="300"
      data-aos="fade-up"
    >
      <h2 className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Presupuesto a medida
      </h2>
      <Typography
        color="gray"
        className="mt-1 font-normal text-center max-w-md"
      >
        Envíame un email con todas tus dudas y te enviaré un presupuesto
        adaptado a tus necesidades
      </Typography>
      <form className="mt-8 mb-2 xl:w-1/2 mb:w-full">
        <div className="mb-4 flex flex-col gap-6">
          <Input id="nombre" name="nombre" labelProps={{ htmlFor: "nombre" }} aria-label="nombre" size="lg" label="Nombre y Apellidos" className="shadow-xl bg-white"/>
          <Input id="email" name="email" labelProps={{ htmlFor: "email" }} aria-label="email" size="lg" label="Email" className="shadow-xl bg-white" />
          <Input
            id="telefono"
            aria-label="telefono"
            name="telefono" labelProps={{ htmlFor: "telefono" }}
            type="number"
            size="lg"
            label="Teléfono"
            className="shadow-xl bg-white"
          />
          <LocationInput />
          <Typography className="font-medium text-sabagreen-50 text-center mt-5">
            ¿Tienes dudas adicionales? <br /> ¿No encuentras el destino en la
            lista? <br /> Escríbeme y te responderé lo antes posible.
          </Typography>
          <Textarea
            id="comentario"
            aria-label="comentario"
            name="comentario" labelProps={{ htmlFor: "comentario" }}
            type="textarea"
            size="lg"
            label="Comentarios"
            className="shadow-xl bg-white"
          />
        </div>
        <Button className="mt-6 bg-sabagreen-50" fullWidth aria-label="Botón para enviar formulario de presupuesto.">
          Enviar
        </Button>
      </form>
    </Card>
  );
}
