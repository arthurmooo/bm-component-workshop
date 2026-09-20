import "./charts-variants.css";
export declare const detailedModes: readonly ["Pixels", "Miroir", "Répartition", "Nuage", "Modèles", "Catégories", "Objectif", "Canaux", "Livraisons"];
export type DetailedChartMode = typeof detailedModes[number];
export declare function DetailedChartVariants({ mode, empty }: {
    mode: DetailedChartMode;
    empty: boolean;
}): import("react").JSX.Element;
