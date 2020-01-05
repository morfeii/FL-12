function isLeapYear(dateArg) {
    let notLeap = [1700, 1800, 1900, 2100, 2200, 2300];
    let date = new Date(dateArg);
    date = date.getFullYear();
    if (isNaN(date)) {
        return `Invalid date`;
    }
    return (date % 4 === 0 && !notLeap.includes(date)) ? `${date} is a leap year` : `${date} is not a leap year`;
}

console.log(isLeapYear('2020-01-01 12:00:00'));
console.log(isLeapYear('2200-01-01 12:00:00'));
console.log(isLeapYear(144254326075677809775));