import {
    Card,
    Input,
    Checkbox,
    Textarea,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function SimpleRegistrationForm() {
    return (
      <Card id="presupuesto" className="mt-5 mb-8 items-center mb:px-8" color="transparent" shadow={false}>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Presupuesto a medida
        </h2>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Enviame un email con todas tus dudas y te <br></br> enviaré un presupuesto adaptado a tus necesidades
        </Typography>
        <form className="mt-8 mb-2 xl:w-1/2 mb:w-full">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Nombre y Apellidos" />
            <Input size="lg" label="Email" />
            <Input type="number" size="lg" label="Teléfono" />
            <Input size="lg" label="Origen" />
            <Input size="lg" label="Destino" />
            <Textarea type="password" size="lg" label="¿Tienes alguna duda?" />
          </div>
          {/* <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          /> */}
          <Button className="mt-6 bg-sabagreen-50" fullWidth>
            Enviar
          </Button>
        </form>
      </Card>
    );
  }