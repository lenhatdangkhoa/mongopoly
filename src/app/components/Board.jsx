"use client"
import styles from "/src/app/styles/Board.module.css"
import { useState, useEffect } from "react"

class GameBoard {
    game = [];
    constructor() {
        this.game[0] = new Tile("Go", 200, null, 0, 0);
        this.game[1] = new Tile("t1", 60, null, 0, 0);
        this.game[2] = new Tile("Chest", 0, null, 0, 0);
        this.game[3] = new Tile("t2", 60, null, 30, 0);
        this.game[4] = new Tile("Income Tax", 200, null, 0, 0);
        this.game[5] = new Tile("rail 1", 200, null, 100, 0);
        this.game[6] = new Tile("t3", 100, null, 50, 0);
        this.game[7] = new Tile("Chance", 0, null, 0, 0);
        this.game[8] = new Tile("t4", 100, null, 50, 0);
        this.game[9] = new Tile("t5", 120, null, 60, 0);
        this.game[10] = new Tile("Jail", 0, null, 0, 0);
        this.game[11] = new Tile("t6", 140, null, 70, 0);
        this.game[12] = new Tile("elec", 150, null, 75, 0);
        this.game[13] = new Tile("t7", 140, null, 70, 0);
        this.game[14] = new Tile("t8", 160, null, 80, 0);
        this.game[15] = new Tile("rail 2", 200, null, 100, 0);
        this.game[16] = new Tile("t9", 160, null, 80, 0);
        this.game[17] = new Tile("Chest", 0, null, 0, 0);
        this.game[18] = new Tile("t10", 180, null, 90, 0);
        this.game[19] = new Tile("t11", 200, null, 100, 0);
        this.game[20] = new Tile("park", 0, null, 0, 0);
        this.game[21] = new Tile("t12", 220, null, 110, 0);
        this.game[22] = new Tile("Chance", 0, null, 0, 0);
        this.game[23] = new Tile("t13", 220, null, 110, 0);
        this.game[24] = new Tile("t14", 240, null, 120, 0);
        this.game[25] = new Tile("rail 3", 200, null, 100, 0);
        this.game[26] = new Tile("t15", 260, null, 130, 0);
        this.game[27] = new Tile("t16", 260, null, 130, 0);
        this.game[28] = new Tile("water", 150, null, 75, 0);
        this.game[29] = new Tile("t17", 280, null, 140, 0);
        this.game[30] = new Tile("Lock", 0, null, 0, 0);
        this.game[31] = new Tile("t18", 300, null, 150, 0);
        this.game[32] = new Tile("t19", 300, null, 150, 0);
        this.game[33] = new Tile("Chest", 0, null, 0, 0);
        this.game[34] = new Tile("t20", 320, null, 160, 0);
        this.game[35] = new Tile("rail 3", 200, null, 100, 0);
        this.game[36] = new Tile("chance", 0, null, 0, 0);
        this.game[37] = new Tile("t21", 350, null, 175, 0);
        this.game[38] = new Tile("tax", 150, null, 0, 0);
        this.game[39] = new Tile("t22", 400, null, 200, 0);
    }
    rollDice() {
        const num1 = Math.floor(Math.random() * 6 + 1);
        const num2 = Math.floor(Math.random() * 6 + 1);
        return [num1, num2]
    }
}

class Tile {
    name;
    cost;
    owner;
    mortgage;
    house;
    constructor(name, cost, owner, mortgage, house) {
        this.name = name;
        this.cost = cost;
        this.owner = owner;
        this.mortgage = mortgage;
        this.house = house;
    }
    setOwner(owner) {
        this.owner = owner;
    }
    addHouse() {
        this.house++;
    }
}

class Player {
    name;
    position;
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    updatePosition(num) {
        this.position++;
    }
}

export default function Board() {
    const tiles = new GameBoard();
    //const player1 = new Player("Khoa", 0)
    const firstRow = tiles.game.slice(0, 11)
    const firstCol = tiles.game.slice(11, 20)
    const secondRow = tiles.game.slice(20, 32)
    const secondCol = tiles.game.slice(32, 40)

    const [player1, setPlayer1] = useState(new Player("Khoa", 0))
    const [dice, setDice] = useState([0,0])
    const [userOn, setUserOn] = useState(false)
    const handleGetDice = () => {
        console.log("dice")
        setDice(tiles.rollDice());
        

        //changePosition();
    }
    useEffect(() => {
        console.log("player")
        setPlayer1(player => {
            const newPos = player.position + dice[0] + dice[1]
            return { ...player, position: newPos }
        }
        )
        console.log(dice)
    }, [dice])
    const changePosition =() => {
        setPlayer1(player => {
            const newPos = player.position + dice
            console.log(dice)
            return { ...player, position: newPos }
        }
        )
    }
    return (
        <div>
            <h1 className={styles.header}>Mongopoly</h1>
            <button onClick={handleGetDice}>Roll Dice</button>
           <div>Dice rolled: {dice.length == 0 ? "" : dice[0] + " and " + dice[1]}</div>
           <div className={styles.board}>
                <div className={styles.row2}>
                    {secondRow.map((tile, index) => (
                        <div style={{ "borderStyle": "solid" }} id={styles.thirdTiles} key={index} >{tile.name} {tile.cost == 0 ? "" : "$" + tile.cost}</div>
                    ))}
                </div>
                <div className={styles.middle}>
                    <div className={styles.col1}>
                        {firstCol.map((tile, index) => (
                            <div style={{ "borderStyle": "solid" }} id={styles.secondTiles} key={index}>{tile.name} {tile.cost == 0 ? "" : "$" + tile.cost}</div>
                        ))}
                    </div>
                    <img src="https://miro.medium.com/v2/resize:fit:678/1*l2tlJsFNg2tH6QizegKkqA.png" className={styles.chae} />
                    <div className={styles.col2}>
                        {secondCol.map((tile, index) => (
                            <div style={{ "borderStyle": "solid" }} id={styles.fourthTiles} key={index} >{tile.name} {tile.cost == 0 ? "" : "$" + tile.cost}</div>
                        ))}
                    </div>
                </div>

                <div className={styles.row1}>
                    {firstRow.map((tile, index) => (
                        <div style={{ "borderStyle": "solid", backgroundColor: player1.position == index ? "red" : "green" }} id={styles.firstTiles} key={index}>{tile.name} {tile.cost == 0 ? "" : "$" + tile.cost}</div>
                    ))}
                </div>



            </div>

        </div>
    )
}