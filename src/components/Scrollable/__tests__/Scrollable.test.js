import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import { Scrollable } from 'index';

jest.mock('helpers/dom');

describe('When using snapshots', () => {
  it('Should render with element children ', () => {
    const wrapper = shallow(<Scrollable>Test</Scrollable>);
    expect(wrapper).toMatchSnapshot();
  });
});
