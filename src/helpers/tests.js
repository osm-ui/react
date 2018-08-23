import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import DefaultTheme from 'themes/Default';

export const snapshotWithElementChildren = (TestedElement, props) => {
  const result = shallow(
    <DefaultTheme>
      <TestedElement {...props}>
        <div />
      </TestedElement>
    </DefaultTheme>
  );

  expect(result.childAt(0)).toMatchSnapshot();
};

export const snapshotWithTextChildren = (TestedElement, props) => {
  const result = shallow(
    <DefaultTheme>
      <TestedElement {...props}>This is a text</TestedElement>
    </DefaultTheme>
  );

  expect(result.childAt(0)).toMatchSnapshot();
};
