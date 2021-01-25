/* eslint-disable no-unused-vars */
import { CSSProperties } from "react";

type InboxThemeOptions = "root" | "title" | "body" | "footer" | "header" | "close" | "subTitle" | "message";
type MessageThemeOptions = "root" | "read" | "title" | "container" | "body" | "icon";

export interface InboxProps {
  messages: Message[];
  title?: string;
  onClose?: Function;
  onMessageClick?: Function;
  indicator?: boolean;
  show?: boolean;
  closeOnClickOut?: boolean;
  theme?: ThemeObject;
}
interface Message {
  title: string;
  body: string;
  icon: string;
  id?: string | number;
  read?: boolean;
}

type ThemeObject = {
  [key in InboxThemeOptions | MessageThemeOptions]?: CSSProperties | ThemeObject;
}