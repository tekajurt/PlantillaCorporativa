const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Escuela de Carnaval Arcoíris. Todos los derechos
          reservados.
        </p>
        <p className="text-xs mt-2">
          Contacto:{' '}
          <a href="mailto:info@carnaval-arcoiris.org" className="underline">
            info@carnaval-arcoiris.org
          </a>
        </p>
        <div className="mt-3 flex justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-400"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-400"
          >
            Facebook
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-red-400"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
