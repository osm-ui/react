import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import { Sidebar, Segment, Header } from 'semantic-ui-react';

import defaultHostOptions from './defaultHostOptions';

import RedTheme from '../themes/red';
import Column from '../components/column';


storiesOf('Column', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Column',
    }))
    .addWithInfo('Default state', () => {
        const title = text('Title', 'A column title');
        const visible = boolean('Visible', true);
        const loading = boolean('Loading');
        const direction = select('Direction', ['left', 'right']);
        const animation = select('Animation', ['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']);

        return (
            <RedTheme>
                <Sidebar.Pushable as={Segment} style={{ height: '80vh' }}>
                    <Column
                        title={title}
                        visible={visible}
                        loading={loading}
                        direction={direction}
                        animation={animation}
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
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as="h2">Application Content</Header>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam non cursus purus. Nullam vehicula,
                                quam in rhoncus convallis, ligula est pellentesque quam,
                                ut venenatis ex lorem vitae est.
                                Etiam iaculis ante non orci euismod molestie.
                                Phasellus non diam massa. Donec non enim nec dolor
                                ullamcorper efficitur eget interdum justo.
                            </p>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </RedTheme>
        );
    });
