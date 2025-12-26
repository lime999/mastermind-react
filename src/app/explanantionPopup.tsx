type popupProps = {
    handlePopupClose: () => void;
};

export function ExplanationPopup({ handlePopupClose }: popupProps) {

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


