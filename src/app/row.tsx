import { Pin } from "./pin";

type RowProps = {
  rowId: number;
  pinColors: number[];
  enabled: boolean;
  openPopup: (rowId: number, pinId: number) => void;
};

export function Row({ rowId, pinColors, enabled, openPopup }: RowProps) {
  return (
    <div className="row">
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
        />
      ))}
    </div>
  );
}