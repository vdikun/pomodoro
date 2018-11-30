import React from 'react';
import { PomodoroContainer } from './../src/components/PomodoroContainer';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<PomodoroContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});