/// <reference types="react" />
interface MessageProps {
    title: string;
    body: string;
    icon: string;
    onClick: Function;
    read?: boolean;
}
declare function Message({ title, body, icon, onClick, read, }: MessageProps): JSX.Element;
export default Message;
