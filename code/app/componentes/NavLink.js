const NavLink = ({ href, children, className = "" }) => {
  return (
    <a href={href} className={`text-gray-700 hover:text-blue-600 ${className}`}>
      {children}
    </a>
  );
};

export default NavLink;
