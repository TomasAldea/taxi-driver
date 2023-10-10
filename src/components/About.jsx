import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function About() {
  return (
    <div id="quien-soy" className="flex flex-col items-center mt-12" data-aos-duration="300" data-aos="fade-up">
      <h2 className="mt-2 mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Sobre mi
      </h2>
      <Card className="w-full flex-row mb-20 mb:flex-col">
        <CardHeader
          data-aos-duration="300" data-aos="fade-right"
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none mb:w-full mb:rounded-none"
        >
          <img
            src="images/tesla-taxi-2.webp"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody 
        data-aos-duration="300" data-aos="fade-left"
        className="flex flex-col justify-evenly">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Mi nombre es Andreu y tengo 30 años
          </Typography>
          <Typography color="gray" className="font-normal">
            De familia taxista, busco evolucionar la experiencia de transporte
            aportando nuevas ideas adaptadas a nuevas generaciones.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
