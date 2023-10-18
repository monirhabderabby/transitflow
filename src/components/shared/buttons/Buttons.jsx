import styles from "@/components/shared/buttons/button.module.css";
export const YellowButton = ({ title }) => {
    return <div className={`${styles.btnYellow}`}>{title}</div>;
};

export const BlueButton = ({ title }) => {
    return <div className={`${styles.btnBlue} `}>{title}</div>;
};
