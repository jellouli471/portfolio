/* eslint-disable react/no-unescaped-entities */
import './sec1.css'


const Sec1 = () => {
  return (
    <div className='testforvh'>
    <div className='hello-imag'>
      <div className="hello">
        <div className="title">
        <h3>front-end developer</h3>
        </div>
        <div className="sy-hello">
          <h1>Hi! &#128075; <span>I'm Abdellah Jellouli</span></h1>
        </div>
        <div className="short-title">
          <p>I'm front end developer  living with in Morocco, Larache.</p>
        </div>
        <div className="butuns">
          <div className="see-my-work">
            <button>See my work</button>
          </div>
          <div className="get-in">
            <button>Get in touch</button>
          </div>
        </div>
      </div>
      <div className="imag">
        <img src="https://i.ibb.co/99znNt4/bacim.png" alt="" />
      </div>

    </div>
    <div className="list-skils">
      <div className="title-skils">
        <div className="min-tit">
          <p>WHAT CAN DO?</p>
        </div>
        <div className="har-tit">
          <h1>Skills</h1>
        </div>
      </div>
      <div className="icons-skuu">
      <div className="html-icons">
      <i className="fa-brands fa-html5"></i>
      </div>
      <div className="css-icons">
      <i className="fa-brands fa-css3"></i>
      </div>
      <div className="js-icons">
      <i className="fa-brands fa-square-js"></i>
      </div>
      <div className="react-icons">
      <i className="fa-brands fa-react"></i>
      </div>
      <div className="nodjs-icons">
      <i className="fa-brands fa-node"></i>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Sec1;
