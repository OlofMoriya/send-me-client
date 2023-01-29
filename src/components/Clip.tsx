import { Show } from "solid-js";
import { Clip } from "~/stores/clips_store";

export default function(clip: Clip) {
    return (
        <div class="flex flex-col max-w-xxl bg-slate-700 m-8 p-2 rounded">
            <div class="text-md p-8 text-slate-100">
                {clip.text}
            </div>
            <div class="flex flex-row justify-between">
                <div class="text-sm text-slate-500">
                    {clip.date.toString()}
                </div>
                <div class="text-sm text-slate-500">
                <Show when={clip.reciever != clip.sender}>
                    {clip.sender} to {clip.reciever}
                </Show>
                    {clip.sender}
                </div>
            </div>
        </div>
    );
}
