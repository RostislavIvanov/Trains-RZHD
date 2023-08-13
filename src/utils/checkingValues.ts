export const checkingSpeedValue = (value: string): boolean => {
    const numberValue = Number(value);
    return !Number.isNaN(numberValue) &&
        Number.isInteger(numberValue) && value !== '' &&
        numberValue >= 0;
}

export const checkingForceValue = (value: string): boolean => {
    const numberValue = Number(value);
    return !Number.isNaN(numberValue) &&
        numberValue > 0 && value !== '' &&
        Number.isFinite(numberValue);
}

export const checkingEngineAmperageValue = (value: string): boolean => {
    const numberValue = Number(value);
    return !Number.isNaN(numberValue) &&
        Number.isInteger(numberValue) &&
        numberValue > 0 && value !== '';
}