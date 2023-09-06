import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import validateForm from './validate';
import style from './styleError.module.css';

function EditAnswer() {

  const { id } = useParams()

  const [answer, setAnswer] = useState({
    full_name: '',
    phone_number: '',
    start_date: '',
    preferred_language: '',
    how_found: '',
    newsletter_subscription: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {

    axios.get(`http://localhost:3001/survey/answer/${id}`)
      .then((response) => {
        setAnswer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching answer:', error);
      });
  }, [id]);

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
  
    if (type === "checkbox") {
      setAnswer((prevAnswer) => ({
        ...prevAnswer,
        [name]: checked,
      }));
    } else {
      setAnswer((prevAnswer) => ({
        ...prevAnswer,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const errors = validateForm(
      answer.full_name,
      answer.phone_number,
      answer.preferred_language,
      answer.how_found,
    );
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      axios.put(`http://localhost:3001/survey/answer/${id}`, answer)
        .then((response) => {
          alert('Respuesta actualizada');
        })
        .catch((error) => {
          console.error('Error actualizando respuesta:', error);
        });
      setErrors({});
      window.location.reload();
    } else {
      alert("Error. Por favor, debe Responder los Campos necesarios");
    }

  };

    return (
      <div>
        <NavLink to={"/answers"}>
          <button>Volver</button>
        </NavLink>
          <h1>Editar Respuesta</h1>
          <form onSubmit={handleSubmit}>
            <div>

              <div>
                <label>Nombre completo</label>
                <br/>
                <input 
                  type="text" 
                  name="full_name"
                  value={answer.full_name}
                  onChange={handleChange}
                />
                {errors.full_name && (
                  <p className={style.error}>{errors.full_name}</p>
                )}
              </div>

              <hr/>

              <div>
                <label>Número de teléfono</label>
                <br/>
                <input 
                  type="tel" 
                  name="phone_number"
                  value={answer.phone_number}
                  onChange={handleChange}
                />
                {errors.phone_number && (
                  <p className={style.error}>{errors.phone_number}</p>
                )}
              </div>

              <hr/>

              <div>
                <label>Fecha de inicio</label>
                <br/>
                <input 
                  type="date" 
                  name="start_date"
                  value={answer.start_date}
                  onChange={handleChange}
                />
              </div>

              <hr/>

              <div>
                <label>¿Cuál es tu idioma preferido?</label>
                <br/>
                <select 
                  name="preferred_language"
                  value={answer.preferred_language}
                  onChange={handleChange}
                >
                  <option value="">Selecciona</option>
                  <option value="english">Inglés</option>
                  <option value="spanish">Español</option>
                  <option value="french">Francés</option>
                  <option value="german">Alemán</option>
                </select>
                {errors.preferred_language && (
                  <p className={style.error}>{errors.preferred_language}</p>
                )}
              </div>

              <hr/>

              <div>
                <legend>¿Cómo nos encontraste?</legend>
                  <div>
                    <input 
                      type="radio"
                      name="how_found"
                      value="friends"
                      onChange={handleChange}
                    />
                    <label>Amigos</label>
                  </div>

                  <div>
                    <input 
                      type="radio"
                      name="how_found"
                      value="online_search"
                      onChange={handleChange}
                    />
                    <label>Búsqueda en línea</label>
                  </div>

                  <div>
                    <input 
                      type="radio"
                      name="how_found"
                      value="advertisement"
                      onChange={handleChange}
                    />
                    <label>Publicidad</label>
                  </div>
              </div>
              {errors.how_found && (
                <p className={style.error}>{errors.how_found}</p>
              )}

              <hr/>

              <div>
                <label>¿Desea seguir recibiendo nuestro boletín informativo?</label>
                <br/>
                <input 
                  type="checkbox" 
                  name="newsletter_subscription"
                  checked={answer.newsletter_subscription}
                  onChange={handleChange}
                />
                <label>Sí</label>
              </div>

              <hr/>

              <div>
                <button type="submit">Actualizar</button>  
              </div> 

            </div>
          </form>
      </div>
    );
  }
  
export default EditAnswer;