import 'jest-styled-components';
import React from 'react';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Scrollable } from 'index';

jest.mock('helpers/dom');

describe('When using snapshots', () => {
  it('Should render with element children ', () => {
    snapshotWithElementChildren(Scrollable);
  });
});
