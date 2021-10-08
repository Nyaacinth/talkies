import {TalkiesConfig} from "./TalkiesConfig"

/** Public API of Talkies Dialog */
export interface ITalkiesDialog {
    /** Check if this dialog is currently showing */
    isShown(): boolean
}

/** Talkies Dialog Created */
export type TalkiesDialog = ITalkiesDialog & TalkiesConfig
