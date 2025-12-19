import { colors } from "./pinColors";

type pinProps = {
  id: number;
  rowId: number;
  enabled: boolean;
  color: number;
  openPopup: (rowId: number, pinId: number) => void;
  selectedPin : { row: number; pin: number } | null;
};

export function Pin({ id, rowId, enabled, color, openPopup, selectedPin }: pinProps) {
  function handleClick() {
    if (!enabled) {
      return;
    }
    openPopup(id, rowId);
  }
  
  return (
    <button
      style={{ background: colors[color], border : selectedPin && selectedPin.row === rowId && selectedPin.pin === id ? '4px solid #000000' : '2px solid #222222cc' }}
      className="pin"
      onClick={handleClick}
    ></button>
  );
}