declare class Circ {
  cx: number;
  cy: number;
  r: number;
}

declare class Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

declare type Moving<T> = T & {
  vx: number;
  vy: number;
};
