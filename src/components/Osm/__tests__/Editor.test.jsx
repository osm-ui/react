import React from 'react';
import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Editor } from 'index';
import { osmData } from '../../../../stories/mocks/index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Editor, {
      original: osmData.original,
      fixed: osmData.fixed
    }));
});
