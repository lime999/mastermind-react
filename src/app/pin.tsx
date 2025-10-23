import { colors } from "./pinColors";

type pinProps = {
  id: number;
  enabled: boolean;
  color: number;
  onColorChange: (id: number, newColor: number) => void;
};

export function Pin({ id, enabled, color, onColorChange }: pinProps) {
  function handleClick() {
    if (!enabled) {
      return;
    }
    const newColor = color > 7 ? 0 : color + 1;
    onColorChange(id, newColor);
  }
  
  return (
    <button
      style={{ background: colors[color] }}
      className="pin"
      onClick={handleClick}
    ></button>
  );
}