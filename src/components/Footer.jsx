const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <p>© Schroeder Zine {currentYear}</p>
      </footer>
    );
  };
  
  export default Footer;