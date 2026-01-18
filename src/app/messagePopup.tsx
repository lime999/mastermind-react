type popupProps = {
    handlePopupClose: () => void;
    message: string;
    solution: number[];
    colors: string[];
};

export function MessagePopup({ handlePopupClose, message, solution, colors }: popupProps) {

    let messagex;

    if (message === "resultsexplanantion") {

        messagex =

            <h2
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#333333',
                    textAlign: 'center'
                }}
            >
                The <span style={{ color: '#33ff00ff' }}>first number</span> indicates how many colors are <span style={{ color: '#33ff00ff' }}>correct</span> and in the <span style={{ color: '#33ff00ff' }}>correct</span> position.
                <br />
                The <span style={{ color: '#ffae00ff' }}>second number</span> indicates how many colors are <span style={{ color: '#33ff00ff' }}>correct</span> but in the <span style={{ color: '#ff0000ff' }}>wrong</span> position.

            </h2>
    } else if (message === "showsolution") {
        const solutionPins = [];
        for (let i = 0; i < 4; i++) {
            solutionPins.push(<button
                style={{
                    background: colors[solution[i]],
                    border: '2px solid #222222cc',
                }}
                className="pin"
                key={i}
            ></button>)

        }
        messagex =
            <div>

                <h2
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        color: '#333333',
                        textAlign: 'center'
                    }}
                >
                    Solution:
                </h2>
                <div
                    className="row"
                >
                    {solutionPins}
                </div>
            </div>

    } else {
        messagex = <h2
            style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#333333',
                textAlign: 'center'
            }}
        >
            {message}
        </h2>;
    }





    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 50
            }}

            onClick={handlePopupClose}
        >
            <div
                style={{
                    backgroundColor: '#f9f9f9',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                    transform: 'scale(1)',
                    transition: 'transform 0.3s ease-in-out'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {messagex}

                <button
                    onClick={handlePopupClose}
                    className="popup-cancel-btn"

                >
                    Cancel
                </button>
            </div>
        </div>
    );
}


