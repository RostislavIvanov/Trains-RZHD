import React, {memo, useState} from 'react';
import './App.css'
import TrainsTable from "./components/TrainsTable";
import CharacteristicsTable from "./components/CharacteristicsTable";
import Button from "./components/Button";
const App = memo(() => {
    const [trainNumber, setTrainNumber] = useState<number>(0)

    return (
        <>
            <div style={{display: 'flex'}}>
                <TrainsTable setTrainNumber={setTrainNumber}/>
                <div style={{marginLeft:30, display: "flex", flexDirection: "column", alignItems:"center"}}>
                    <CharacteristicsTable  trainNumber={trainNumber}/>
                    <Button trainNumber={trainNumber}/>
                </div>
            </div>
        </>
    );
})

export default App;