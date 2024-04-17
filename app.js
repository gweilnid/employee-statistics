// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    // I add +1 to adjust the interval from [min, max) to [min, max]
    const DELTA = 1;
    return Math.floor(Math.random() * (max - min + DELTA) + min);
  }
  
  function getGender(){
    const genders = ["female", "male"];
  
    return genders[getRandomInt(0,genders.length-1)];
  }
  
  function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
  }
  
  function februaryCheck(day, month, year){
    const NON_LEAP_LAST_DAY = 28;
    const LEAP_LAST_DAY = 29;
    const FEBRUARY = 1;
    if (month === FEBRUARY && day === LEAP_LAST_DAY && !isLeapYear(year)) {
      //console.log("HERE 1");
      return NON_LEAP_LAST_DAY;
    }
    return day;
  }
  
  function birthdayIntervalEdges(minYear, maxYear, currentDate, birthday){
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
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  function getBirthday(minYear, maxYear){
    const JANUARY = 0, DECEMBER = 11;
    const FIRST_DAY = 1;
  
    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();
    const year = getRandomInt(currentYear -  maxYear, currentYear - minYear);
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
  
  function getFemaleName(){
    const femaleNames = [
      "Natálie", "Jana", "Eva", "Anna", "Hana", "Lenka", "Kateřina", "Věra", "Lucie", "Tereza",
      "Petra", "Martina", "Jitka", "Ludmila", "Helena", "Michaela", "Alena", "Dana", "Ivana", "Monika",
      "Jarmila", "Veronika", "Zdeňka", "Nikola", "Gabriela", "Božena", "Eliška", "Irena", "Klára", "Alice",
      "Barbora", "Margita", "Andrea", "Dagmar", "Šárka", "Zuzana", "Vlasta", "Katarína", "Jaroslava", "Simona",
      "Daniela", "Kristýna", "Olga", "Radka", "Blanka", "Iva", "Renata", "Romana", "Růžena", "Aneta"
    ];
  
    return femaleNames[getRandomInt(0,femaleNames.length-1)];
  }
  
  function getFemaleSurname(){
    const femaleSurnames = [
      "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová",
      "Marková", "Pospíšilová", "Pokorná", "Hájková", "Jelínková", "Králová", "Růžičková", "Benešová", "Fialová", "Sedláčková",
      "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Vaněková", "Urbanová", "Blahová", "Křížová", "Kopecká",
      "Konečná", "Malá", "Holubová", "Abrahámová", "Adamová", "Bartáková", "Dostálová", "Eliášová", "Filipová", "Gregorová",
      "Hejnová", "Chalupová", "Jandová", "Kafková", "Langerová", "Machová", "Nová", "Odehnalová", "Pánková", "Říhová"
    ];
  
    return femaleSurnames[getRandomInt(0,femaleSurnames.length-1)];
  }
  
  function getMaleName(){
    const maleNames = [
      "Jiří", "Jan", "Petr", "Josef", "Pavel", "Martin", "Jaroslav", "Tomáš", "Miroslav", "František",
      "Karel", "Václav", "Michal", "Lukáš", "David", "Zdeněk", "Jakub", "Stanislav", "Roman", "Ondřej",
      "Jaromír", "Marek", "Milan", "Vladimír", "Ladislav", "Ivan", "Filip", "Adam", "Radek", "Matěj",
      "Vojtěch", "Daniel", "Kamil", "Luboš", "Patrik", "Vít", "Rudolf", "Dominik", "Luděk", "Aleš",
      "Stepan", "Richard", "Igor", "Marian", "Janek", "Robert", "Erik", "Norbert", "Emil", "Dennis"
    ];
  
    return maleNames[getRandomInt(0,maleNames.length-1)];
  }
  
  function getMaleSurname(){
    const maleSurnames = [
      "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec",
      "Marek", "Pospíšil", "Pokorný", "Hájek", "Jelínek", "Král", "Růžička", "Beneš", "Fiala", "Sedláček",
      "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Vaněk", "Urban", "Blaha", "Kříž", "Kopecký",
      "Konečný", "Malý", "Holub", "Abrahám", "Adam", "Barták", "Dostál", "Eliáš", "Filip", "Gregor",
      "Hejna", "Chalupa", "Janda", "Kafka", "Langer", "Mach", "Nový", "Odehnal", "Pánek", "Říha"
    ];
  
    return maleSurnames[getRandomInt(0,maleSurnames.length-1)];
  }
  
  function getWorkload(){
    const workloads = [10, 20, 30, 40];
    return workloads[getRandomInt(0, workloads.length-1)]
  }
  
  function generateEmployeeData(dtoIn){
    let count = dtoIn.count;
      let minAge = dtoIn.age.min;
      let maxAge = dtoIn.age.max;
      let employees = [];
  
      if(count == 0){
        return dtoOut;
      }
      else if(count < 0){
        throw new Error("Zadejte kladné číslo.");
      }
      else if(minAge < 18 || minAge > maxAge ){
        throw new Error("Neplatný věkový intervál.");
      }
      else{
        for(let i = 0; i < count; i++){
          let empGender = getGender();
          if(empGender == "female"){
            employees.push({
              gender: empGender,
              birthdate: getBirthday(minAge, maxAge),
              name: getFemaleName(),
              surname: getFemaleSurname(),
              workload: getWorkload()
            })
            //console.log(dtoOut[i]);
          }
          else{
            employees.push({
              gender: empGender,
              birthdate: getBirthday(minAge, maxAge),
              name: getMaleName(),
              surname: getMaleSurname(),
              workload: getWorkload()
            })
            //console.log(dtoOut[i]);
          }
        }
      }
     return employees; 
  }
  function countEmployees(employees){
    return employees.length;
  }

  function countWorkload(workload, employees){
    return employees.filter(employee => employee.workload === workload).length;
  }

  function getAge(date){
    const birthday = new Date(date);
    const difference = Date.now() - birthday;
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  function getAverageAge(employees){
    const total = employees.reduce((ageSum, employee) => ageSum + getAge(employee.birthdate), 0 /*Pointer to the null of the array*/);
    const average = total / employees.length;
    return average.toFixed(1);
  }
  // Mozna spojit jako MIN ? MAX
  function getMinAge(employees){
    // Reduce vraci pointer na objekt
    const youngestEmployee = employees.reduce((a, b) => (new Date(a.birthdate) > new Date(b.birthdate) ? a : b));
    //console.log(youngestEmployee);
    return getAge(youngestEmployee.birthdate);
  }

  function getMaxAge(employees){
    const oldestEmployee = employees.reduce((a, b) => (new Date(a.birthdate) < new Date(b.birthdate) ? a : b));
    //console.log(oldestEmployee);
    return getAge(oldestEmployee.birthdate);
  }
  function getMedianAge(employees){
    employees.sort((a, b) => new Date(a.birthdate) - new Date(b.birthdate));
    //console.log(employees);
    if(employees.length % 2 == 1) return getAge(employees[Math.floor(employees.length/2)].birthdate);
    else if(employees.length % 2 == 0){
      const beforeNum = getAge(employees[(employees.length/2) - 1].birthdate);
      const afterNum = getAge(employees[(employees.length/2)].birthdate);
      return ((beforeNum+afterNum)/2).toFixed(1);
    }
  }

  function getFemaleEmployeeWorkload(employees){
    let filtered = employees.filter(employee => employee.gender === "female");
    if(filtered.length == 0) return 0;
    //console.log(filtered);
    const total = filtered.reduce((sum, emp) => (sum + emp.workload), 0);
    return (total/filtered.length).toFixed(1);
  }

  function sortByWorkload(employees){
    return employees.sort((a, b) => a.workload - b.workload);
  }

  function getMedianWorkload(employees){
    let sorted = sortByWorkload(employees);
    //console.log(sorted);
    if(sorted.length % 2 == 1) return (sorted[Math.floor(sorted.length/2)].workload);
    else if(sorted.length % 2 == 0){
      const beforeNum = sorted[(sorted.length/2) - 1].workload;
      const afterNum = sorted[(sorted.length/2)].workload;
      return ((beforeNum+afterNum)/2).toFixed(1);
    }
  }

  function getEmployeeStatistics(employees){
    let statistics = [];
    //console.log(sortedEmployees);
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
        medianWorkload : getMedianWorkload(employees),
        averageWomenWorkload: getFemaleEmployeeWorkload(employees),
        sortedByWorkload: sortByWorkload(employees),
    });
    //console.log(statistics);
    return statistics;
  }

  function main(dtoIn){  
    let dtoOut = [];
    let employees = generateEmployeeData(dtoIn);
    if(employees.length == 0) return dtoOut;
    
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
