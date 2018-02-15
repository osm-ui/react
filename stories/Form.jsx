import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import {
  withKnobs,
  text,
  boolean,
  select,
  number
} from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';

import { DefaultTheme, Form, Alert } from 'index';

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Form'
    })
  )
  .addWithInfo('Checkbox', () => {
    const formGroupContext = select('Context', Form.Group.contexts);
    const disabled = boolean('Disabled', false);

    return (
      <DefaultTheme>
        <KnobsAlert />
        <Form>
          <Form.Group context={formGroupContext}>
            <Form.Checkbox
              label='Check me out !'
              id='hello'
              value='good'
              disabled={disabled}
            />
            <Form.Checkbox
              label='No, check ME out !'
              id='hello2'
              value='better'
              disabled={disabled}
            />
          </Form.Group>
        </Form>
      </DefaultTheme>
    );
  })
  .addWithInfo('Input', () => {
    const placeholder = text('Placeholder', 'A placeholder');
    const hint = text('Hint', 'Hey there! I can help you filling that field!');
    const formGroupContext = select('Context', Form.Group.contexts);
    const disabled = boolean('Disabled', false);
    const type = select('Type', ['text', 'email', 'number', 'url'], 'text');

    return (
      <DefaultTheme>
        <KnobsAlert />
        <Form>
          <Form.Group context={formGroupContext}>
            <Form.Input
              type={type}
              placeholder={placeholder}
              hint={hint}
              disabled={disabled}
            />
          </Form.Group>
        </Form>
      </DefaultTheme>
    );
  })
  .addWithInfo('Textarea', () => {
    const placeholder = text('Placeholder', 'A placeholder');
    const hint = text('Hint', 'Hey there! I can help you filling that field!');
    const formGroupContext = select('Context', Form.Group.contexts);
    const resize = select(
      'Resize',
      ['none', 'vertical', 'horizontal'],
      'vertical'
    );
    const disabled = boolean('Disabled', false);
    const rows = number('Rows', 6, {
      range: true,
      min: 1,
      max: 20,
      step: 1
    });

    return (
      <DefaultTheme>
        <KnobsAlert />
        <Form>
          <Form.Group context={formGroupContext}>
            <Form.Textarea
              rows={rows}
              placeholder={placeholder}
              hint={hint}
              disabled={disabled}
              resize={resize}
            />
          </Form.Group>
        </Form>
      </DefaultTheme>
    );
  })
  .addWithInfo('Select', () => {
    const multi = boolean('Multi-value', false);
    const searchable = boolean('Searchable', false);
    const clearable = boolean('Clearable', false);
    const disabled = boolean('Disabled', false);
    const formGroupContext = select('Context', Form.Group.contexts);
    const options = [
      { label: 'First option', value: 1 },
      { label: 'Second option', value: 2 },
      { label: 'Third option', value: 3, disabled: true }
    ];

    return (
      <DefaultTheme>
        <Alert context="info">
          This component is based on the great{' '}
          <a href="https://github.com/bvaughn/react-virtualized-select">
            react-virtualized-select
          </a>{' '}
          module so you can use all its props.
        </Alert>
        <KnobsAlert />
        <Form>
          <Form.Group context={formGroupContext}>
            <Form.Select
              multi={multi}
              searchable={searchable}
              disabled={disabled}
              clearable={clearable}
              options={options}
            />
          </Form.Group>
        </Form>
      </DefaultTheme>
    );
  })
  .addWithInfo('Label', () => {
    const formGroupContext = select('Context', Form.Group.contexts);

    return (
      <DefaultTheme>
        <KnobsAlert />
        <Form>
          <Form.Group context={formGroupContext}>
            <Form.Label htmlFor="input">A label above an input</Form.Label>
            <Form.Input id="input" placeholder="A placeholder" />
          </Form.Group>
          <Form.Group context={formGroupContext}>
            <Form.Label htmlFor="textarea">A label above a textarea</Form.Label>
            <Form.Textarea id="textarea" rows={6} placeholder="A placeholder" />
          </Form.Group>
        </Form>
      </DefaultTheme>
    );
  });
