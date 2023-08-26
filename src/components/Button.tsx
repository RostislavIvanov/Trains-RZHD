import React, {FC, memo} from 'react';
import classes from '../styles/Button.module.css'
import {useAppSelector} from "../hooks/reduxHooks";
import {checkingEngineAmperageValue, checkingForceValue, checkingSpeedValue} from "../utils/checkingValues";


interface IButtonProps {
    trainNumber: number
}

const Button: FC<IButtonProps> = memo(({trainNumber}) => {
    const trains = useAppSelector(state => state.trainsReducer.trains);
    const train = trains[trainNumber];
    if (!train) {
        return <p>Загрузка</p>
    }
    const trainCharacteristics = train.characteristics;
    const checkingInvalidValues = (): boolean => {
        for (let i = 0; i < trainCharacteristics.length; i++) {
            const char = trainCharacteristics[i];
            if (!checkingSpeedValue(char.speed)) return true
            if (!checkingForceValue(char.force)) return true
            if (!checkingEngineAmperageValue(char.engineAmperage)) return true
        }
        return false
    }
    const outputSpeedConstraints = () => {
        const sortedCharacteristics = [...trainCharacteristics];
        sortedCharacteristics.sort((a, b) => Number(a.speed) - Number(b.speed));
        const sortedSpeeds = sortedCharacteristics.map(characteristic => Number(characteristic.speed));
        console.log(sortedSpeeds);
    }

    return (
        <button onClick={outputSpeedConstraints} disabled={checkingInvalidValues()} className={classes.button}>Отправить
            данные</button>
    );
})

export default Button;