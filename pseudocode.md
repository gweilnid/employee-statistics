## Pseudokód pro domácí úkol 4.

### Přehled
- Skript slouží k generování náhodných zaměstnanců a k vytváření statistik o zaměstnaneckých datech

### Funkce

#### 1. `getRandomInt(min, max)`
   - **Účel**: Vypočítá náhodné celé číslo v intervalu [min, max].
   - **Proces**:
     - Inicializace proměnné let DELTA 1;
     - Inicializuj rozsah jako `max - min + DELTA`.
     - Generuj náhodné číslo: `Math.floor(Math.random() * rozsah) + min`.
     - Vrať `náhodné číslo`.

#### 2. `getGender()`
   - **Účel**: Vybere náhodné pohlaví.
   - **Proces**:
     - Vytvoř pole pohlaví s hodnotami `["female", "male"]`.
     - Vyber index
     - Vrať `pohlaví[index]`.

#### 3. `isLeapYear(year)`
   - **Účel**: Zjistit jestli rok je přestupný nebo ne.
   - **Proces**:
     - Vrať `True` pokud `(rok % 4 == 0 a rok % 100 != 0) nebo (rok % 400 == 0)`, jinak `False`.

#### 4. `februaryCheck(day, month, year)`
   - **Účel**: Kontroluje a opravuje 29. únor v nepřestupných letech.
   - **Proces**:
     - Pokud je 29. února `isLeapYear(rok)` vrátí `False`, pak vrať `28`.
     - V opačném případě vrať `den`.

#### 5. `birthdayIntervalEdges(minYear, maxYear, currentDate, birthday)`
   - **Účel**: Upravuje datum narození, pokud není v požadovaném intervalu.
   - **Proces**:
     - Definuj minAgeLimit a maxAgeLimit podle currentDate minus minYear a maxYear.
     - Pokud narození je později než minAgeLimit, zmenši rok narození.
     - Pokud narození je dříve než maxAgeLimit, zvětši rok narození.

#### 6. `getBirthday(minYear, maxYear)`
   - **Účel**: Generuje datum narození v daném věkovém rozmezí.
   - **Proces**:
     - Získej aktuální datum.
     - Nastav rok, měsíc a den pomocí getRandomInt.
     - Uprav den pro speciální případy (únor 29) pomocí `februaryCheck`.
     - Vytvoř datum narození jako `new Date(rok, měsíc, den)`.
     - Uprav datum narození pomocí `birthdayIntervalEdges`.
     - Vrať datum jako řetězec v ISO formátu.

#### 7. `getFemaleName()`
   - **Účel**: Vyber náhodné jméno ze seznamu.
   - **Proces**:
     - const femaleNames = [pole jmén]
     - Vyber náhodné jméno
     - Vrať jméno
     
#### 8. `getFemaleSurname()` 
   - **Účel**: Vybere náhodné příjmení ze seznamu.
   - **Proces**:
     - const femaleSurnames = [pole příjmení]
     - Vyber náhodné příjmení
     - Vrať příjmení

#### 9. `getMaleName()`
   - **Účel**: Vyber náhodné jméno ze seznamu.
   - **Proces**:
     - const maleNames = [pole jmén]
     - Vyber náhodné jméno
     - Vrať jméno
     
#### 10. `getMaleSurname()` 
   - **Účel**: Vybere náhodné příjmení ze seznamu.
   - **Proces**:
     - const maleSurnames = [pole příjmení]
     - Vyber náhodné příjmení
     - Vrať příjmení

#### 11. `getWorkload()`
   - **Účel**: Vybere náhodnou pracovní zátěž z pole.
   - **Proces**:
     - Definuj pole workload = `[10, 20, 30, 40]`.
     - Vyber náhodnou zátěž a vrať

#### 12. `generateEmployeeData(dtoIn)`
   - **Účel**: Generuje seznam zaměstnanců podle parametrů
   - **Proces**:
     - Inicializace proměnných:
        let count = dtoIn.count;
        let minAge = dtoIn.age.min;
        let maxAge = dtoIn.age.max;
        let employee = {};
        let employees = [];
     - Pokud `count < 0`, vyhoď chybu "Zadejte kladné číslo.".
     - Pokud `minAge < 18` nebo `minAge > maxAge`, vyhoď chybu "Neplatný věkový intervál.".
     - Pro každý index od 0 do count - 1:
       - Získej pohlaví, jméno, příjmení, datum narození a pracovní zátěž.
       - Vytvoř objektemployee a přidej ho do seznamu employees.
     - Vrať employees

#### 13. `countEmployees(employees)`
   - **Účel**: Spočítá počet zaměstnanců
   - **Proces**:
     - Vrať délku pole `employees` jako počet zaměstnanců.

#### 14. `countWorkload(workload, employees)`
   - **Účel**: Počítá zaměstnance podle workload.
   - **Proces**:
     - Filtruj zaměstnance podle `workload`.
     - Vrať počet zaměstnanců jako délka vyfiltrované pole.

#### 15. `getAge(birthdate)`
   - **Účel**: Vypočítá aktuální věk na základě data narození.
   - **Proces**:
     - const birthday = převeď birthdate na Date objekt.
     - const today = aktuální Date objekt.
     - Spočítej rozdíl mezi aktuálním rokem a rokem narození.
     - Pokud je aktuální měsíc nebo aktuální měsíc a den před dnem narození, odečti 1 od věku.
     - Vrať věk.

#### 16. `getAverageAge(employees)`
   - **Účel**: Vypočítá průměrný věk všech zaměstnanců.
   - **Proces**:
     - const total = Použij funkci reduce pro součet věků, použij funkci `getAge`.
     - const average = total / počet zaměstnanců v employees
     - Vrať průměrný věk zaokrouhlené na jedno desetinné místo

#### 17. `getMinAge(employees)`
   - **Účel**: Najde nejmenší věk
   - **Proces**:
     - Pokud pole `employees` není prázdné:
       - Použij reduce(redukuj) pole k nalezení zaměstnance s nejstarším datem narození
       - Použij `getAge` na nejstarší datum narození.
       - Vrať tento věk.

#### 18. `getMaxAge(employees)`
   - **Účel**: Najde největší věk mezi zaměstnanci.
   - **Proces**:
     - Použij reduce(redukuj) pole k nalezení zaměstnance s nejmladším datem narození.
     - Použij `getAge` na nejmladší datum narození.
     - Vrať tento věk.

#### 19. `getMedianAge(employees)`
   - **Účel**: Vypočítá medián věku
   - **Proces**:
     - Seřaď `employees` podle data narození.
     - Pokud je počet zaměstnanců lichý, vrať index ve středu pole.
     - Pokud je počet sudý, spočítej průměr věků v indexexh (N/2)-1 a (N/2) kde N je délka pole
       a vrať hodnotu.

#### 20. `getFemaleEmployeeAvgWorkload(employees)`
   - **Účel**: Vypočítá průměrnou pracovní zátěž(workload) mezi ženskými zaměstnanci
   - **Proces**:
     - Filtruj `employees` na základě pohlaví "female"
     - Pokud není žádná žena, vrať 0.
     - const total = sečti workload pomocí reduce 
     - vrať průměr total / délka pole

#### 21. `sortByWorkload(employees)`
   - **Účel**: Seřadí zaměstnance podle pracovní zátěže(workload).
   - **Proces**:
     - Seřaď `employees` podle `workload`.
     - Vrať seřazené pole.

#### 22. `getMedianWorkload(employees)`
   - **Účel**: Vypočítá medián pracovní zátěže(workload) zaměstnanců
   - **Proces**:
     - Použij `sortByWorkload` k seřazení `employees`.
     - Pokud je počet zaměstnanců lichý, vrať index ve středu pole.
     - Pokud je počet sudý, spočítej průměr workload v indexexh (N/2)-1 a (N/2) kde N je délka pole
       a vrať hodnotu.

#### 23. `getEmployeeStatistics(employees)`
   - **Účel**: Generuje statistický report o zaměstnancích.
   - **Proces**:
     - Inicializace: let statistics = [];
     - Naplň pole `statistics`:
       - Celkový počet zaměstnanců použitím countEmployees(employees) .
       - Počet zaměstnanců s workload 10 použitím countWorkload(10, employees).
       - Počet zaměstnanců s workload 20 použitím countWorkload(20, employees)
       - Počet zaměstnanců s workload 30 použitím countWorkload(20, employees)
       - Počet zaměstnanců s workload 40 použitím countWorkload(30, employees)
       - Průměrný, minimální, maximální a medián věku.
       - Medián workload.
       - Průměrný workload žen.
       - Pole zaměstnanců seřazených podle workload
     - Vrať `statistics`.

#### 24. `main(dtoIn)`
   - **Účel**: Hlavní funkce pro spuštění generování zaměstnanců a dat.
   - **Proces**:
     - Inicializace let dtoOut = [];
     - Generuj zaměstnance `generateEmployeeData`.
     - Pokud se nevygeneroval žádný zaměstnanec tak vrať prázdný dtoOut
     - Generuj statistiky pomocí `getEmployeeStatistics`.
     - Vypiš výsledek pomocí stringify protože console log má max hloubku ponoření 2.
     - Vrať výsledek
