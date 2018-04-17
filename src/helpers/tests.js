import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import { render } from 'enzyme';
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

export const snapshotWithRenderAndElementChildren = (TestedElement, props) => {
  const result = render(
    <DefaultTheme>
      <TestedElement {...props}>
        <div />
      </TestedElement>
    </DefaultTheme>
  ).html();

  expect(result).toMatchSnapshot();
};

export const snapshotWithRenderAndTextChildren = (TestedElement, props) => {
  const result = render(
    <DefaultTheme>
      <TestedElement {...props}>This is a text</TestedElement>
    </DefaultTheme>
  ).html();

  expect(result).toMatchSnapshot();
};
