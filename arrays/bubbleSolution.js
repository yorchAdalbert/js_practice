let scores = [60, 50, 60, 68, 54, 54, 58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

let costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];

const printScores = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(`Bubble solution #${i} score: ${array[i]}`);
    }
}

const getHighScore = array => {
    let highScore = 0;

    for (let i = 0; i < array.length; i++) {
        if (highScore < array[i])
            highScore = array[i];
    }

    return highScore;
}

const getBestSolutions = (array, highScore) => {
    let bestSolutions = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === highScore)
            bestSolutions.push(i);
    }

    return bestSolutions;
}

const getMostCostEffectiveSolution = (scores, costs, highScore) => {
    let cost = 100;
    let index;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }

    }

    return index;
}

let highScore = getHighScore(scores);
let bestSolutions = getBestSolutions(scores, highScore);
let mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);

printScores(scores);
console.log(`Bubble tests: ${scores.length}`);
console.log(`Highest bubble score: ${highScore}`);
console.log(`Solutions with the highest score: ${bestSolutions}`);
console.log(`Bubble Solution # ${mostCostEffective} is the most cost effective.`);


