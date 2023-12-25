import styles from "/src/app/styles/Board.module.css"

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