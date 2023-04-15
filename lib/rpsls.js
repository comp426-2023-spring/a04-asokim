export function rps(userMove) {
    //TODO: create function
    const moves = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random()*moves.length);
    const compMove = moves[rand];

    if (userMove == undefined){
        return {
            player: moves[rand]
        };
    }

    if (!moves.includes(userMove.toLowerCase())){
        //console.error(`${userMove} not in range.`);
        throw new Error();
    }

    let result = "";

    if (userMove == compMove) {
        result = "tie";
    } else if (userMove == "scissors" && compMove == "paper" ||
    userMove == "rock" && compMove == "scissors" ||
    userMove == "paper" && compMove == "rock") {
        result = "win";
    } else {
        result = "lose";
    }

    return {
        player: userMove,
        opponent: compMove,
        result: result
    };

}

export function rpsls(userMove) {
    //TODO: create function
    const moves = ["rock", "paper", "scissors", "spock", "lizard"]
    const rand = Math.floor(Math.random()*moves.length);
    const compMove = moves[rand];

    if (userMove == undefined){
        return {
            player: moves[rand]
        };
    }

    if (!moves.includes(userMove.toLowerCase())){
        //console.error(`${userMove} not in range.`);
        throw new Error();
    }

    let result = "";

    if (userMove == compMove) {
        result = "tie";
    } else if (userMove == "scissors" && compMove == "paper" ||
    userMove == "scissors" && compMove == "lizard" ||
    userMove == "rock" && compMove == "scissors" ||
    userMove == "rock" && compMove == "lizard" ||
    userMove == "lizard" && compMove == "paper" ||
    userMove == "lizard" && compMove == "spock" ||
    userMove == "paper" && compMove == "rock" ||
    userMove == "paper" && compMove == "spock" ||
    userMove == "spock" && compMove == "scissors" ||
    userMove == "spock" && compMove == "rock") {
        result = "win";
    } else {
        result = "lose";
    }

    return {
        player: userMove,
        opponent: compMove,
        result: result
    };
}