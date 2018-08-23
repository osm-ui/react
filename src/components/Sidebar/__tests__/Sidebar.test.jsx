import React from 'react';
import 'jest-styled-components';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Sidebar } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Sidebar));

  it('Should render with a title', () =>
    snapshotWithElementChildren(Sidebar, { title: 'A title' }));

  it('Should render with the loading prop', () =>
    snapshotWithElementChildren(Sidebar, { loading: true }));

  it('Should render with a some props and children', () => {
    const result = (
      <Sidebar>
        <Sidebar.Header>A title content</Sidebar.Header>
        <Sidebar.Footer>A footer content</Sidebar.Footer>
      </Sidebar>
    );

    expect(result).toMatchSnapshot();
  });
});
