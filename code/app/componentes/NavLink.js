const NavLink = ({ href, children, className = '' }) => {
  return (
    <a href={href} className={`text-foreground hover:text-primary ${className}`}>
      {children}
    </a>
  );
};

export default NavLink;
