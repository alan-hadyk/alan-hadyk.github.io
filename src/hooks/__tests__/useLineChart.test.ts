import { clearCanvas, getLineCoordinates } from "<hooks>/useLineChart";

describe("hooks / useLineChart", () => {
  describe("clearCanvas", () => {
    test("should return undefined if context is not defined", () => {
      const canvas: HTMLCanvasElement = document.createElement("canvas");

      expect(
        clearCanvas({
          canvas,
          context: undefined,
          height: 100,
          width: 100
        })
      ).toEqual(undefined);

      expect(
        clearCanvas({
          canvas,
          context: null,
          height: 100,
          width: 100
        })
      ).toEqual(undefined);
    });

    test("should not set canvas width and height if context is not defined", () => {
      const canvas: HTMLCanvasElement = document.createElement("canvas");

      canvas.width = 100;
      canvas.height = 100;

      expect(canvas.width).toEqual(100);
      expect(canvas.height).toEqual(100);

      clearCanvas({
        canvas,
        context: undefined,
        height: 300,
        width: 300
      });

      expect(canvas.width).toEqual(100);
      expect(canvas.height).toEqual(100);
    });

    test("should be able to set width and height of canvas", () => {
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      const context: CanvasRenderingContext2D =
        canvas && canvas.getContext("2d");

      canvas.width = 100;
      canvas.height = 100;

      expect(canvas.width).toEqual(100);
      expect(canvas.height).toEqual(100);

      clearCanvas({
        canvas,
        context,
        height: 200,
        width: 200
      });

      expect(canvas.width).toEqual(200);
      expect(canvas.height).toEqual(200);
    });

    test("should reset context", () => {
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      const context: CanvasRenderingContext2D =
        canvas && canvas.getContext("2d");

      const clearRect = jest.fn();
      const beginPath = jest.fn();

      context.clearRect = clearRect;
      context.strokeStyle = "#FFF";
      context.shadowOffsetX = 150;
      context.shadowOffsetY = 300;
      context.shadowColor = "#000";
      context.shadowBlur = 40;
      context.beginPath = beginPath;

      clearCanvas({
        canvas,
        context,
        height: 200,
        width: 200
      });

      expect(clearRect).toHaveBeenCalledWith(0, 0, 200, 200);
      expect(context.strokeStyle).toEqual("#78b0b5");
      expect(context.shadowOffsetX).toEqual(0);
      expect(context.shadowOffsetY).toEqual(0);
      expect(context.shadowColor).toEqual("#bcd8db");
      expect(context.shadowBlur).toEqual(8);
      expect(beginPath).toHaveBeenCalledTimes(1);
    });
  });

  describe("getLineCoordinates", () => {
    test("should return correct coordinates", () => {
      const nextItem = {
        time: 234234,
        value: 45
      };

      expect(
        getLineCoordinates({
          height: 55,
          maxTime: 932784,
          nextItem,
          time: 111345,
          value: 25,
          width: 33
        })
      ).toEqual({
        x1: 3.939159548191221,
        x2: 8.286722327998765,
        y1: 32.083333333333336,
        y2: 13.75
      });
    });
  });
});
