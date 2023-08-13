export interface ITrains {
    name: string
    description: string
    characteristics: ITrainCharacteristics[]
}

export interface ICharacteristics {
    speed: string
    force: string
    engineAmperage: string
}
interface ITrainCharacteristics extends ICharacteristics {
    [key: string]: string;
}
export interface ICharUpdatePayload {
    trainNumber: number
    index: number
    characteristicKey: string
    value: string
}