import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Toolbar } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Toolbar));

  it('Should render with the size prop', () =>
    snapshotWithElementChildren(Toolbar, { size: 'xs' }));

  it('Should render with the shape prop', () =>
    snapshotWithElementChildren(Toolbar, { shape: 'square' }));

  it('Should render with the direction prop', () =>
    snapshotWithElementChildren(Toolbar, { direction: 'column' }));

  it('Should render with the opened prop', () =>
    snapshotWithElementChildren(Toolbar, { opened: true }));
});

describe('When testing the callbacks', () => {
  it('Should call the callbacks when the opened prop is passed from the beginning', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const toolbar = shallow(
      <Toolbar opened onOpen={onOpen} onClose={onClose}>
        <Toolbar.Item icon="bars" />
      </Toolbar>
    );

    toolbar.setProps({ opened: false });
    toolbar.setProps({ opened: true });
    toolbar.setProps({ opened: false });

    expect(onOpen.mock.calls.length).toBe(2);
    expect(onClose.mock.calls.length).toBe(2);
  });

  it('Should call the callbacks when the opened prop is not passed from the beginning', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const toolbar = shallow(
      <Toolbar opened={false} onOpen={onOpen} onClose={onClose}>
        <Toolbar.Item icon="bars" />
      </Toolbar>
    );

    toolbar.setProps({ opened: true });
    toolbar.setProps({ opened: false });
    toolbar.setProps({ opened: true });

    expect(onClose.mock.calls.length).toBe(1);
    expect(onOpen.mock.calls.length).toBe(2);
  });
});
