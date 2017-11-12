import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Loader from './';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Loader));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Loader));
});

describe('When using snapshots with a label prop', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Loader, { label: 'This is a label' }));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Loader, { label: 'This is a label' }));
});
