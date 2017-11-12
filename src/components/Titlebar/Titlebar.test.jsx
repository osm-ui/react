import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Titlebar from './';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Titlebar));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Titlebar));
});

describe('When using snapshots with the maximized prop', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Titlebar, { maximized: true }));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Titlebar, { maximized: true }));
});
