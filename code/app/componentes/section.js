const Section = ({ id, className = "", children }) => {
  // Si no quieres min-h-screen en todas las secciones, cámbialo por min-h-[...] o quítalo aquí.
  return (
    <div
      {...(id ? { id } : {})}
      className={`flex flex-col gap-2 w-full min-h-screen justify-center items-center relative ${className}`}
    >
      {children}
    </div>
  );
};
export default Section;
