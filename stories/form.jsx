import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, text, boolean, select, number } from '@kadira/storybook-addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './knobsAlert';

import DefaultTheme from '../themes/default';
import {
    Form,
    Textarea,
} from '../index';


storiesOf('Form', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Form',
    }))
    .addWithInfo('Textarea', () => {
        const placeholder = text('Placeholder', 'A placeholder');
        const hint = text('Hint', 'Hey there! I can help you filling that field!');
        const formGroupContext = select('Context', ['', 'success', 'warning', 'error']);
        const resize = select('Resize', ['', 'none', 'vertical', 'horizontal']);
        const disabled = boolean('Disabled');
        const rows = number('Rows', 6, {
            range: true,
            min: 1,
            max: 20,
            step: 1,
        });

        return (
            <DefaultTheme>
                <KnobsAlert />
                <Form>
                    <Form.Group context={formGroupContext}>
                        <Textarea
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
    });
