import { CSSProperties } from "react";
declare type InboxThemeOptions = "root" | "title" | "body" | "footer" | "header" | "close" | "subTitle" | "message";
declare type MessageThemeOptions = "root" | "read" | "title" | "container" | "body" | "icon";
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
declare type ThemeObject = {
    [key in InboxThemeOptions | MessageThemeOptions]?: CSSProperties | ThemeObject;
};
export {};
