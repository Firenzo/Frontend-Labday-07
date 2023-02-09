import CKeditor from "../../components/CKeditor";
import { SetStateAction, useEffect, useState } from "react";

import styles from './RichTextEditor.module.scss';

export type RichTextEditorProps = {
    rteData: string;
    saveData: (data: string) => void;
};

export function RichTextEditor({rteData, saveData}: RichTextEditorProps)
    {
        const [editorLoaded, setEditorLoaded] = useState(false);
        const [data, setData] = useState("");
      
        useEffect(() => {
          setEditorLoaded(true);
        }, []);

        return (
            <div className={styles.wrapper}>
                <CKeditor
                    name="description"
                    onChange={(data: string) => {
                        setData(data);
                    }}
                    editorLoaded={editorLoaded} value={rteData}/>

                    <button onClick={() => saveData(data)}>save</button>
            </div>
    );}