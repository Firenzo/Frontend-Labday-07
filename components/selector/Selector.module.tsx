import styles from './Selector.module.scss';

export type SelectorProps = {
    
};

export function Selector () {

    return (
        <div className={styles.Selector}>
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