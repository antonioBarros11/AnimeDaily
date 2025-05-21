export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 w-full ">
      <div className=" mx-auto flex flex-col items-center md:items-start text-center md:text-left md:flex-row justify-evenly gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/LogoFooter.png"
            alt="AnimeDaily Logo"
            className="mb-2 w-60"
          />
        </div>

        <div className="flex flex-col space-y-1 items-center md:items-start">
          <h5 className="font-bold">Conecta con nosotros</h5>
          <p>Discord</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>

        <div className="flex flex-col  space-y-1 items-center md:items-start">
          <h3 className="font-bold">Extra</h3>
          <p>Acerca</p>
          <p>Términos de Uso</p>
          <p>Política de Privacidad</p>
        </div>
      </div>
    </footer>
  );
}
