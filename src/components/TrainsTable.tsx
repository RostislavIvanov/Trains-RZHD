import React, {FC, memo, useEffect, useState} from 'react';
import classes from "../styles/TrainsTable.module.css";
import {ITrains} from "../types/ITrains";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {fetchTrains} from "../store/ActionCreators";
import TrainItem from "./TrainItem";
import Title from "./Title";

interface ITrainsTableProps {
    setTrainNumber: (trainNumber: number) => void;
}

const TrainsTable: FC<ITrainsTableProps> = memo(({setTrainNumber}) => {
    const {trains} = useAppSelector(state => state.trainsReducer)
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <Title>Поезда</Title>
            </div>
            <table>
                <tbody>
                <tr className={classes.titleRow}>
                    <td className={classes.tableUnit}>Название</td>
                    <td className={classes.tableUnit}>Описание</td>
                </tr>
                {trains.map((train, index) =>
                    <tr className={classes.clickCon} key={train.name} onClick={() => setTrainNumber(index)}>
                        <TrainItem train={train} />
                    </tr>
                )}</tbody>
            </table>
        </div>
    );
})

export default TrainsTable;