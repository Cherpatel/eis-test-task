import ColdWaterIcon from "@assets/svgs/coldWaterIcon.svg";
import HotWaterIcon from "@assets/svgs/hotWaterIcon.svg";

import "./CellType.css";

type Props = {
    type: string;
};

const iconByType = {
    ColdWaterAreaMeter: ColdWaterIcon,
    HotWaterAreaMeter: HotWaterIcon,
};

const styles = {
    height: "24px",
    width: "53px",
};

export default function CellType({ type }: Props) {
    const Icon = iconByType[type];

    return (
        <Icon { ...styles } />
    );
}