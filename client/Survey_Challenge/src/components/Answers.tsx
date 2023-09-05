import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAnswers } from "../redux/actions";
import { connect } from "react-redux";
import Answer from "./Answer";

function Answers({ answers, getAnswers }) {
  const [initialFetch, setInitialFetch] = useState(false);


  useEffect(() => {
    if (!initialFetch && !answers.length) {
      getAnswers();
      setInitialFetch(true);
    }
  }, [answers, getAnswers, initialFetch])

    return (
      <div>
          <NavLink to={"/survey"}>
            <button>Encuesta</button>
          </NavLink>
          <h2>RESPUESTAS REGISTRADAS</h2>
          {answers.length === 0
            ? (
              <h2>No hay Respuestas Registradas</h2>
            ) 
            : (
              answers.map((answer, index) => (
                <Answer 
                  key={index}
                  answer={answer}
                />
              ))
            )
          }
      </div>
    );
  }
  
  const mapStateToProps = (state: any) => {
    return {
      answers: state.answers
    };
  };
  
  const mapDisptachToProps = (dispatch: any) => {
    return {
      getAnswers: () => dispatch(getAnswers()),
    };
  };

export default connect(mapStateToProps, mapDisptachToProps)(Answers);