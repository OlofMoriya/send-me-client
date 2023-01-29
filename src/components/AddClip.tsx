import { createSignal, Show } from "solid-js";
import { postClip, useClips } from "~/stores/clips_store";

export default function AddClipForm() {
    const [_, refetchClips] = useClips() as [any, any];
    const [text, setText] = createSignal("");
    const [reciever, setReciever] = createSignal<string | undefined>(undefined);
    const [sending, setSending] = createSignal(false);
    const [error, setError] = createSignal(false);
    const sendAction = async () => {
        if (text() == "") return;
        setError(false);
        setSending(true);
        let result = await postClip(text(), reciever());      
        if (result) {
           refetchClips(); 
        }
        setError(!result);
        setSending(false);
    };

    const inputClass = "my-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none";

    const buttonClass = "my-4 inline-block px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"

    return (
        <div class="mt-16 mb-16 max-w-md flex flex-col">
            <h2>Send me a message</h2>

            <div>Message</div> 
            <input class={inputClass} value={text()} onChange={event => setText(event.currentTarget.value)}/>

            <div>Reciever (optional)</div>
            <input class={inputClass} value={reciever()} onChange={event => setReciever(event.currentTarget.value)}/>
            
            <button class={buttonClass} onClick={sendAction}>Send</button>
           
            <Show when={sending()}>
                <div class="text-green-600">Sending...</div>
            </Show>
            <Show when={error()}>
                <div class="text-red-600">Could not send the message</div>
            </Show>
        </div>
    );
}
