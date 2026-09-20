import { type DetailedChartMode } from "./charts-variants";
import "./charts-demo.css";
export type ExtraMode = "Profondeur" | "Jauges" | "Donut" | "Heatmap" | DetailedChartMode;
export type DepthChartProps = {
    empty?: boolean;
    locale?: "fr" | "en";
};
export declare function DepthChart({ empty, locale }: DepthChartProps): import("react").JSX.Element;
export declare function ChartsExtra({ mode, empty, locale }: {
    mode: ExtraMode;
    empty: boolean;
    locale?: "fr" | "en";
}): import("react").JSX.Element;
