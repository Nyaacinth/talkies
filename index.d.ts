declare namespace talkies {
    /**
     * Create a new dialog of messages and return that dialog
     * @param title Title, If set to `""`, title box will not appear
     * @param messages Message or an array of messages
     * @param config Dialog Config
     * @returns Dialog Object
     * @noSelf
     */
    function say(title: string, messages: string | string[], config?: Partial<import("./TalkiesConfig").TalkiesConfig>): import("./TalkiesDialog").TalkiesDialog

    /**
     * Update the UI with the `dt` and animate the typing
     * @param dt Delta Time
     * @noSelf
     */
    function update(dt: number): void

    /**
     * Draw the UI of dialog
     * @noSelf
     */
    function draw(): void

    /**
     * Remove all messages from the queue and close all messagebox
     * @noSelf
     */
    function clearMessages(): void

    /**
     * Move the option selector to the previous option, can be safely called at any time
     * @noSelf
     */
    function prevOption(): void

    /**
     * Move the option selector to the next option, can be safely called at any time
     * @noSelf
     */
    function nextOption(): void

    /**
     * The main interaction with the dialog.
     * If the message is fully displayed, it will show the next message.
     * If the message is paused, it will resume.
     * If the message has options shown, it will select the option.
     * Can be safely called at any time
     * @noSelf
     */
    function onAction(): void

    /**
     * Return true if talkies currently drawing dialogs
     * @noSelf
     */
    function isOpen(): boolean
}

export = talkies
