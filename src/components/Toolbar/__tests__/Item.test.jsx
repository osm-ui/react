import React from 'react';
// import { shallow } from 'enzyme';
import { snapshotWithElementChildren } from '../../../helpers/tests';
import Toolbar from '../';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Toolbar.Item));

  it('Should render with the type prop', () =>
    snapshotWithElementChildren(Toolbar.Item, { type: 'anchor' }));

  it('Should render with the inactive prop', () =>
    snapshotWithElementChildren(Toolbar.Item, { inactive: true }));

  it('Should render with the size prop', () =>
    snapshotWithElementChildren(Toolbar.Item, { size: 'xs' }));

  it('Should render with the shape prop', () =>
    snapshotWithElementChildren(Toolbar.Item, { shape: 'square' }));

  it('Should render with the loading prop', () =>
    snapshotWithElementChildren(Toolbar.Item, { loading: true }));
});
