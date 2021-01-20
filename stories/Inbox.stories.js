import React from "react";

import { Inbox } from "../src";

export default {
  title: "Example/Inbox",
  component: Inbox,
  argTypes:{ },
  args: {},
};
const messages = [
  {
    title: "Don't lurk on democracy. Support your community IRL and go vote (if you haven't already).",
    body: "3 months ago - Marketing",
    icon: "https://app.courier.com/static/favicon/favicon-32x32.png",
  },
  {
    title: "Don't lurk on democracy. Make your voting plan today",
    body: "3 months ago - Marketing",
    icon: "https://app.courier.com/static/favicon/favicon-32x32.png",
  },
];

export function Default() {
  return <Inbox title="Notifications" messages={messages}/>;
}