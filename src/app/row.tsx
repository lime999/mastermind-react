import { Pin } from "./pin";

type RowProps = {
  rowId: number;
  pinColors: number[];
  enabled: boolean;
  onColorChange: (rowId: number, pinId: number, newColor: number) => void;
};

export function Row({ rowId, pinColors, enabled, onColorChange }: RowProps) {
  const handlePinColorChange = (pinId: number, newColor: number) => {
    onColorChange(rowId, pinId, newColor);
  };

  return (
    <div className="row">
      {[0, 1, 2, 3].map((pinId) => (
        <Pin
          key={pinId}
          id={pinId}
          enabled={enabled}
          color={pinColors[pinId]}
          onColorChange={handlePinColorChange}
        />
      ))}
    </div>
  );
}