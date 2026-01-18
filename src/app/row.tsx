import { Pin } from "./pin";

type RowProps = {
  rowId: number;
  pinColors: number[];
  enabled: boolean;
  openPopup: (rowId: number, pinId: number) => void;
  selectedPin: { row: number; pin: number } | null;
  activatedPins: boolean[][];
};

export function Row({ rowId, pinColors, enabled, openPopup, selectedPin, activatedPins }: RowProps) {
  return (
    <div className="row" style={{ background: enabled ? "#61d800ff" : "#ffffffff", cursor: enabled ? "default" : "not-allowed" }}>
      {[0, 1, 2, 3].map((pinId) => (
        <Pin
          key={pinId}
          id={pinId}
          rowId={rowId}
          enabled={enabled}
          color={pinColors[pinId]}
          openPopup={(pinId: number) => {
            openPopup(rowId, pinId);
          }}
          selectedPin={selectedPin}
          activatedPins={activatedPins}
        />
      ))}
    </div>
  );
}