import "./Home.css";

import Noise from "../../libs/components/Noise";

function Home() {
  return (
    <>
      <Noise
        opacity={0.02}
        size={1}
        fps={60}
        blendMode="normal"
        contrast={0}
        colored={false}
        dust={0}
        scratches={0}
        scanlines={0.8}
        flicker={0}
      />
      <main className="container">
        <div className="content">
          <div className="header">
            <div>
              <h1 className="title">
                <span class="title-char">M</span>
                <span class="title-char">o</span>
                <span class="title-char">t</span>
                <span class="title-char">a</span>
              </h1>
            </div>
            <div className="links-container">
              <nav className="nav">

                <a href="#projects" className="link link-container">
                  <span className="link-symbol">&gt;</span>
                  
                  <span>
                  Projects

                  </span>
                </a>
                <a href="#projects" className="link link-container">
                  <span className="link-symbol">&gt;</span>
                  
                  <span>
                  About

                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="soft-horizon twin-clean" aria-hidden="true">
            <span class="beam beam-a"></span>
          </div>
          <div className="subtitle-container">
            <p className="subtitle">Desenvolvedor Web</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
