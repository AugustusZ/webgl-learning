export class DrawingPreset {
  static circle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, c: string) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
  }

  static getRamdomHexColor = () =>
    '#' +
    Math.random()
      .toString(16)
      .slice(2, 8)
      .toUpperCase();

  static GetRandomHex() {
    return this.RGBToHex(
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255)
    );
  }
  // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  static RGBToHex(r: number, g: number, b: number) {
    return (
      '#' +
      [Math.round(r), Math.round(g), Math.round(b)]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
    );
  }
  constructor() {
    /**/
  }
}
