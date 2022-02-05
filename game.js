const textArt = require('./logo.js')
const readline = require('readline')
const colorize = require('./logcolors')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})




const cave = {
    1: {
        adjacent: [2, 5, 8],
        whatsInThere: ''
    },
    2: {
        adjacent: [1, 3, 10],
        whatsInThere: ''
    },
    3: {
        adjacent: [2, 4, 12],
        whatsInThere: ''
    },
    4: {
        adjacent: [3, 5, 14],
        whatsInThere: ''
    },
    5: {
        adjacent: [1, 4, 6],
        whatsInThere: ''
    },
    6: {
        adjacent: [5, 7, 15],
        whatsInThere: ''
    },
    7: {
        adjacent: [6, 8, 17],
        whatsInThere: ''
    },
    8: {
        adjacent: [1, 7, 9],
        whatsInThere: ''
    },
    9: {
        adjacent: [8, 10, 18],
        whatsInThere: ''
    },
    10: {
        adjacent: [2, 9, 11],
        whatsInThere: ''
    },
    11: {
        adjacent: [10, 12, 19],
        whatsInThere: ''
    },
    12: {
        adjacent: [3, 11, 13],
        whatsInThere: ''
    },
    13: {
        adjacent: [12, 14, 20],
        whatsInThere: ''
    },
    14: {
        adjacent: [4, 13, 15],
        whatsInThere: ''
    },
    15: {
        adjacent: [6, 14, 16],
        whatsInThere: ''
    },
    16: {
        adjacent: [15, 17, 20],
        whatsInThere: ''
    },
    17: {
        adjacent: [7, 16, 18],
        whatsInThere: ''
    },
    18: {
        adjacent: [9, 17, 19],
        whatsInThere: ''
    },
    19: {
        adjacent: [11, 18, 20],
        whatsInThere: ''
    },
    20: {
        adjacent: [16, 19, 13],
        whatsInThere: ''
    }
}

const wumpus = 'wumpus'
const bat = 'bat'
const player = 'player'
const bottomlessPit = 'bottomless pit'
const shotOrMoveQuestion = 'Shoot or Move (S/M) '
const whereToShootQuestion = 'Where to shoot? '
const whereToMoveQuestion = 'Where to move? '

const startGame = () => {
    console.log(colorize(textArt.logo).blue);
    console.log('The game started')

    const randomRooms = getRandomRooms()                            //  push the room numbers the array
    const playerRoom = randomRooms[5]                               //  get player room
    const wumpusRoom = randomRooms[0]                               //  get wumpus room
    const numberOfArrows = 5
//    console.log(randomRooms)
    placeEverything(randomRooms)                                    // place the room number to cave array
//    console.log(`== Wumpus is in room: ${randomRooms[0]}`)        // debugging
//    console.log(`== First bat is in room: ${randomRooms[1]}`)
//    console.log(`== Second bat is in room: ${randomRooms[2]}`)
//    console.log(`== First bottomless pit is in room: ${randomRooms[3]}`)
//    console.log(`== First bottomless pit is in room: ${randomRooms[4]}`)
//    console.log(`You are in room: ${playerRoom}`)

    checkRoom(playerRoom)
    showAdjacentInformation(playerRoom)
    askQuestion(shotOrMoveQuestion, playerRoom, wumpusRoom, randomRooms, numberOfArrows);
}

const placeEverything = randomRooms => {
    const [
        wumpusRoom,
        firstBatRoom,
        secondBatRoom,
        firstPitsRoom,
        secondPitsRoom,
        playerRoom
    ] = randomRooms
    cave[wumpusRoom].whatsInThere = wumpus
    cave[firstBatRoom].whatsInThere = bat
    cave[secondBatRoom].whatsInThere = bat
    cave[firstPitsRoom].whatsInThere = bottomlessPit
    cave[secondPitsRoom].whatsInThere = bottomlessPit
    cave[playerRoom].whatsInThere = player
}

const getRandomRooms = () => {                                      //  random rooms for wumpus, 2 bats, 2 pits, player
    const randomRooms = []

    const getRandomNumber = () => {
        while (randomRooms.length < 6) {                            // create random 5 place for wumpus, bat, pit, player
            const number = Math.ceil(Math.random() * 20)

            if (randomRooms.includes(number)) {                     //  check the unique numbers
                getRandomNumber()
            } else {
                randomRooms.push(number)
            }
        }

        return randomRooms
    }

    return getRandomNumber()
}

const checkRoom = playerRoom => {                                                   // show info about the player's room..
    for (let i = 0; i < cave[playerRoom].adjacent.length; i++) {                    // when move to new room
        switch (cave[cave[playerRoom].adjacent[i]].whatsInThere) {                  // look to adjacent and get number to cave array..
            case bat:                                                               // check cave.whatsInThere?
                console.log("You hear a rustling.");
                break
            case wumpus:
                console.log("You smell something terrible nearby.");
                break
            case bottomlessPit:
                console.log("You feel a cold wind blowing from a nearby cavern.");
                break
            default:
                break
        }
    }
}

const showAdjacentInformation = playerRoom => {                                     // show adjacent rooms to player
    const [
        firstAdjacent,
        secondAdjacent,
        thirdAdjacent
    ] = cave[playerRoom].adjacent                                                   // get the rooms from cave array
    let rooms = `Tunnel leads to ${firstAdjacent}. ${secondAdjacent}. ${thirdAdjacent}`
    console.log(rooms);
}

const askQuestion = (question, playerRoom, wumpusRoom, randomRooms, numberOfArrows) => {                //  ask question to player
    rl.question(question, answer => {
        if (question === shotOrMoveQuestion) {                                                          //  check answer and show the rooms
            if (answer === 'S') {
                console.log(`Possible places to shoot ${cave[playerRoom].adjacent}`)                    // If answer right, ask new question...
                askQuestion(whereToShootQuestion, playerRoom, wumpusRoom, randomRooms, numberOfArrows)      // with whereToShootQuestion
            } else if (answer === 'M') {
                askQuestion(whereToMoveQuestion, playerRoom, wumpusRoom, randomRooms, numberOfArrows)   // new question with whereToMoveQuestion
            } else {
                console.log('Wrong input');                                                             // check right answer, if not again shotOrMoveQuestion
                askQuestion(shotOrMoveQuestion, playerRoom, wumpusRoom, randomRooms, numberOfArrows);
            }
        } else if (question === whereToShootQuestion) {
            const roomToShoot = Number(answer)
            if(cave[playerRoom].adjacent.includes(roomToShoot)) {
                const whatsInTheRoom = cave[roomToShoot].whatsInThere

                if (whatsInTheRoom === wumpus) {
                    console.log('You win!');
                    rl.close();
                } else {
                    numberOfArrows -= 1
                    console.log("numberOfArrows: ", numberOfArrows);
                    if (numberOfArrows === 0) {
                        console.log('you lost the game');
                        rl.close();
                    } else {
                        console.log('There was nothing in there...')
                        let wumpusMovingChance = Math.floor(Math.random() * 100)
                        if (wumpusMovingChance <= 75) {                                             // wumpus chages the room
                            let newWumpusRoomIndex = Math.floor(Math.random() * 3)
                            let newWumpusRoom = cave[wumpusRoom].adjacent[newWumpusRoomIndex]
                            cave[wumpusRoom].whatsInThere = ''
                            cave[newWumpusRoom].whatsInThere = wumpus
                            wumpusRoom = newWumpusRoom
                            randomRooms[0] = newWumpusRoom
                            //    console.log("New Wumpus room ", wumpusRoom);
                            if (wumpusRoom === playerRoom) {
                                console.log(' Wumpus is here, You died!');
                                rl.close();
                            }
                        }
                        askQuestion(shotOrMoveQuestion, playerRoom, wumpusRoom, randomRooms, numberOfArrows)
                    }
                }
            } else {
                console.log('Wrong input');
                askQuestion(whereToShootQuestion, playerRoom, wumpusRoom, randomRooms, numberOfArrows)
            }

        } else if (question === whereToMoveQuestion) {
            const roomToMove = Number(answer)
            if(cave[playerRoom].adjacent.includes(roomToMove)) {            // checks right input
                const whatsInTheRoom = cave[roomToMove].whatsInThere        // find what is in the room?
                cave[playerRoom].whatsInThere = ''                          // set blank player's previous room
                playerRoom = roomToMove                                     // set new value to playerRoom as global constant
                randomRooms[5] = roomToMove                                 // set new value to randomRooms as global const
                //    console.log(randomRooms)
                cave[playerRoom].whatsInThere = player                      // change cave AoO value
                checkRoom(playerRoom)                                       // show to player what's in the adjacent rooms

                if (whatsInTheRoom === bat) {                               // if there's a bat in new room
                    console.log('But you are going to new room with bat..');
                    let newRoom = Math.ceil(Math.random() * 20)          // try to find new random player room for bat
                    while (randomRooms.includes(newRoom)) {                 // check new random player room for bat...
                        newRoom = Math.ceil(Math.random() * 20)          // used by (pits, bats, player) or not
                    }                                                       // if used by others, try find not used room
                    cave[playerRoom].whatsInThere = bat                     // bat returned the old room
                    playerRoom = newRoom                                    // set player new room
                    randomRooms[5] = newRoom                                // set player new room in array
                    //    console.log(randomRooms)
                    console.log(`You are in room: ${playerRoom}`)
                    checkRoom(playerRoom)
                    cave[playerRoom].whatsInThere = player
                    showAdjacentInformation(playerRoom)
                    askQuestion(shotOrMoveQuestion, playerRoom, wumpusRoom, randomRooms, numberOfArrows)
                } else if (whatsInTheRoom === bottomlessPit) {
                    console.log('Bottomless Pit, you dead')
                    rl.close()
                } else if (whatsInTheRoom === wumpus) {
                    console.log('WUMPUS, you died')
                    rl.close()
                } else {
                    showAdjacentInformation(playerRoom)
                    askQuestion(shotOrMoveQuestion, playerRoom, wumpusRoom, randomRooms, numberOfArrows)
                }
            }else {
                console.log('Wrong input');
                askQuestion(whereToMoveQuestion, playerRoom, wumpusRoom, randomRooms, numberOfArrows)
            }
        }
    })
}

module.exports = {showAdjacentInformation, checkRoom, getRandomRooms, askQuestion}

startGame()