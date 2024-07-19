import styles from "./App.module.css";

export default function App() {
    const divid = <div></div>;

    return (
        <div className={ styles.app }>
            { divid }
        </div>
    );
}