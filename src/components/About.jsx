import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function About() {
  return (
    <section id="quien-soy" className="aos flex flex-col items-center mt-12 mb:w-ful mb:p-8">
      <div className="mt-2 mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
       <h2>Sobre mi</h2>
      </div>
      <Card className="w-full flex-row mb-20 mb:flex-col">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none mb:w-full mb:rounded-b-none mb:rounded-t-xl"
        >
          <img
            src="images/taxisobremi.webp"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody 
        className="flex flex-col justify-evenly">
          <Typography color="blue-gray" className="mb-2 font-semibold text-lg">
            Mi nombre es Andreu y tengo 30 años
          </Typography>
          <Typography color="gray" className="font-normal">
            De familia taxista, busco evolucionar la experiencia de transporte
            aportando nuevas ideas adaptadas a nuevas generaciones.
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
}
