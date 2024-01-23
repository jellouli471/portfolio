import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="forpc">
        <div className="logo">
          <h1>Abdo.dev</h1>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </div>
        <div className="icon-soc">
          <a href="https://github.com/jellouli471">
            <i className="fa-brands fa-github"></i>
          </a>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div className="header-forph">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="menu-links">
          <div className="menulink">
            <div className="men">
              <i className="menudo fa-solid fa-bars"></i>
            </div>

            <div className="men-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Testimonials</a>
              <a href="#">Contact</a>
              <div className="icons-mob">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*for mobile    
      <div className="menu">
        <i className="menudo fa-solid fa-bars"></i>
        <div className="links-logo">
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Work</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
            <div className="icons-mob">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          </div>
          
        </div>
      </div>*/}
    </header>
  );
}
