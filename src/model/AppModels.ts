import { ReactNode } from "react";
import { AnalyticOptionModel } from "./AnalyticOptionModel";

export interface CommonInputCardProps {
    children: ReactNode;
}

export interface CommonInputCardChildProps {
    handleState?: Function;
}

export interface DataMiningDropDownProps extends CommonInputCardChildProps {
    config: AnalyticOptionModel;
}
