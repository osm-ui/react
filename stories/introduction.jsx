import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import defaultHostOptions from './defaultHostOptions';


storiesOf('Introduction', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Introduction',
    }))
    .add('Usage', () => (
        <div>
            <p>
                OSM UI for React is a set of React components to build OSM related interfaces. It is based on the awesome <a href="http://react.semantic-ui.com" target="_blank" rel="noopener noreferrer">Semantic UI React</a> library and add some new components.
            </p>
            <p>
                That site is both a documentation and a playground, feel free to use the <em>Knobs</em> in the right column when available (eg: in the <a target="_top" href="./?selectedKind=Column&selectedStory=Default state">column section</a>)
            </p>
        </div>
    ));
