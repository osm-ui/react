import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import DefaultTheme from 'themes/Default';

export const snapshotWithElementChildren = (TestedElement, props) => {
  const result = ReactTestRenderer.create(
    <DefaultTheme>
      <TestedElement {...props}>
        <div />
      </TestedElement>
    </DefaultTheme>
  ).toJSON();

  expect(result).toMatchSnapshot();
};

export const snapshotWithTextChildren = (TestedElement, props) => {
  const result = ReactTestRenderer.create(
    <DefaultTheme>
      <TestedElement {...props}>This is a text</TestedElement>
    </DefaultTheme>
  ).toJSON();

  expect(result).toMatchSnapshot();
};
