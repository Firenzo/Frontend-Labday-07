import { useState } from "react";
import { RichTextEditor } from '../../components/richTextEditor/RichTextEditor';

import styles from './LinkSection.module.scss';

export type TextFieldProps = {
    rteData: string;
    field: string;
    language: string;
};

export function TextField({rteData, field, language}: TextFieldProps)
    {
        const [showRTE, setShowRTE] = useState(false);
        function toggle(event: any){
            setShowRTE(!showRTE);
            rteData = event.target.innerText;
        }

        const save = async (value: string) => {
            await fetch('/api/field', {
              body: JSON.stringify({
                fieldName: field,
                language: language,
                value: value
              }),
              method: "PUT",
            });

            setShowRTE(false);
        }

        return (
            <div>
                <span style={{
                    display: showRTE ? "none" : "block"
                }}  onClick={(event) => toggle(event)}>{rteData}</span>
                <div style={{
                    display: showRTE ? "block" : "none"
                }} >
                    <RichTextEditor rteData={rteData} saveData={save}></RichTextEditor>
                </div>
            </div>   
    );}