import styles from './Button.module.scss';
import Image from 'next/image';
import dutchFlag from '../../public/Flag_of_the_Netherlands.svg';
import britishFlag from '../../public/Flag_of_the_United_Kingdom.svg';

export type ButtonProps = {
    title: string;
    };

export function Button() {

    return (
        <div className={styles.Button}>
            <a href="../../public/cv.pdf" target="_blank">
                <Image src={dutchFlag} alt="Dutch version" width={50} />
            </a>
            <a href="../../public/cv.pdf" target="_blank">
                <Image src={britishFlag} alt="English version" width={50} />    
            </a>
        </div>
        );
}