import { exampleColors } from "./exampleColors";


export function popup(popupPosition: string[], visible: boolean) {

    return (
        <div className="popup" style={{ top: (popupPosition[0]), left: (popupPosition[1]), visibility: (visible ? "hidden" : "visible") }}>
            {exampleColors()}
        </div>
    );
}


