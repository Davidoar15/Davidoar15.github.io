import { NavLink } from "react-router-dom";

function Answer({ answer }) {

    const { id, full_name, phone_number, start_date, preferred_language, how_found, newsletter_subscription } = answer;

  return (
    <div>
        <div style={{width: "150%", height: "auto", border: "2px black solid", marginBottom: "20px", marginLeft: "-70px"}}>
            <div>
                <h2>{full_name}</h2>
                <h3>
                    Número de Teléfono 
                    <br/>
                    {phone_number}
                </h3>
                <h3>
                    Fecha de Inicio 
                    <br/>
                    {(start_date) 
                        ? start_date 
                        : "Sin especificar"
                    }
                </h3>
                <h3>
                    Idioma Preferido 
                    <br/>
                    {(preferred_language === 'english')
                        ? "Inglés"
                        : (preferred_language === 'spanish') 
                            ? "Español"
                            : (preferred_language === 'french')
                                ? "Francés"
                                : "Alemán"
                    }
                </h3>
                <h3>
                    ¿Cómo nos Encontró? 
                    <br/>
                    {(how_found === 'friends')
                        ? "Amigos"
                        : (how_found === 'online_search')
                            ? "Búsqueda en línea"
                            : "Publicidad"
                    }
                </h3>
                <h3>
                    Boletín Informativo 
                    <br/>
                    {(newsletter_subscription === true) 
                        ? "Sí" 
                        : "No"
                    }
                </h3>
            </div>
            <NavLink to={`/edit/${id}`}>
                <button style={{margin: "10px"}}>Editar</button>
            </NavLink>
        </div>
    </div>
  );
}

export default Answer;