import React from "react";
import { PauseControl } from "./../components/controls/PauseControl";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  isTimerActive = false;
  onPress = () => console.log("pressed");
  const tree = renderer
    .create(<PauseControl isTimerActive={isTimerActive} onPress={onPress} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
