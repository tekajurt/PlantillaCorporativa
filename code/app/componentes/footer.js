const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <p className="text-xs mt-2">Made with ❤️ by Your Name</p>
      </div>
    </footer>
  );
};
export default Footer;
