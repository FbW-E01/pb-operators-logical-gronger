// 0. Declare two variables: `isDogBetter` with the value of `true`, and `isCatBetter` with the value of `false`.

const isDogBetter = true;
const isCatBetter = false;


// 1. Check the result of:

// - a) isDogBetter AND isCatBetter.

console.log(isDogBetter && isCatBetter);

//Here, we are checking whether both variables are true

// - b) isDogBetter OR isCatBetter.

console.log(isDogBetter || isCatBetter);

// we are checking whether one or both variables are true. Only one needs to be true.

// - c) NOT (isDogBetter AND isCatBetter).

console.log(!(isDogBetter && isCatBetter));

// we are checking whether they are NOT true, the ! negates the statement.

// 2. Declare three more variables `atoms`, `sandGrains`, `starsInSky`. Give these variables number values.

const atoms = 44565467;
const sandGrains = 239498583;
const starsInSky = 3995955884839;

// 3. Check the result of whether:

// - a) `atoms` is greater than `starsInSky` AND `atoms` is greater than `sandGrains`.

console.log((atoms > starsInSky) && (atoms > sandGrains));

// FIrst, we are checking whether atoms is greater and starsInTheSky, then if atoms is greater than sandGrains and the && operator checks whether both of these two statements are true. Both must be true to get a true boolean

// - b) `atoms` is NOT equal to `sandGrains`.

console.log(atoms !== sandGrains);

//The !== operator will return true is the variables do NOT have the same value.

// - c) `starsInSky` is less than `sandGrains` OR `starsInSky` is greater than `atoms`.

console.log((starsInSky < sandGrains) || (starsInSky > atoms));

//The first statement checks whether starsInTheSky is less than sandGrains and the second one checks whether starsInSky is greater than atoms, and the || operator checks whether either one or the other is true. One of them being true will result in true being printed to the console. as will if both are true. Both need to be false for false to be printed.

// - d) `atoms` is equal to `starsInSky` OR `atoms` is NOT equal to `sandGrains`.

console.log((atoms === starsInSky) || (atoms !== sandGrains));

// If atoms are the same as starsInSky OR if atoms is not the same as sandGrains, true will be printed to the console.

// - e) `atoms` is greater than or equal to 10 AND `sandGrains` is less than or equal to 10.

console.log((atoms <= 10) && (sandGrains <= 10));

//First we are checking whether atoms are less than or equal to 10, then we are checking whether the value of sandGrains is less than or equal to 10. If both are true, true will be printed. If only one is, false will be printed.

// - f) `atoms` multiplied by `starsInSky` is less than 100 OR whether `atoms` multiplied by `sandGrains` is greater than 100.

console.log(((atoms * starsInSky) < 100) || ((atoms * sandGrains) < 100))

// First we check if atoms multiplied by starsInSky is less than 100. In the second statement we check if atoms multiplied by sandGrains is less than 100. THe || operator means that if one of these statements is true, then true will be printed to the console.

// 4. BONUS: In your own words, explain the logic of each result in a comment after the result.

// DONE !!!