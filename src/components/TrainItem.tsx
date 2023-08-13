import React, {FC, memo} from 'react';
import {ITrains} from "../types/ITrains";
import classes from "../styles/TrainsTable.module.css";

interface ITrainItemProps {
    train: ITrains
}

const TrainItem: FC<ITrainItemProps> = memo(({train}) => {
    return (
        <>
            <td className={classes.tableUnit}>{train.name}</td>
            <td className={classes.tableUnit}>{train.description}</td>
        </>
    );
})

export default TrainItem;