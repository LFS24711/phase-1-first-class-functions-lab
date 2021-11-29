// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(drivers.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function createFareMultiplier(multiplier) {   
    return function (fare){
        return multiplier * fare
    }
    };
    

const selectDifferentDrivers = (arrayOfDrivers, driverFunction) =>
driverFunction(arrayOfDrivers);