import React from 'react';
import {
  snapshotWithElementChildren,
  snapshotWithTextChildren
} from '../../helpers/tests';
import Section from './';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Section));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Section));
});

describe('When using snapshots with the dimmed prop', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Section, { dimmed: true }));

  it('Should render with a text children', () =>
    snapshotWithTextChildren(Section, { dimmed: true }));
});
