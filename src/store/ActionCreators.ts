import {AppDispatch} from "./store";
import {trainsSlice} from './trainsSlice'
import axios from "axios";
export const fetchTrains = () => async (dispatch : AppDispatch) => {
    try {
        dispatch(trainsSlice.actions.trainsFetching)
        const response = await axios.get('https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json')
        dispatch(trainsSlice.actions.trainsFetchingSuccess(response.data))
    }
    catch (e) {
        dispatch(trainsSlice.actions.trainsFetchingError('Ошибка при загрузке данных поездов'))
    }
}