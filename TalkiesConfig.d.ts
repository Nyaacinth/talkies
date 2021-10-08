import {Source} from "love.audio"
import {Font, Image} from "love.graphics"
import {TalkiesDialog} from "./TalkiesDialog"

/** Talkies Dialog Config */
export type TalkiesConfig = {
    /**
     * Message Avatar
     * @default
     * undefined // disabled
     */
    image?: Image

    /**
     * Position X-axis
     * @default
     * undefined // auto
     */
    posx?: number

    /**
     * Position Y-axis
     * @default
     * undefined // auto
     */
    posy?: number

    /**
     * Window Width
     * @default
     * undefined // auto
     */
    width?: number

    /**
     * Window Height
     * @default
     * undefined // auto
     */
    height?: number

    /**
     * Message Timeout, affect pausing and action
     * @default
     * undefined // disabled
     */
    timeout?: number

    /**
     * Message Start Callback
     * @default
     * function () {} // No function
     */
    onstart(this: void, dialog: TalkiesDialog): void

    /**
     * Message Partial End Callback
     * @default
     * function () {} // No function
     */
    onmessage(this: void, dialog: TalkiesDialog, messages_left_num: number): void

    /**
     * Message End Callback
     * @default
     * function () {} // No function
     */
    oncomplete(this: void, dialog: TalkiesDialog): void

    /**
     * Multiple-choice Options
     * @default
     * undefined // disabled
     */
    options?: [label: string, func: (this: void) => void][]

    /**
     * Text Display Speed
     * @default
     * 0.016
     */
    textSpeed: number

    /**
     * Sound to be played when the character speaks
     * @default
     * undefined // disabled
     */
    talkSound?: Source

    /**
     * Sound to be played when a option is selected
     * @default
     * undefined // disabled
     */
    optionSwitchSound?: Source

    /**
     * Character on the bottom right indicating more contents
     * @default
     * "˅"
     */
    indicatorCharacter: string

    /**
     * Character before option to indicate options
     * @default
     * ">"
     */
    optionCharacter: string

    /**
     * Character array on the bottom right indicating timer limit
     * @default
     * "."
     */
    timerCharacter: string

    /**
     * Set whether options should be displayed within the message box or if they should be displayed in a separate box
     * @default
     * true
     */
    inlineOptions: boolean

    /**
     * Messagebox Font
     * @default
     * love.graphics.getFont()
     */
    font: Font

    /**
     * Padding on the inside of box
     * @default
     * 10
     */
    padding: number

    /**
     * Thickness of box borders
     * @default
     * 1 // and 0 means no border
     */
    thickness: number

    /**
     * Radius in pixels of box corners
     * @default
     * 0 // no rounding
     */
    rounding: number

    /**
     * Title Text Color
     * @default
     * [1, 1, 1]
     */
    titleColor: [r: number, g: number, b: number, a?: number]

    /**
     * Background color of the title box
     * @default
     * undefined // same as "messageBackgroundColor"
     */
    titleBackgroundColor: [r: number, g: number, b: number, a?: number]

    /**
     * Border color of the title box
     * @default
     * undefined // same as "messageBorderColor"
     */
    titleBorderColor: [r: number, g: number, b: number, a?: number]

    /**
     * Message Text Color
     * @default
     * [1, 1, 1]
     */
    messageColor: [r: number, g: number, b: number, a?: number]

    /**
     * Background color of the message box
     * @default
     * [0, 0, 0]
     */
    messageBackgroundColor: [r: number, g: number, b: number, a?: number]

    /**
     * Border color of the title box
     * @default
     * [1, 1, 1] // if undefined, here will be same as "messageBackgroundColor"
     */
    messageBorderColor: [r: number, g: number, b: number, a?: number]

    /**
     * When to make a sound while talking, if this is set to true the noise will be made for every character.
     * If set to false the noise will be looped, and the pitch will be oscillated randomly between the `pitchValues` setting
     * @default
     * true
     */
    typedNotTalked: boolean

    /**
     * If `typedNotTalked` is set to false then this array of values will be used to choose values of pitch while talking
     * @default
     * [0.7, 0.8, 1.0, 1.2, 1.3]
     */
    pitchValues: number[]
}
