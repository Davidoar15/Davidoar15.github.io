import axios from "axios";
export const GET_ANSWERS = 'GET_ANSWERS';

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
}