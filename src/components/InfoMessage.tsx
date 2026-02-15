export function InfoMessage(): React.ReactNode {
    return (
        <div>
            <h2 style={
                {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#333333',
                    textAlign: 'center'
                }

            }>How to play:</h2>
            <p style={{ fontSize: '1.5rem', color: '#555555', textAlign: 'center' }}>
                Try to guess the secret code in 10 tries or less.
                <br />
                Each guess is a row of 4 colored pins.
                <br />
                After each guess, you&apos;ll get feedback in the form of two numbers to the left of the pins.
                <br />
                <br />
                The <span style={{ color: '#1e9400ff' }}>first number</span> indicates how many colors are <span style={{ color: '#1e9400ff' }}>correct</span> and in the <span style={{ color: '#1e9400ff' }}>correct</span> position.
                <br />
                The <span style={{ color: '#c98900ff' }}>second number</span> indicates how many colors are <span style={{ color: '#1e9400ff' }}>correct</span> but in the <span style={{ color: '#ff0000ff' }}>wrong</span> position.
            </p>
            <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#333333',
                textAlign: 'center',
                textDecoration: 'underline'
            }}>
                There are no duplicate colors in the solution!
            </h2>
        </div>
    )
}