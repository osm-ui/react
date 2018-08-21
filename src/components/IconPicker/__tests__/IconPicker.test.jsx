import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { IconPicker } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () => {
    const wrapper = shallow(<IconPicker />);

    expect(wrapper).toMatchSnapshot();
  });
});
