# @sasapanchama/joystick

## How to use

``` sample.bash
$ npm i @sasapanchama/joystick
or
$ yarn add @sasapanchama/joystick
```

``` index.html
<div id="container"></div>
```


``` script.ts
import { Joystick } from "@sasapanchama/joystick";  

const container = document.getElementById("container");  

const joystick = new Joystick(container);  

joystick.$outerCircle.addEventListener("touchmove", (event) => {  
  const { angle, velocity } = joystick.handleTouchMoveEvent(event);  
});  

joystick.$outerCircle.addEventListener("touchend", () => {  
  const { angle, velocity } = joystick.handleTouchEndEvent();  
});  
```

## Interface
This is a TypeScript class that implements a joystick control. It creates two HTML elements: a parent element and a child element, representing the joystick handle. It calculates the center coordinates of the parent element, sets the limit of the joystick handle movement, and handles touch events to move the joystick handle and return joystick data. The class has two public methods, setSize and handleTouchEndEvent, and two private properties, centerX and centerY.
JoystickData Interface

``` type.ts
export interface JoystickData {
  angle: number | null;
  velocity: number;
}
```

The JoystickData interface defines the data structure that the joystick handler returns when the joystick handle is moved or released. It has two properties:

- angle: the angle of the joystick handle in radians. If the joystick handle is at the center, the value is null.
- velocity: the distance of the joystick handle from the center normalized between 0 and 1.