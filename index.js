const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Create a new variable called totalBatteries which is the sum of all of the battery amounts in the batteryBatches array. Naturally, use reduce() for this!

// When there are no more numbers left in the array, then it will return the total
let totalBatteries = batteryBatches.reduce((total, battery) => {
    return total + battery;
})