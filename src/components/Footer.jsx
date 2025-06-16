const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-400">Terms</a>
          <a href="#" className="hover:text-blue-400">Privacy</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;