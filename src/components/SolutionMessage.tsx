export function SolutionMessage(solution: number[], colors: string[]): React.ReactNode {
    return (
        <div>
            <h2 style=
                {{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#333333',
                    textAlign: 'center'
                }}
            >Solution:</h2>
            <div className="row">{solution.map((colorIndex, i) => (
                <button
                    key={i}
                    style={{
                        background: colors[colorIndex],
                        border: '2px solid #222222cc',
                    }}
                    className="pin"
                />
            ))}</div>
        </div>
    )
}