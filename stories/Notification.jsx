import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import styled from 'styled-components';
import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './components/KnobsAlert';
import FakeApp from './components/FakeApp';

import {
  DefaultTheme,
  Notification,
  Button
} from '../src/index';

class FakeNotificationCenter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: this.findAllNotifs(this.props.children)
    };

    this.findAllNotifs = this.findAllNotifs.bind(this);
    this.addTimeout = this.addTimeout.bind(this);
    this.resetNotifications = this.resetNotifications.bind(this);
  }

  resetNotifications() {
    this.setState({
      notifications: null
    }, () => this.setState({
      notifications: this.findAllNotifs(this.props.children)
    }));
  }

  findAllNotifs(components) {
    return React.Children.map(components, component => {
      if (component.type === Notification)
        return component.props.id;
      else
        return this.findAllNotifs(component.props.children);
    });
  }

  addTimeout(component) {
    const notifications = this.state.notifications;

    if (notifications) {
      if (component.type === Notification && notifications.includes(component.props.id))
        return React.cloneElement(component, {
          onTimeoutClose: () =>
            this.setState({
              notifications: notifications.filter(element => element !== component.props.id)
            })
          }
        )
      else if (component.type === Notification.Group)
        return React.cloneElement(component, {
          children: React.Children.map(component.props.children, this.addTimeout)
        });
    }
    return null;
  }

  render() {
    const notifications = this.state.notifications;
    console.log('STATE', notifications);

    const button = (
      <Button onClick={this.resetNotifications}>
        Restart Notifications
      </Button>
    );

    return (
      <div>
        {React.Children.map(this.props.children, this.addTimeout)}
        {button}
      </div>
    );
  }
}

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      ...defaultHostOptions,
      title: 'Notification'
    })
  )
  .addWithInfo('Default state', () => (
    <DefaultTheme>
      <FakeApp fakeText>
        This is the notification basic example.
        <br/>
        You can close it by clicking the cross button.
        <FakeNotificationCenter>
          <Notification
            id={1}
            pending
          >
            This is a notif
          </Notification>
        </FakeNotificationCenter>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Position', () => (
    <DefaultTheme>
      <FakeApp fakeText>
        You can choose 6 different positions.
        <FakeNotificationCenter>
          <Notification
            id={11}
            position='top-right'
          >
            This is top-right position
          </Notification>
          <Notification
            id={12}
            position='top-left'
          >
            This is top-left position
          </Notification>
          <Notification
            id={13}
            position='bottom-right'
          >
            This is bottom-right position
          </Notification>
          <Notification
            id={14}
            position='bottom-left'
          >
            This is a bottom-left position
          </Notification>
          <Notification
            id={15}
            position='top'
            direction='vertical'
          >
            This is top position
          </Notification>
          <Notification
            id={16}
            position='bottom'
            direction='vertical'
          >
            This is bottom position
          </Notification>
        </FakeNotificationCenter>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Direction', () => (
    <DefaultTheme>
      <FakeApp fakeText>
        Notification can be animated vertically or horizontally.
        <FakeNotificationCenter>
          <Notification
            id={11}
            timespan={4000}
            direction='horizontal'
          >
            This is notification is horizontal
          </Notification>
          <Notification
            id={12}
            timespan={2000}
            direction='vertical'
          >
            This is notification is vertical
          </Notification>
        </FakeNotificationCenter>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Group', () => (
    <DefaultTheme>
      <FakeApp fakeText>
        You can (and should) group your notifications in a group.
        <FakeNotificationCenter>
          <Notification.Group position='top-right'>
            <Notification
              id={101}
            >
              This is a notif
            </Notification>
            <Notification
              id={102}
            >
              This is a notif
            </Notification>
            <Notification
              id={103}
            >
              This is a notif
            </Notification>
            <Notification
              id={104}
            >
              This is a notif
            </Notification>
          </Notification.Group>
        </FakeNotificationCenter>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Delay', () => (
    <DefaultTheme>
      <FakeApp fakeText>
        You can set a timespan for the notification.
        The timespan will be cancelled on mouse enter, and reset on mouse leave.
        <FakeNotificationCenter>
          <Notification.Group position='top-right'>
            <Notification
              id={101}
              timespan={2000}
            >
              This is a 2s notification
            </Notification>
            <Notification
              id={102}
              timespan={3000}
            >
              This is a 3s notification
            </Notification>
            <Notification
              id={103}
              timespan={4000}
            >
              This is a 4s notification
            </Notification>
            <Notification
              id={104}
              timespan={5000}
            >
              This is a 5s notification
            </Notification>
          </Notification.Group>
        </FakeNotificationCenter>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Context', () => (
    <DefaultTheme>
      <FakeApp fakeText>
        You can choose a context for your notification.
        <FakeNotificationCenter>
          <Notification.Group position='top-right'>
            <Notification
              id={101}
              context='info'
            >
              This is an information notification
            </Notification>
            <Notification
              id={102}
              context='success'
            >
              This is a success notification
            </Notification>
            <Notification
              id={103}
              context='warning'
            >
              This is a warning notification
            </Notification>
            <Notification
              id={104}
              context='danger'
            >
              This is a danger notification
            </Notification>
          </Notification.Group>
        </FakeNotificationCenter>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Pending', () => (
    <DefaultTheme>
      <FakeApp fakeText>
        You can set a notification pending for some action.
        <br/>
        It can not be closed until a certain action closes it.
        <FakeNotificationCenter>
          <Notification.Group>
            <Notification
              id={1}
              pending
            >
              This is a notification pending for some action
            </Notification>
            <Notification
              id={2}
            >
              This is a notification that will disappear shortly
            </Notification>
          </Notification.Group>
        </FakeNotificationCenter>
      </FakeApp>
    </DefaultTheme>
  ))
  .addWithInfo('Call To Actions', () => (
    <DefaultTheme>
      <FakeApp fakeText>
        You can add call-to-actions buttons.
        <FakeNotificationCenter>
          <Notification
            id={2}
            callToActions={[{
              text: 'CTA1',
              action: () => null
            }, {
              text: 'CTA2',
              action: () => null
            }]}
          >
            A notification with call-to-actions
          </Notification>
        </FakeNotificationCenter>
      </FakeApp>
    </DefaultTheme>
  ))

  // .addWithInfo('Directions', () => (
  //   <DefaultTheme>
  //     <FakeApp style={fakeAppRowStyle}>
  //       <Notification opened position="left-top" direction="row">
  //         This is a notification !
  //       </Notification>
  //     </FakeApp>
  //   </DefaultTheme>
  // ))
  // .addWithInfo('Playground', () => {
  //   const position = select(
  //     'Position',
  //     [
  //       'left-top',
  //       'center-top',
  //       'right-top',
  //       'right-center',
  //       'right-bottom',
  //       'center-bottom',
  //       'left-bottom',
  //       'left-center'
  //     ],
  //     'left-top'
  //   );
  //   const direction = select('Direction', ['column', 'row'], 'column');
  //   const size = select('Size', ['xs', 'sm', 'md', 'lg'], 'md');
  //   const container = select('Container', ['parent', 'root'], 'parent');
  //   const opened = boolean('Opened', true);
  //   const loading = boolean('Loading');
  //   const type = select('Item type', ['button', 'anchor'], 'button');
  //   const theme = select(
  //     'Theme',
  //     [
  //       'Default',
  //       'White',
  //       'LightGray',
  //       'DarkGray',
  //       'Anthracite',
  //       'Yellow',
  //       'Orange',
  //       'Brown',
  //       'Red',
  //       'Rose',
  //       'Purple',
  //       'Blue',
  //       'Sky',
  //       'Turquoise',
  //       'Green'
  //     ],
  //     'Turquoise'
  //   );
  //   const themes = {
  //     DefaultTheme,
  //     WhiteTheme,
  //     LightGrayTheme,
  //     DarkGrayTheme,
  //     AnthraciteTheme,
  //     YellowTheme,
  //     OrangeTheme,
  //     BrownTheme,
  //     RedTheme,
  //     RoseTheme,
  //     PurpleTheme,
  //     BlueTheme,
  //     SkyTheme,
  //     TurquoiseTheme,
  //     GreenTheme
  //   };
  //   const ThemeElement = themes[`${theme}Theme`];

  //   return (
  //     <DefaultTheme>
  //       <KnobsAlert />
  //       <FakeApp style={{ ...fakeAppColumnStyle, ...fakeAppRowStyle }}>
  //         <ThemeElement>
  //           <Notification
  //             opened={opened}
  //             position={position}
  //             direction={direction}
  //             container={container}
  //             size={size}
  //             onOpen={action('onOpen toolbar')}
  //             onClose={action('onClose toolbar')}
  //           >

  //           </Notification>
  //         </ThemeElement>
  //       </FakeApp>
  //     </DefaultTheme>
  //   );
  // });
