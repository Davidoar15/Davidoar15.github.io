import { NavLink } from "react-router-dom";

function Landing() {

    return (
      <div>
          <h1>BIENVENIDO</h1>
          <div style={{width: "50%", marginLeft: "25%"}}>
            <p style={{textAlign: "left"}}>
              ¡Bienvenido a nuestra encuesta de IdiomaSchool! 
              Queremos conocerte mejor para brindarte la mejor 
              experiencia de aprendizaje. Cuéntanos tu nombre, 
              número de contacto y tu idioma preferido entre 
              inglés, español, francés y alemán. ¿Cómo llegaste 
              a nosotros: a través de amigos, búsqueda en línea 
              o publicidad? Si deseas estar al tanto de nuestras 
              últimas noticias, también puedes suscribirte a 
              nuestro boletín informativo. Únete a nuestra comunidad 
              de aprendizaje y comparte tu pasión por los idiomas. ¡Comencemos!
            </p>
          </div>
          <NavLink to={"/survey"}>
            <button>Start</button>
          </NavLink>
      </div>
    );
  }
  
export default Landing;