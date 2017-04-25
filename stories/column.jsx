import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './knobsAlert';

import {
    DefaultTheme,
    RedTheme,
    AppCanvas,
    Column,
} from '../index';


storiesOf('Column', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Column',
    }))
    .addWithInfo('Default state', () => {
        const title = text('Title', 'A column title');
        const position = select('Position', ['left', 'right'], 'left');
        const width = select('Width', ['xs', 'sm', 'md', 'lg'], 'md');
        const maximized = boolean('Maximized');
        const visible = boolean('Visible', true);
        const loading = boolean('Loading');
        const theme = select('Theme', ['Default', 'Red'], 'Red');
        const themes = {
            DefaultTheme,
            RedTheme,
        };
        const ThemeElement = themes[`${theme}Theme`];

        return (
            <ThemeElement>
                <KnobsAlert />
                <AppCanvas style={{ height: '80vh', border: '1px solid #ccc' }}>
                    <h2>Application Content</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam non cursus purus. Nullam vehicula,
                        quam in rhoncus convallis, ligula est pellentesque quam,
                        ut venenatis ex lorem vitae est.
                        Etiam iaculis ante non orci euismod molestie.
                        Phasellus non diam massa. Donec non enim nec dolor
                        ullamcorper efficitur eget interdum justo.
                    </p>
                    <Column
                        title={title}
                        visible={visible}
                        loading={loading}
                        position={position}
                        width={width}
                        maximized={maximized}
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam non cursus purus. Nullam vehicula,
                            quam in rhoncus convallis, ligula est pellentesque quam,
                            ut venenatis ex lorem vitae est.
                            Etiam iaculis ante non orci euismod molestie.
                            Phasellus non diam massa. Donec non enim nec dolor
                            ullamcorper efficitur eget interdum justo.
                        </p>
                    </Column>
                </AppCanvas>
            </ThemeElement>
        );
    });
