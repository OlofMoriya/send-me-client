import { For, Resource, Suspense } from "solid-js";
import { useClips } from "../stores/clips_store";
import Clip from "./Clip";

export default function Clips() {
    const [clips, _] = useClips() as [Resource<any>, any];
    return (
        <div>
            <Suspense fallback={<div>loading...</div>}>
                <For each={clips()}>
                    {clip => <Clip clip={clip}/>}
                </For>
            </Suspense>
        </div>
   );
}
