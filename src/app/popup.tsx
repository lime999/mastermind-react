import { colors } from "./pinColors";


type popupProps = {
    onColorSelect: (newColor: number) => void;
    handlePopupClose: () => void;
};

export function Popup({ onColorSelect, handlePopupClose }: popupProps) {

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={handlePopupClose}
        >
            <div
                className="bg-white rounded-2xl p-6 shadow-2xl scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">Choose a Color</h2>
                <div className="grid grid-cols-4 gap-3">
                    {colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => onColorSelect(colors.indexOf(color))}
                            className="w-16 h-16 rounded-full border-4 border-gray-300 hover:border-gray-500 transform hover:scale-110 transition-all shadow-lg"
                            style={{
                                backgroundColor: color,
                                boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                            }}
                            aria-label={color}
                            title={color}
                        />
                    ))}
                </div>
                <button
                    onClick={handlePopupClose}
                    className="mt-4 w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-medium transition-colors"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}


