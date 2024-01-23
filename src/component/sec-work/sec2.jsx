import "./sec2.css";
const Sec2 = () => {
  return (
    <div className="all-div-works">
      <div className="work-pr">
        <div className="title">
          <div className="smal-title">
            <p>WHAT HAVE I MADE?</p>
          </div>
          <div className="wor-title">
            <h1>Work</h1>
          </div>
        </div>
        <div className="work-cards">
        <div className="card-wor">
            <div className="image-work">
              <img src="https://i.ibb.co/gRxcj9X/react-store.png" alt="" />
            </div>
            <div className="title-links">
              <div className="titl">
                <h1>store chair</h1>
              </div>
              <div className="desc-work">
                <p>simple store </p>
              </div>
              <div className="links-project">
                <div className="git-link">
                  <a href="https://github.com/jellouli471/react-sample-site"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="link-prr">
                  <a href="https://ragged-interest.surge.sh"><i className="fa-solid fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wor">
            <div className="image-work">
              <img src="https://i.ibb.co/g4GGzYd/site-anil.png" alt="" />
            </div>
            <div className="title-links">
              <div className="titl">
                <h1>anime - api</h1>
              </div>
              <div className="desc-work">
                <p>this web site for anime work by api</p>
              </div>
              <div className="links-project">
                <div className="git-link">
                  <a href="https://github.com/jellouli471/anime-api"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="link-prr">
                  <a href="http://faithful-morning.surge.sh/"><i className="fa-solid fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
