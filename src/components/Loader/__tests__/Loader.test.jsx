import React from 'react';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Loader } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Loader));
});

describe('When using snapshots with a label prop', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Loader, { label: 'This is a label' }));
});
