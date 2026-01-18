import { COLORS } from "./PinColors";

type PopupProps = {
    onColorSelect: (newColor: number) => void;
    handlePopupClose: () => void;
};

export function Popup({ onColorSelect, handlePopupClose }: PopupProps) {
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
                >Choose a Color</h2>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1rem'
                    }}

                >
                    {COLORS.map((color) => (
                        <button
                            key={color}
                            onClick={() => onColorSelect(COLORS.indexOf(color))}
                            className="popup-pins"
                            style={{
                                backgroundColor: color,
                                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                            }}


                            aria-label={color}
                            title={color}
                        />
                    ))}
                </div>
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


