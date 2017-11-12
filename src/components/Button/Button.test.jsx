import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Button from './';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Button));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Button));
});

describe('When using snapshots on an anchor typed Button', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Button, { type: 'anchor' }));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Button, { type: 'anchor' }));
});
