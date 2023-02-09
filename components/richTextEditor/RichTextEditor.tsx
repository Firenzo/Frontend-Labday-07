import CKeditor from "../../components/CKeditor";
import { SetStateAction, useEffect, useState } from "react";

import styles from './RichTextEditor.module.scss';

export type RichTextEditorProps = {
    rteData: string;
};

export function RichTextEditor({rteData:rteData}: RichTextEditorProps)
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
                    onChange={(data: SetStateAction<string>) => {
                    setData(data);
                    } }
                    editorLoaded={editorLoaded} value={rteData}/>

                    <button>✓</button>
            </div>
    );}