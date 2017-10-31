// Code your solution in this file.

// var new_array = arr.map(function callback(currentValue, index, array) {
//     // Return element for new_array
// }[, thisArg])

function lowerCaseDrivers(drivers) {
  return drivers.map(function(name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    const first = name.split(" ")[0];
    const last = name.split(" ")[1];
    return { firstName: first, lastName: last };
  });
}

// 'Bobby is from Pittsburgh', 'Sammy is from New York', 'Sally is from Cleveland', 'Annette is from Los Angeles', 'Bobby is from Tampa Bay'

function attributesToPhrase(drivers) {
  return drivers.map(function(driverInfo) {
    return `${driverInfo.name} is from ${driverInfo.hometown}`;
  });
}
