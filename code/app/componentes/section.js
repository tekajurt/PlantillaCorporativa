const Section = ({ id, className = '', children }) => {
  // Si no quieres min-h-screen en todas las secciones, cámbialo por min-h-[...] o quítalo aquí.
  return (
    <div
      {...(id ? { id } : {})}
      className={`flex flex-col gap-6 w-full min-h-[60vh] py-12 justify-center items-center relative ${className}`}
    >
      <div className="w-full max-w-6xl mx-auto px-4">{children}</div>
    </div>
  );
};
export default Section;
