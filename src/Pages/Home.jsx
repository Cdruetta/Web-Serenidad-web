import React from 'react';
import '/src/styles/Home.css'; // Importa el archivo de estilos

export const Home = () => {
  return (
    <div>
      {/* Título principal */}
      <h2 className="home-title">
      Descubre aromas naturales para llenar tu espacio de paz y bienestar!
      </h2>

      {/* Sección de beneficios */}
      <section id="benefits" className="benefits-section">
      <h2 className="heading">Por qué elegir nuestros aromas</h2>

        <div className="benefits-container">
          {/* Beneficio 1 */}
          <div className="benefit">
            <img
              src="src/images/yoga.png"
              alt="Relajación"
              className="benefit-icon"
            />
            <h3 className="benefit-title">Relajación</h3>
            <p className="benefit-description">
              Los sahumerios, como los de lavanda, rosa o manzanilla, son conocidos por sus propiedades relajantes. El humo suave y el aroma natural ayudan a reducir el estrés y la ansiedad, creando un ambiente sereno que favorece la calma mental y emocional.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="benefit">
            <img
              src="src/images/beauty.png"
              alt="Purificación del aire"
              className="benefit-icon"
            />
            <h3 className="benefit-title">Purificación</h3>
            <p className="benefit-description">
              Muchos sahumerios, como el sándalo y el incienso, tienen la capacidad de purificar el aire. Al quemarse, liberan compuestos que ayudan a eliminar impurezas y bacterias, mejorando la calidad del aire en tu hogar o espacio de trabajo.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="benefit">
            <img
              src="src/images/home-sweet-home.png"
              alt="Mejorar el ambiente"
              className="benefit-icon"
            />
            <h3 className="benefit-title">Mejorar el ambiente</h3>
            <p className="benefit-description">
              Un sahumerio encendido puede transformar cualquier habitación. Ya sea que busques un aroma suave para crear una atmósfera acogedora, o un aroma fuerte para revitalizar el espacio, los sahumerios aportan frescura y armonía, mejorando el ambiente general de tu hogar.
            </p>
          </div>

          {/* Beneficio 4 */}
          <div className="benefit">
            <img
              src="src/images/meditation.png"
              alt="Promoción de la meditación"
              className="benefit-icon"
            />
            <h3 className="benefit-title">Meditación </h3>

            <p className="benefit-description">
              Los sahumerios de resinas o hierbas como el palo santo y el copal son ideales para la meditación y actividades espirituales. Estos aromas ayudan a enfocar la mente, eliminar distracciones y promover una mayor concentración durante prácticas como la meditación, el yoga o el estudio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

