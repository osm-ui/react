import React from 'react';
import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import { List } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(List.Item));
});
