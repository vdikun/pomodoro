import React from "react";
import { Text } from "react-native";
import Button from "../../components/common/Button";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  buttonText = "foo";
  onPress = () => console.log("pressed");
  const tree = renderer
    .create(<Button text={buttonText} onPress={onPress} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<View
  accessible={true}
  isTVSelectable={true}
  onResponderGrant={[Function]}
  onResponderMove={[Function]}
  onResponderRelease={[Function]}
  onResponderTerminate={[Function]}
  onResponderTerminationRequest={[Function]}
  onStartShouldSetResponder={[Function]}
  style={
    Object {
      "alignSelf": "stretch",
      "backgroundColor": "#fff",
      "borderColor": "#000",
      "borderRadius": 5,
      "borderWidth": 1,
      "marginLeft": 10,
      "marginRight": 10,
      "opacity": 1,
    }
  }
>
  <Text
    accessible={true}
    allowFontScaling={true}
    ellipsizeMode="tail"
    style={
      Object {
        "alignSelf": "center",
        "fontSize": 20,
        "fontWeight": "600",
        "paddingBottom": 10,
        "paddingTop": 10,
      }
    }
  >
    foo
  </Text>
</View>
`);
});
