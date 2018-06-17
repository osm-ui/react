import 'jest-styled-components';
import React from 'react';
import { snapshotWithElementChildren } from 'helpers/tests';
import { ColorPicker } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(ColorPicker, { onChange: jest.fn() }));
});
