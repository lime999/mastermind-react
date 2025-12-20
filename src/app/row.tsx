import { Pin } from "./pin";

type RowProps = {
  rowId: number;
  pinColors: number[];
  enabled: boolean;
  openPopup: (rowId: number, pinId: number) => void;
  selectedPin: { row: number; pin: number } | null;
};

export function Row({ rowId, pinColors, enabled, openPopup, selectedPin }: RowProps) {
  return (
    <div className="row" style={{ background: enabled ? "#61d800ff" : "#ffffffff" }}>
      {[0, 1, 2, 3].map((pinId) => (
        <Pin
          key={pinId}
          id={pinId}
          rowId={rowId}
          enabled={enabled}
          color={pinColors[pinId]}
          openPopup={(pinId: number, newColor: number) => {
            openPopup(rowId, pinId);
          }}
          selectedPin={selectedPin}
        />
      ))}
    </div>
  );
}