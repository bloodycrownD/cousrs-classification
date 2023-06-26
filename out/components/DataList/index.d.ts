export * from "./css";
interface option {
    title?: string;
    colHeads?: string[];
    data?: any[][];
    name?: string;
}
export declare function DataList({ title, colHeads, data, name }: option): JQuery<HTMLElement>;
