import { colors } from "../lib/pinColors";

type PinProps = {
  id: number;
  rowId: number;
  enabled: boolean;
  color: number;
  openPopup: (rowId: number, pinId: number) => void;
  selectedPin: { row: number; pin: number } | null;
  activatedPins: boolean[][];
};

export function Pin({ id, rowId, enabled, color, openPopup, selectedPin, activatedPins }: PinProps) {
  function handleClick() {
    if (!enabled) {
      return;
    }
    openPopup(id, rowId);
  }

  return (
    <button
      style={{
        background: activatedPins[rowId][id] ? colors[color] : '#000',
        border: selectedPin && selectedPin.row === rowId && selectedPin.pin === id ? '4px solid #833434ff' : '2px solid #222222cc',
        cursor: enabled ? 'pointer' : 'not-allowed'
      }}
      className="pin"
      onClick={handleClick}
    ></button>
  );
}