import "./Hologram.css";
import databaseImage from "../../../assets/images/hologramIcons/data.png";
import databaseZapImage from "../../../assets/images/hologramIcons/web.png";

const hologramList = [
  {
    tipo: "Web",
    titulo: "WebServices",
    logo: databaseZapImage,
  },
  {
    tipo: "Data",
    titulo: "Data",
    logo: databaseImage,
  },
];

export default function Hologram({ tipo }) {
  const hologram = hologramList.find((item) => item.tipo === tipo);

  if (!hologram) {
    return null;
  }

  return (
    <div className="hologram-container">
      <div className="hologram-line">
        <span className="corner corner-top-left"></span>
        <span className="corner corner-top-right"></span>
        <span className="corner corner-bottom-left"></span>
        <span className="corner corner-bottom-right"></span>

        <div className="hologram-content">
          <div className="hologram-logo">
            <img className="hologram-logo-img" src={hologram.logo} alt={hologram.titulo} />
          
          </div>
          <div className="hologram-title">
            <span>{hologram.titulo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
