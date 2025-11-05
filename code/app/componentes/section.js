const section = ({ id, className, children }) => {
  return (
    <div
      id={id ? id : "none"}
      className="flex flex-col gap-2 w-full min-h-screen justify-center items-center relative"
    >
      {children}
    </div>
  );
};
export default section;
