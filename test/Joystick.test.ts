import { JSDOM, DOMWindow } from "jsdom";
import { Joystick } from "../src/Joystick";

describe("Joystick", () => {
  let container: HTMLElement;
  let joystick: Joystick;

  beforeAll(() => {
    // Set up the DOM.
    const dom = new JSDOM(`<!DOCTYPE html><div id="container"></div>`);
    global.window = dom.window as DOMWindow & typeof globalThis;
    global.document = dom.window.document;
    container = document.getElementById("container")!;
  });

  beforeEach(() => {
    // Set up the Joystick instance.
    joystick = new Joystick(container);
  });

  afterEach(() => {
    // Clean up the Joystick instance.
    joystick.$container.removeChild(joystick.$outerCircle);
  });

  it("should create the joystick element within the container", () => {
    expect(container.contains(joystick.$outerCircle)).toBe(true);
  });

  it("should create the outer circle element with the correct styles", () => {
    expect(joystick.$outerCircle.style.margin).toBe("0 auto");
    expect(joystick.$outerCircle.style.width).toBe("240px");
    expect(joystick.$outerCircle.style.height).toBe("240px");
    expect(joystick.$outerCircle.style.boxSizing).toBe("border-box");
    expect(joystick.$outerCircle.style.border).toBe("4px solid black");
    expect(joystick.$outerCircle.style.borderRadius).toBe("120px");
    expect(joystick.$outerCircle.style.position).toBe("relative");
  });

  it("should create the inner circle element with the correct styles", () => {
    expect(joystick.$innerCircle.style.width).toBe("120px");
    expect(joystick.$innerCircle.style.height).toBe("120px");
    expect(joystick.$innerCircle.style.boxSizing).toBe("border-box");
    expect(joystick.$innerCircle.style.border).toBe("4px solid black");
    expect(joystick.$innerCircle.style.borderRadius).toBe("60px");
    expect(joystick.$innerCircle.style.backgroundColor).toBe("black");
    expect(joystick.$innerCircle.style.position).toBe("absolute");
    expect(joystick.$innerCircle.style.transform).toBe("translate(50%, 50%)");
  });

  it("should calculate the center coordinates and the limit of the joystick element", () => {
    expect(joystick.centerX).toBeCloseTo(container.getBoundingClientRect().left + container.clientWidth / 2);
    expect(joystick.centerY).toBeCloseTo(container.getBoundingClientRect().top + container.clientHeight / 2);
    expect(joystick.limit).toBe(container.clientWidth / 2);
  });
});
