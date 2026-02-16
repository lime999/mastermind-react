type PopupProps = {
    handlePopupClose: () => void;
    message: React.ReactNode | string;
    solution: number[];
    colors: string[];
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


    const content = <h2 style={headingStyle}>{message}</h2>;


    return (
        <div style={modalBackgroundStyle} onClick={handlePopupClose}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                {content}
                <button onClick={handlePopupClose} className="popup-cancel-btn">
                    Continue
                </button>
            </div>
        </div>
    );
}


