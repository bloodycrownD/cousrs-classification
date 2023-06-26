export * from "./css";
interface option {
    heads?: string[];
    contentsID?: string[];
}
export default function Tabs({ heads, contentsID }: option): JQuery<HTMLElement>;
