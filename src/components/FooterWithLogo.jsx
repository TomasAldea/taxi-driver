import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function FooterWithLogo() {
  return (
    <footer className="custom-shadow w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Link to="/" aria-label="Inicio">
          <img src="images/logobig.png" alt="logo web" className=" w-16"/>
        </Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="mailto:taxiandreuf@gmail.com"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Email
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="tel:+34649713682"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Teléfono
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Taxi Andreu Sabadell
      </Typography>
    </footer>
  );
}