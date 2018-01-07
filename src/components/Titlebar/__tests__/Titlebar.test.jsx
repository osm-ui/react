import React from 'react';
import { shallow } from 'enzyme';
import { snapshotWithElementChildren } from 'helpers/tests';
import { Titlebar } from 'index';

describe('When using snapshots', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Titlebar));
});

describe('When using snapshots with the maximized prop', () => {
  it('Should render with an element children', () =>
    snapshotWithElementChildren(Titlebar, { maximized: true }));
});

describe('When testing the callbacks', () => {
  let titlebar;
  const onMaximize = jest.fn();
  const onUnmaximize = jest.fn();

  it('Should call the onMaximize callback when the maximized prop is passed', () => {
    titlebar = shallow(
      <Titlebar maximized onMaximize={onMaximize} onUnmaximize={onUnmaximize} />
    );

    expect(onMaximize.mock.calls.length).toBe(1);
  });

  it('Should call the onUnmaximize callback when the maximized prop is removed', () => {
    titlebar.setProps({ maximized: false });

    expect(onUnmaximize.mock.calls.length).toBe(1);
  });

  it('Should call the onMaximize callback when the maximized prop is passed again', () => {
    titlebar.setProps({ maximized: true });

    expect(onMaximize.mock.calls.length).toBe(2);
  });
});
