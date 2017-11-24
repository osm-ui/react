import React from 'react';
// import { shallow } from 'enzyme';
import { snapshotWithElementChildren } from '../../../helpers/tests';
import Toolbar from '../';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Toolbar.Group));

  it('Should render with the size prop', () =>
    snapshotWithElementChildren(Toolbar.Group, { size: 'xs' }));

  it('Should render with the shape prop', () =>
    snapshotWithElementChildren(Toolbar.Group, { shape: 'square' }));

  it('Should render with the direction prop', () =>
    snapshotWithElementChildren(Toolbar.Group, { direction: 'column' }));
});
