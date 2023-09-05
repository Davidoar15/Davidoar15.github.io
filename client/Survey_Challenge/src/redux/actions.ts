import axios from "axios";
export const GET_DATAFORM = 'GET_DATAFORM';
export const GET_ANSWERS = 'GET_ANSWERS';

export const getDataForm = () => {
    return async (dispatch: any) => {
        try {
            const response = await axios.get('http://localhost:3001/survey/data');
            if (response.status === 200) {
                const dataForm = response.data;
                console.log(dataForm)
                dispatch({
                    type: 'GET_DATAFORM',
                    payload: dataForm,
                })
            }
        } catch(error) {
            console.error('Error fetching Form Data:', error);
        }
    }
};

export const getAnswers = () => {
    return async (dispatch: any) => {
        try {
            const response = await axios.get('http://localhost:3001/survey/answer');
            if (response.status === 200) {
                const answers = response.data;
                dispatch({
                    type: 'GET_ANSWERS',
                    payload: answers,
                })
            }
        } catch(error) {
            console.error('Error fetching Answers list:', error);
        }
    }
};

export const createAnswer = (surveyFormData: any) => {
    return async () => {
      try {
        console.log(surveyFormData)
        await axios.post('http://localhost:3001/survey/answer', surveyFormData);
      } catch (error) {
        console.error(error);
      }
    };
};