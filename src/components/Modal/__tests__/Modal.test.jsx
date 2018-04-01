import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Modal } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Modal));
});

describe('When using snapshots with title, header and footer', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Modal, {
      title: 'title',
      header: <div />,
      footer: <div />
    }));
});

describe('When using snapshots with loader', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Modal, {
      loading: true,
      loaderLabel: 'loading'
    }));
});

describe('When testing the callbacks', () => {
  const onOpen = jest.fn();

  it('Should call the onOpen callback when component is mounted', () => {
    shallow(<Modal onOpen={onOpen} />);
    expect(onOpen.mock.calls.length).toBe(1);
  });

  // TODO: test onClose
});
