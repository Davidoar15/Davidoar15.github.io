import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { createAnswer, getDataForm } from "../redux/actions";
import { NavLink } from 'react-router-dom';

function Survey({ dataForm, getDataForm, createAnswer }) {
    const [initialFetch, setInitialFetch] = useState(false);
    const [surveyDataForm, setSurveyDataForm] = useState({
      full_name: '',
      phone_number: '',
      start_date: '',
      preferred_language: '',
      how_found: '',
      newsletter_subscription: 'false',
    })

    useEffect(() => {
      if (!initialFetch && !dataForm.length) {
        getDataForm();
        setInitialFetch(true);
      }
    }, [dataForm, getDataForm, initialFetch])

    const FORM = dataForm;

    const handleChange = (event: any) => {
      setSurveyDataForm({ ...surveyDataForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event: any) => {
      event.preventDefault();

      createAnswer(surveyDataForm);
      alert("Datos Cargados. Gracias");
      setSurveyDataForm({
        ...surveyDataForm,
        full_name: '',
        phone_number: '',
        start_date: '',
        preferred_language: '',
      });
      window.location.reload();
    }

    return (
      <div>
          <NavLink to={"/answers"}>
            <button>Respuestas</button>
          </NavLink>
          <h1>ENCUESTA</h1>
          {FORM.length > 0
            ? (
              <form onSubmit={handleSubmit}>
                <div>

                  <div>
                    <label>{FORM[0].label}</label>
                    <br/>
                    <input 
                      type={FORM[0].type} 
                      name={FORM[0].name}
                      value={surveyDataForm.full_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label>{FORM[1].label}</label>
                    <br/>
                    <input 
                      type={FORM[1].type} 
                      name={FORM[1].name}
                      value={surveyDataForm.phone_number}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label>{FORM[2].label}</label>
                    <br/>
                    <input 
                      type={FORM[2].type} 
                      name={FORM[2].name}
                      value={surveyDataForm.start_date}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label>{FORM[3].label}</label>
                    <br/>
                    <select 
                      name={FORM[3].name}
                      value={surveyDataForm.preferred_language}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona</option>
                      <option value={FORM[3].options[0].value}>{FORM[3].options[0].label}</option>
                      <option value={FORM[3].options[1].value}>{FORM[3].options[1].label}</option>
                      <option value={FORM[3].options[2].value}>{FORM[3].options[2].label}</option>
                      <option value={FORM[3].options[3].value}>{FORM[3].options[3].label}</option>
                    </select>
                  </div>

                  <div>
                      <legend>{FORM[4].label}</legend>

                      <div>
                        <input 
                          type={FORM[4].type}
                          name={FORM[4].name}
                          value={FORM[4].options[0].value}
                          onChange={handleChange}
                        />
                        <label>{FORM[4].options[0].label}</label>
                      </div>

                      <div>
                        <input 
                          type={FORM[4].type}
                          name={FORM[4].name}
                          value={FORM[4].options[1].value}
                          onChange={handleChange}
                        />
                        <label>{FORM[4].options[1].label}</label>
                      </div>

                      <div>
                        <input 
                          type={FORM[4].type}
                          name={FORM[4].name}
                          value={FORM[4].options[2].value}
                          onChange={handleChange}
                        />
                        <label>{FORM[4].options[2].label}</label>
                      </div>
                  </div>

                  <div>
                    <label>{FORM[5].label}</label>
                    <br/>
                    <input 
                      type={FORM[5].type} 
                      name={FORM[5].name}
                      value={(surveyDataForm.newsletter_subscription === 'false') 
                        ? 'true' : 'false'}
                      onChange={handleChange}
                    />
                    <label>Sí</label>
                  </div>   

                  <div>
                    <button type={FORM[6].type}>{FORM[6].label}</button>  
                  </div>               
                </div>
              </form>
            )
            : (
              <h2>Esperando Encuesta...</h2>
            )
          }
      </div>
    );
}
  
const mapStateToProps = (state: any) => {
  return {
    dataForm: state.dataForm
  };
};

const mapDisptachToProps = (dispatch: any) => {
  return {
    getDataForm: () => dispatch(getDataForm()),
    createAnswer: (surveyDataForm: any) => dispatch(createAnswer(surveyDataForm)),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Survey);