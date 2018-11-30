import React from "react";
import { PomodoroContainer } from "./../src/components/PomodoroContainer";

import renderer from "react-test-renderer";

test("renders as pomodoro", () => {
  const tree = renderer
    .create(<PomodoroContainer isPomodoro={true} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<BVLinearGradient
  colors={
    Array [
      4294924083,
      4292088081,
    ]
  }
  endPoint={
    Object {
      "x": 0.5,
      "y": 1,
    }
  }
  locations={null}
  startPoint={
    Object {
      "x": 0.5,
      "y": 0,
    }
  }
  style={
    Object {
      "alignItems": "center",
      "backgroundColor": "#FF5733",
      "flex": 1,
      "justifyContent": "center",
    }
  }
/>
`);
});

test("renders as not pomodoro", () => {
  const tree = renderer
    .create(<PomodoroContainer isPomodoro={false} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<BVLinearGradient
  colors={
    Array [
      4292540326,
      4287353373,
    ]
  }
  endPoint={
    Object {
      "x": 0.5,
      "y": 1,
    }
  }
  locations={null}
  startPoint={
    Object {
      "x": 0.5,
      "y": 0,
    }
  }
  style={
    Object {
      "alignItems": "center",
      "backgroundColor": "#DAF7A6",
      "flex": 1,
      "justifyContent": "center",
    }
  }
/>
`);
});

test("renders as not pomodoro by default", () => {
  const tree = renderer.create(<PomodoroContainer />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<BVLinearGradient
  colors={
    Array [
      4292540326,
      4287353373,
    ]
  }
  endPoint={
    Object {
      "x": 0.5,
      "y": 1,
    }
  }
  locations={null}
  startPoint={
    Object {
      "x": 0.5,
      "y": 0,
    }
  }
  style={
    Object {
      "alignItems": "center",
      "backgroundColor": "#DAF7A6",
      "flex": 1,
      "justifyContent": "center",
    }
  }
/>
`);
});
