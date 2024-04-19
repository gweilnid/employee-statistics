// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  // I add +1 to adjust the interval from [min, max) to [min, max]
  const DELTA = 1;
  return Math.floor(Math.random() * (max - min + DELTA) + min);
}


// Returns a randomly chosen gender from an array 
function getGender() {
  const genders = ["female", "male"];

  return genders[getRandomInt(0, genders.length - 1)];
}

// Determines if a given year is leap or not
function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
}

// Returning 28 if the day is 29 and it's not a leap year
function februaryCheck(day, month, year) {
  const NON_LEAP_LAST_DAY = 28;
  const LEAP_LAST_DAY = 29;
  const FEBRUARY = 1;
  if (month === FEBRUARY && day === LEAP_LAST_DAY && !isLeapYear(year)) {
    //console.log("HERE 1");
    return NON_LEAP_LAST_DAY;
  }
  return day;
}

// Adjusts the birthdate if it is not inside correct age range
function birthdayIntervalEdges(minYear, maxYear, currentDate, birthday) {
  const minAgeLimit = new Date(Date.UTC(currentDate.getUTCFullYear() - minYear,
    currentDate.getUTCMonth(), currentDate.getUTCDate()));
  const maxAgeLimit = new Date(Date.UTC(currentDate.getUTCFullYear() - maxYear,
    currentDate.getUTCMonth(), currentDate.getUTCDate()));

  if (birthday > minAgeLimit) {
    birthday.setUTCFullYear(birthday.getUTCFullYear() - 1);
    //console.log("HERE 2");
  }
  else if (birthday < maxAgeLimit) {
    birthday.setUTCFullYear(birthday.getUTCFullYear() + 1);
    //console.log("HERE 3");
  }
}

// Generates a birthdate within a given age range based on current date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
function getBirthday(minYear, maxYear) {
  const JANUARY = 0, DECEMBER = 11;
  const FIRST_DAY = 1;

  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const year = getRandomInt(currentYear - maxYear, currentYear - minYear);
  const month = getRandomInt(JANUARY, DECEMBER);
  // (year, month, last day of the month)
  let day = getRandomInt(FIRST_DAY, new Date(year, month + 1, 0).getDate());

  // If the date is February 29 in a non-leap year, decrement the day by one
  day = februaryCheck(day, month, year);

  // Using UTC to set the time to T00:00:00.000Z
  const birthday = new Date(Date.UTC(year, month, day));

  // Checks if the date is inside the correct interval
  birthdayIntervalEdges(minYear, maxYear, currentDate, birthday);

  return birthday.toISOString();
}

// Selects a random female name from
function getFemaleName() {
  const femaleNames = [
    "Natálie", "Jana", "Eva", "Anna", "Hana", "Lenka", "Kateřina", "Věra", "Lucie", "Tereza",
    "Petra", "Martina", "Jitka", "Ludmila", "Helena", "Michaela", "Alena", "Dana", "Ivana", "Monika",
    "Jarmila", "Veronika", "Zdeňka", "Nikola", "Gabriela", "Božena", "Eliška", "Irena", "Klára", "Alice",
    "Barbora", "Margita", "Andrea", "Dagmar", "Šárka", "Zuzana", "Vlasta", "Katarína", "Jaroslava", "Simona",
    "Daniela", "Kristýna", "Olga", "Radka", "Blanka", "Iva", "Renata", "Romana", "Růžena", "Aneta"
  ];

  return femaleNames[getRandomInt(0, femaleNames.length - 1)];
}

// Selects a random female surname
function getFemaleSurname() {
  const femaleSurnames = [
    "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová",
    "Marková", "Pospíšilová", "Pokorná", "Hájková", "Jelínková", "Králová", "Růžičková", "Benešová", "Fialová", "Sedláčková",
    "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Vaněková", "Urbanová", "Blahová", "Křížová", "Kopecká",
    "Konečná", "Malá", "Holubová", "Abrahámová", "Adamová", "Bartáková", "Dostálová", "Eliášová", "Filipová", "Gregorová",
    "Hejnová", "Chalupová", "Jandová", "Kafková", "Langerová", "Machová", "Nová", "Odehnalová", "Pánková", "Říhová"
  ];

  return femaleSurnames[getRandomInt(0, femaleSurnames.length - 1)];
}

// Selects a random male name
function getMaleName() {
  const maleNames = [
    "Jiří", "Jan", "Petr", "Josef", "Pavel", "Martin", "Jaroslav", "Tomáš", "Miroslav", "František",
    "Karel", "Václav", "Michal", "Lukáš", "David", "Zdeněk", "Jakub", "Stanislav", "Roman", "Ondřej",
    "Jaromír", "Marek", "Milan", "Vladimír", "Ladislav", "Ivan", "Filip", "Adam", "Radek", "Matěj",
    "Vojtěch", "Daniel", "Kamil", "Luboš", "Patrik", "Vít", "Rudolf", "Dominik", "Luděk", "Aleš",
    "Stepan", "Richard", "Igor", "Marian", "Janek", "Robert", "Erik", "Norbert", "Emil", "Dennis"
  ];

  return maleNames[getRandomInt(0, maleNames.length - 1)];
}

// Selects a random male surname
function getMaleSurname() {
  const maleSurnames = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec",
    "Marek", "Pospíšil", "Pokorný", "Hájek", "Jelínek", "Král", "Růžička", "Beneš", "Fiala", "Sedláček",
    "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Vaněk", "Urban", "Blaha", "Kříž", "Kopecký",
    "Konečný", "Malý", "Holub", "Abrahám", "Adam", "Barták", "Dostál", "Eliáš", "Filip", "Gregor",
    "Hejna", "Chalupa", "Janda", "Kafka", "Langer", "Mach", "Nový", "Odehnal", "Pánek", "Říha"
  ];

  return maleSurnames[getRandomInt(0, maleSurnames.length - 1)];
}

// Randomly selects a workload from array
function getWorkload() {
  const workloads = [10, 20, 30, 40];
  return workloads[getRandomInt(0, workloads.length - 1)]
}

// Generates employee data based on input specifications (count, age range)
function generateEmployeeData(dtoIn) {
  let count = dtoIn.count;
  let minAge = dtoIn.age.min;
  let maxAge = dtoIn.age.max;
  let employee = {};
  let employees = [];

  if (count == 0) {
    return [];
  } else if (count < 0) {
    throw new Error("Zadejte kladné číslo.");
  } else if (minAge < 18 || minAge > maxAge) {
    throw new Error("Neplatný věkový intervál.");
  } else {
    for (let i = 0; i < count; i++) {
      let gender = getGender();
      let name, surname;
      if (gender === "female") {
        name = getFemaleName();
        surname = getFemaleSurname();
      }
      else {
        name = getMaleName();
        surname = getMaleSurname();
      }

      employee = {
        gender: gender,
        birthdate: getBirthday(minAge, maxAge),
        name: name,
        surname: surname,
        workload: getWorkload()
      };

      employees.push(employee);
    }
  }
  return employees;
}

// Length of the array is count of the employees
function countEmployees(employees) {
  return employees.length;
}

// Filters array by workload given on input and then returns size of the array
function countWorkload(workload, employees) {
  return employees.filter(employee => employee.workload === workload).length;
}

// Current year - input year = age, also adjusts age with comparing current month and day(date)
function getAge(birthdate) {
  const birthday = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const monthDifference = today.getMonth() - birthday.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate()) ) {
      age--;
  }

  return age;
}
// Gets total age of the all employees and divides into number of the employees = average age
function getAverageAge(employees) {
  if (employees.length === 0) return "0.0";
  // 0 sets ageSum into 0
  const total = employees.reduce((ageSum, employee) => ageSum + getAge(employee.birthdate), 0);
  const average = total / employees.length;
  return average.toFixed(1);
}

// Reduce the array to a single employee object with the earliest birthdate
function getMinAge(employees) {
  const youngestEmployee = employees.reduce((currentYoungest, currentEmployee) => 
  (new Date(currentYoungest.birthdate) > new Date(currentEmployee.birthdate) ? currentYoungest : currentEmployee));
  //console.log(youngestEmployee);
  return getAge(youngestEmployee.birthdate);
}

// Reduce the array to a single employee object with the latest birthdate
function getMaxAge(employees) {
  const oldestEmployee = employees.reduce((currentOldest, currentEmployee) => 
  (new Date(currentOldest.birthdate) < new Date(currentEmployee.birthdate) ? currentOldest : currentEmployee));
  //console.log(oldestEmployee);
  return getAge(oldestEmployee.birthdate);
}

// Sorts employees by birthdates and then applies median formula
function getMedianAge(employees) {
  employees.sort((employee1, employee2) => new Date(employee1.birthdate) - new Date(employee2.birthdate));
  //console.log(employees);
  if (employees.length % 2 == 1) return getAge(employees[Math.floor(employees.length / 2)].birthdate);
  else if (employees.length % 2 == 0) {
    // -1 for the correct index
    const beforeNum = getAge(employees[(employees.length / 2) - 1].birthdate);
    const afterNum = getAge(employees[(employees.length / 2)].birthdate);
    return ((beforeNum + afterNum) / 2).toFixed(1);
  }
}

// Filters employees by given gender and then returns average workload
function getFemaleEmployeeAvgWorkload(employees) {
  let filtered = employees.filter(employee => employee.gender === "female");
  if (filtered.length == 0) return 0;
  //console.log(filtered);
  const total = filtered.reduce((sum, emp) => (sum + emp.workload), 0);
  return (total / filtered.length).toFixed(1);
}

// Sorts employees by workload
function sortByWorkload(employees) {
  return employees.sort((employee1, employee2) => employee1.workload - employee2.workload);
}

// Sorts employess by workload and then applies median formula
function getMedianWorkload(employees) {
  let sorted = sortByWorkload(employees);
  //console.log(sorted);
  if (sorted.length % 2 == 1) return (sorted[Math.floor(sorted.length / 2)].workload);
  else if (sorted.length % 2 == 0) {
    // -1 for the correct index
    const beforeNum = sorted[(sorted.length / 2) - 1].workload;
    const afterNum = sorted[(sorted.length / 2)].workload;
    return ((beforeNum + afterNum) / 2).toFixed(1);
  }
}

// Generates a report of employee statistics
function getEmployeeStatistics(employees) {
  let statistics = [];
  statistics.push({
    total: countEmployees(employees),
    workload10: countWorkload(10, employees),
    workload20: countWorkload(20, employees),
    workload30: countWorkload(30, employees),
    workload40: countWorkload(40, employees),
    averageAge: getAverageAge(employees),
    minAge: getMinAge(employees),
    maxAge: getMaxAge(employees),
    medianAge: getMedianAge(employees),
    medianWorkload: getMedianWorkload(employees),
    averageWomenWorkload: getFemaleEmployeeAvgWorkload(employees),
    sortedByWorkload: sortByWorkload(employees)
  });

  return statistics;
}

function main(dtoIn) {
  let dtoOut = [];
  let employees = generateEmployeeData(dtoIn);
  if (employees.length == 0) return dtoOut;

  dtoOut = getEmployeeStatistics(employees);
  console.log(JSON.stringify(dtoOut, null, 2));
  return dtoOut;
}

const dtoIn = {
  count: 6,
  age: {
    min: 19,
    max: 35
  }
}

main(dtoIn);


const testEmployeesWithGender = [
  { gender: "female", workload: 20 },
  { gender: "female", workload: 30 },
  { gender: "female", workload: 40 },
  { gender: "male", workload: 20 },
  { gender: "male", workload: 30 }
];

console.assert(countEmployees(testEmployeesWithGender) === 5, 'Expected 5 employees');

console.assert(countWorkload(10, testEmployeesWithGender) === 0, 'Workload calculation error');
console.assert(countWorkload(20, testEmployeesWithGender) === 2, 'Workload calculation error');
console.assert(countWorkload(30, testEmployeesWithGender) === 2, 'Workload calculation error');
console.assert(countWorkload(40, testEmployeesWithGender) === 1, 'Workload calculation error');

console.assert(getFemaleEmployeeAvgWorkload(testEmployeesWithGender) === '30.0', 'Expected average to be 30');

const testEmployees = [
  {birthdate: '1990-01-01'},
  {birthdate: '1985-01-01'},
  {birthdate: '2000-01-01'}
];

console.assert(getAverageAge(testEmployees) === '32.3', 'Expected average age to be 32.3');

console.assert(getMinAge(testEmployees) === 24, 'Minimum age calculation error');

console.assert(getMaxAge(testEmployees) === 39, 'Maximum age calculation error');

// For odd length array
console.assert(getMedianAge(testEmployees) === 34, 'Median age error');

// For even length array
testEmployees.push({birthdate: '1995-01-01'});
const medianAgeForEven = ((getAge('1990-01-01') + getAge('1995-01-01')) / 2).toFixed(1);
console.assert(getMedianAge(testEmployees) === medianAgeForEven, 'Median age error');

console.log("Tests end sucessfuly.");