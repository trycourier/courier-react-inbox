import React, { useState } from "react";

import { Inbox, Indicator } from "../src";

export default {
  title: "Example/Combined",
  component: Inbox,
  argTypes:{ },
  args: {},
};
const messages = [
  {
    title: "Don't lurk on democracy. Support your community IRL and go vote (if you haven't already).",
    body: "3 months ago - Marketing",
    icon: "https://app.courier.com/static/favicon/favicon-32x32.png",
    id: 123912803,
  },
  {
    title: "Don't lurk on democracy. Make your voting plan today",
    body: "3 months ago - Marketing",
    icon: "https://app.courier.com/static/favicon/favicon-32x32.png",
    id: 92903100,
    read: true,
  },
];

const theme = {
  root: {
    backgroundColor: "lightgrey",
  },
  title: {
    color: "red",
  },
  footer: {
    backgroundColor: "black",
  },
  message: {
    title: {
      color: "black",
    },
  },
};

export function Default() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Indicator onClick={() => setShow(!show)} />
      <Inbox
        theme={theme}
        closeOnClickOut={true}
        onClose={() => setShow(!show)}
        show={show}
        indicator={true}
        onMessageClick={(message) => alert(`You clicked on ${JSON.stringify(message)}`)}
        title="Notifications"
        messages={messages}/>
    </>
  );
}