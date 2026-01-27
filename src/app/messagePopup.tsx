type PopupProps = {
    handlePopupClose: () => void;
    message: string;
    solution: number[];
    colors: string[];
};

const MESSAGES = {
    RESULTS_EXPLANATION: "resultsexplanation",
    SHOW_SOLUTION: "showsolution",
    INFO: "info"
};

const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    marginBottom: '1rem',
    color: '#333333',
    textAlign: 'center' as const
};

const modalBackgroundStyle = {
    position: 'fixed' as const,
    inset: 0,
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    zIndex: 50
};

const modalContentStyle = {
    backgroundColor: '#f9f9f9',
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    transform: 'scale(1)',
    transition: 'transform 0.3s ease-in-out'
};

export function MessagePopup({ handlePopupClose, message, solution, colors }: PopupProps) {
    let content;

    if (message === MESSAGES.RESULTS_EXPLANATION) {
        content = (
            <h2 style={headingStyle}>
                The <span style={{ color: '#1e9400ff' }}>first number</span> indicates how many colors are <span style={{ color: '#1e9400ff' }}>correct</span> and in the <span style={{ color: '#1e9400ff' }}>correct</span> position.
                <br />
                The <span style={{ color: '#c98900ff' }}>second number</span> indicates how many colors are <span style={{ color: '#1e9400ff' }}>correct</span> but in the <span style={{ color: '#ff0000ff' }}>wrong</span> position.
            </h2>
        );
    } else if (message === MESSAGES.SHOW_SOLUTION) {
        const solutionPins = solution.map((colorIndex, i) => (
            <button
                key={i}
                style={{
                    background: colors[colorIndex],
                    border: '2px solid #222222cc',
                }}
                className="pin"
            />
        )); 
        content = (
            <div>
                <h2 style={headingStyle}>Solution:</h2>
                <div className="row">{solutionPins}</div>
            </div>
        );
    } else if (message === MESSAGES.INFO) {
        content = (
            <div>
                <h2 style={headingStyle}>How to play:</h2>
                <p style={{ fontSize: '1.5rem', color: '#555555', textAlign: 'center' }}>
                    Try to guess the secret code in 10 tries or less.
                    <br />
                    Each guess is a row of 4 colored pins.
                    <br />
                    After each guess, you&apos;ll get feedback in the form of two numbers to the left of the pins.
                </p>
                <h2 style={{ ...headingStyle, textDecoration: 'underline' }}>
                    There are no duplicate colors in the solution!
                </h2>
            </div>
        );
    } else {
        content = <h2 style={headingStyle}>{message}</h2>;
    }

    return (
        <div style={modalBackgroundStyle} onClick={handlePopupClose}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                {content}
                <button onClick={handlePopupClose} className="popup-cancel-btn">
                    Cancel
                </button>
            </div>
        </div>
    );
}


