import styles from './Selector.module.scss';

export type SelectorProps = {
    
};

export function Selector () {

    return (
        <div className={styles.Selector}>
            <div>Kies de taal voor je CV</div>
            <select>
                <option>
                    Nederlands
                </option>
                <option>
                    English
                </option>
            </select>
        </div>
    );
    
}