import { colors } from './pinColors';

export function exampleColors() {
  const buttons = [];
  for (let i = 1; i < 8; i++) {
    buttons.push(<button key={i} className="pin" style={{ backgroundColor: colors[i] }}></button>);
  }
  return buttons;
}