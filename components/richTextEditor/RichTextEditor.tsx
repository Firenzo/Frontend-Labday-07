import CKeditor from "../../components/CKeditor";
import { SetStateAction, useEffect, useState } from "react";

import styles from './LinkSection.module.scss';

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
            <div>
                <CKeditor
                        name="description"
                        onChange={(data: SetStateAction<string>) => {
                        setData(data);
                        } }
                        editorLoaded={editorLoaded} value={rteData}/>
            </div>
    );}