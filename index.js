const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const  totalFunc = (sum, num) => sum + num

let totalBatteries = batteryBatches.reduce(totalFunc)