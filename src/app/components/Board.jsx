import styles from "/src/app/styles/Board.module.css"

class GameBoard {
    game;
    constructor() {
        this.game = new Tile("Go", 200, null, 0, 0);
        this.game.setNext(new Tile("t1", 60, null, 30, 0));
        t1 = this.game;
        this.game = game.getNext();
        this.game.setPrev(t1);
        this.game.setNext(new Tile("Chest", 0, null, 0, 0));
        c1 = this.game;
        this.game = game.getNext();
        this.game.setPrev(c1);
        this.game.setNext(new Tile("t2", 60, null, 30, 0))
        t2 = this.game;
        this.game = game.getNext();
        this.game.setPrev(t2);

    }
}

class Tile {
    name;
    cost;
    owner;
    mortgage;
    house;
    nextTile;
    prevTile;
    constructor(name, cost, owner, mortgage, house) {
        this.name = name;
        this.cost = cost;
        this.owner = owner;
        this.mortgage = mortgage;
        this.house = house;
    }
    getNext() {
        return this.nextTile;
    }
    getPrev() {
        return this.prevTile;
    }
    setNext(tile) {
        this.nextTile = tile;
    }
    setPrev(tile) {
        this.prevTile = tile;
    }
    setOwner(owner) {
        this.owner = owner;
    }
}


export default function Board() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2" className={styles.head}>Game Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Player</td>
                        <td>Money</td>
                        <td>Properties</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}