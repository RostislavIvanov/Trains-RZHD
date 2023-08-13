import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ICharUpdatePayload, ITrains} from "../types/ITrains";

interface TrainsState {
    trains: ITrains[]
    isLoading: boolean
    error: string
    invalidValues: number[]
}

const initialState: TrainsState = {
    trains: [],
    isLoading: false,
    error: '',
    invalidValues: []
}
export const trainsSlice = createSlice({
    name: 'trains',
    initialState,
    reducers: {
        trainsFetching: (state) => {
            state.isLoading = true
        },
        trainsFetchingSuccess: (state, action: PayloadAction<ITrains[]>) => {
            state.isLoading = false
            state.error = ''
            state.trains = action.payload
        },
        trainsFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        updatingCharacteristicData: (state, action: PayloadAction<ICharUpdatePayload>) => {
            state.trains[action.payload.trainNumber].characteristics[action.payload.index][action.payload.characteristicKey] = action.payload.value
        },
        additionInvalidValue: (state, action: PayloadAction<number>) => {
            if (!state.invalidValues.includes(action.payload)) {
                state.invalidValues.push(action.payload)
            }
        },
        deletingInvalidValue: (state, action: PayloadAction<number>) => {
            const index = state.invalidValues.indexOf(action.payload);
            if (index !== -1) {
                state.invalidValues.splice(index, 1);
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    trainsFetching,
    trainsFetchingSuccess,
    trainsFetchingError,
    updatingCharacteristicData,
    additionInvalidValue,
    deletingInvalidValue
} = trainsSlice.actions
export default trainsSlice.reducer
