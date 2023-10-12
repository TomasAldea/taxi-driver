import React from "react";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const scrollToSection = (sectionId, extraPx = 0) => {
    var element = document.getElementById(sectionId);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y - extraPx,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setOpenNav(false);
      }, 800);
    }

  };

  const navList = (
    <ul 
    className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal cursor-pointer"
      >
        <div
          className="flex items-center"
          onClick={() => {
            scrollToSection("inicio");
          }}        >
          Inicio
        </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal cursor-pointer"
      >
        <div
          className="flex items-center"
          onClick={() => {
            scrollToSection("servicios");
          }}    
        >
          Servicios
        </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal cursor-pointer"
      >
        <div
          className="flex items-center"
          onClick={() => {
            scrollToSection("testimonios");
          }}    
        >
          Testimonios
        </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal cursor-pointer"
      >
        <div
          className="flex items-center"
          onClick={() => {
            scrollToSection("presupuesto", 220);
          }}    
        >
          Presupuesto
        </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal cursor-pointer"
      >
        <div
          className="flex items-center"
          onClick={() => {
            scrollToSection("quien-soy");
          }}  
        >
          Quien soy
        </div>
      </Typography>
    </ul>
  );

  return (
    <Navbar 
    data-aos-delay="300"
    className="fixed top-0 left-0 right-0 bg-white z-10 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4
     mb:w-full mb:rounded-t-none
    ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img src="images/logobig.png" alt="" className=" w-16"/>
        <div className="hidden lg:block">{navList}</div>
        <a href="tel:+34649713682" aria-label="llamar ya">
          <Button
            aria-label="llamar ya"
            variant="gradient"
            size="sm"
            className=" bg-sabagreen-50 bg-none hidden lg:inline-block"
          >
            <span>Llamar ya</span>
          </Button>
        </a>
        <IconButton
          aria-label="Botón para expandir o contraer el contenido"
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse 
      open={openNav}>
        <div className="container mx-auto">
          {navList}
          <a href="/vcf/taxiandreu.vcf" download="taxiandreu.vcf" aria-label="Botón para añadir teléfono a la agenda">
            <Button
              aria-label="BoBotón para añadir teléfono a la agenda"
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2 bg-sabagreen-50 bg-none"
            >
              <span>Añadir contacto</span>
            </Button>
          </a>
        </div>
      </Collapse>
    </Navbar>
  );
}
