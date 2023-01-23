import AddClipForm from "~/components/AddClip";
import Clips from "~/components/Clips";
import { ClipsProvider } from "~/stores/clips_store";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="max-6-xs text-6xl text-slate-700 font-thin uppercase my-16">
            Send me
        </h1>
        <ClipsProvider >
            <div class="flex flex-col items-center">
                <AddClipForm />
                <Clips />
            </div>
        </ClipsProvider>
    </main>
  );
}
