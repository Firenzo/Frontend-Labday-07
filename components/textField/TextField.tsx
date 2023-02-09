import { useState } from "react";
import { RichTextEditor } from '../../components/richTextEditor/RichTextEditor';

import styles from './LinkSection.module.scss';

export type TextFieldProps = {
    rteData: string;
};

export function TextField({rteData:rteData}: TextFieldProps)
    {
        const [showRTE, setShowRTE] = useState(false);
        function toggle(event: any){
            setShowRTE(!showRTE);
            rteData = event.target.innerText;
        }

        return (
            <div>
                <span style={{
                    display: showRTE ? "none" : "block"
                }}  onClick={(event) => toggle(event)}>{rteData}</span>
                <div style={{
                    display: showRTE ? "block" : "none"
                }} >
                    <RichTextEditor rteData={rteData}></RichTextEditor>
                </div>
            </div>   
    );}