const elements = ['X', 'O'];
const rowLength = 3;

const getHorizontalLines = (fields) => {
    let horizontalLines = [[], [], []];
    for (i = 0; i < fields.length; i++) {
        const j = Math.floor(i / rowLength);
        horizontalLines[j].push(fields[i])
    }
    return horizontalLines
};

const getVerticalLines = (fields) => {
    let verticalLines = [[], [], []];
    for (i = 0; i < fields.length; i++) {
        const j = i % rowLength;
        verticalLines[j].push(fields[i]);
    }
    return verticalLines
};

const getNameOfTheWinner = (line) => {
    if(line.every(element => element === elements[0])){
        return elements[0]
    } else if (line.every(element => element === elements[1])){
        return elements[1]
    }
    return false
};

const getWinner = (fields) => {
    let horizontalLines = getHorizontalLines(fields);
    let verticalLines = getVerticalLines(fields);
    for (i = 0; i < horizontalLines.length; i++) {
        if(getNameOfTheWinner(horizontalLines[i]) && horizontalLines[i].length === rowLength){
            return {
                winner: true,
                name: getNameOfTheWinner(horizontalLines[i])
            }
        }
        if(getNameOfTheWinner(verticalLines[i]) && verticalLines[i].length === rowLength){
            return {
                winner: true,
                name: getNameOfTheWinner(verticalLines[i])
            }
        }
    }
    return {
        winner: false
    };
};

module.exports = {
    getWinner
};