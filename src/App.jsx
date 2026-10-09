import "./App.css";
import Noise from "./components/Noise";

function App() {
  return (
    <>
      <Noise opacity={0.2} size={1} scanlines={0.35} />

      <main className="page-shell">
        <section id="body">
          <span className="project-tag">1 projects • indexed</span>
          <h1>PROJECTS</h1>
        </section>
      </main>
    </>
  );
}

export default App;
