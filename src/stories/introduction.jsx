import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs } from '@storybook/addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import logoFile from '../logo.png';

storiesOf('Introduction', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Introduction'
    })
  )
  .add('Usage', () => (
    <div className="text-center">
      <p>
        <img src={logoFile} style={{ width: '150px' }} alt="Logo" />
      </p>
      <p>
        OSM UI for React is a set of React components to build OSM related
        interfaces.
        <br />
        Those components were extracted from the{' '}
        <a
          href="https://www.mapcontrib.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          MapContrib
        </a>{' '}
        project during its React migration.
      </p>
      <p>
        On the technical side, it is mainly based on{' '}
        <a
          href="https://facebook.github.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{' '}
        and{' '}
        <a
          href="https://getbootstrap.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootstrap
        </a>.
      </p>
      <p>
        That site is both a documentation and a playground, feel free to use the{' '}
        <em>Knobs</em> in the right column when available.
      </p>
    </div>
  ));
