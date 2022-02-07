export type Player = 'X' | 'O' | 'Both of you' | null;
export interface SquareProps {
  onClick: ()=> void;
  value: Player;
  winner: Player;
}