import React, {FC, memo} from 'react';
import {ICharacteristics, ICharUpdatePayload} from "../types/ITrains";
import {useAppDispatch} from "../hooks/reduxHooks";
import {trainsSlice} from "../store/trainsSlice";
import classes from '../styles/TrainCharItem.module.css'
import {checkingEngineAmperageValue, checkingForceValue, checkingSpeedValue} from "../utils/checkingValues";

interface ITrainCharItemProps {
    character: ICharacteristics;
    trainNumber: number;
    index: number;
}

const TrainCharItem: FC<ITrainCharItemProps> = memo(({character, trainNumber, index}) => {
    const dispatch = useAppDispatch()
    const handleChangingData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const changingData: ICharUpdatePayload = {
            trainNumber: trainNumber,
            index: index,
            characteristicKey: event.target.name,
            value: event.target.value
        }
        dispatch(trainsSlice.actions.updatingCharacteristicData(changingData))
    }
    const characterStyling = (value: string, checkingValue: (value: string) => boolean) => {
        const styles: string[] = [classes.characteristicInput];
        if (!checkingValue(value)) {
            styles.push(classes.invalidValue);
        }
        return styles.join(' ');
    }

    return (
        <>
            <tr>
                <td>
                    <input className={characterStyling(character.engineAmperage, checkingEngineAmperageValue)}
                           name={'engineAmperage'}
                           onChange={handleChangingData}
                           value={character.engineAmperage}
                           type="text"
                    />
                </td>
                <td>
                    <input className={characterStyling(character.force, checkingForceValue)} name={'force'}
                           onChange={handleChangingData}
                           value={character.force}
                           type="text"
                    />
                </td>
                <td>
                    <input className={characterStyling(character.speed, checkingSpeedValue)} name={'speed'}
                           onChange={handleChangingData}
                           value={character.speed}
                           type="text"
                    />
                </td>
            </tr>
        </>
    );
})

export default TrainCharItem;