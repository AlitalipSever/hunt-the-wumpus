const textArt = require('./logo.js')

textArt.printLogo()


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
    console.log('The game started');

    const randomRooms = getRandomRooms()                            //  push the room numbers the array
    const playerRoom = randomRooms[5]                               //  get player room
    const wumpusRoom = randomRooms[0]                               //  get wumpus room
    const numberOfArrows = 5
    console.log(randomRooms)
    placeEverything(randomRooms)                                    // place the room number to cave array
    console.log(`== Wumpus is in room: ${randomRooms[0]}`)
    console.log(`== First bat is in room: ${randomRooms[1]}`)
    console.log(`== Second bat is in room: ${randomRooms[2]}`)
    console.log(`== First bottomless pit is in room: ${randomRooms[3]}`)
    console.log(`== First bottomless pit is in room: ${randomRooms[4]}`)
    console.log(`You are in room: ${playerRoom}`)


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


startGame()