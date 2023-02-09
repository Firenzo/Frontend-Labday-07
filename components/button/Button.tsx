import styles from './Button.module.scss';

export type ButtonProps = {
    title: string;
    };

export function Button({ title }: ButtonProps) {
    // const linkItems = linkList.map((link) => ({
    //     ...link, 
    //     hasIcon: true,
    // }));

    return (
        <div className={styles.Button}>
            <button>{title}</button>
        </div>
        );
}