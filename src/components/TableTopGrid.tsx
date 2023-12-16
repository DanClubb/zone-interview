import '../styles/table-top-grid.css'

export default function TableTopGrid() {
    const cells: JSX.Element[] = []
    for (let i = 0; i < 25; i++) {
        cells.push(<div id="i" key='i' className="cell" data-testid="test"></div>)
    }
    
    return (
        <div className="table-top-grid">
            {cells.map(cell => cell)}
        </div>
    )
}
