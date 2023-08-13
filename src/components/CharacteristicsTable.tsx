import React, {FC, memo, useEffect, useState} from 'react';
import classes from '../styles/CharacteristicsTable.module.css'
import Title from "./Title";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import TrainCharItem from "./TrainCharItem";
import {ITrains} from "../types/ITrains";
import {fetchTrains} from "../store/ActionCreators";

interface ICharacteristicsTableProps {
    trainNumber: number;
}

const CharacteristicsTable: FC<ICharacteristicsTableProps> = memo(({trainNumber}) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchTrains())
    }, [])
    const {trains, error, isLoading} = useAppSelector(state => state.trainsReducer)

    if (isLoading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>Произошла ошибка: {error}</p>;
    }
    return (
        <>
            {trains && trains[trainNumber] &&
                <div className={classes.container}>
                    <div className={classes.title}>
                        <Title>Характеристики</Title>
                        <Title>{trains[trainNumber].name}</Title>
                    </div>

                    <table className={classes.characteristic}>
                        <tbody>
                        <tr className={classes.titleRow}>
                            <td>Ток двигателя</td>
                            <td>Сила тяги</td>
                            <td>Скорость</td>
                        </tr>

                        {trains[trainNumber].characteristics.map((character, index) =>
                            <TrainCharItem
                                character={character}
                                trainNumber={trainNumber}
                                index={index}
                                key={index}
                            />
                        )}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
})


export default CharacteristicsTable;