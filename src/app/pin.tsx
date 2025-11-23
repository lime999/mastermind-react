import { colors } from "./pinColors";

type pinProps = {
  id: number;
  rowId: number;
  enabled: boolean;
  color: number;
  openPopup: (rowId: number, pinId: number) => void;
};

export function Pin({ id, rowId, enabled, color, openPopup }: pinProps) {
  function handleClick() {
    if (!enabled) {
      return;
    }
    openPopup(id, rowId);
  }
  
  return (
    <button
      style={{ background: colors[color] }}
      className="pin"
      onClick={handleClick}
    ></button>
  );
}