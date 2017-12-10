import React from 'react';
import { snapshotWithElementChildren } from '../../../helpers/tests';
import Sidebar from '../';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Sidebar.Nav));
});
