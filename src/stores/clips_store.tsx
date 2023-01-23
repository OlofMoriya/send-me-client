import { createContext, createResource, useContext } from "solid-js";
import { isServer } from "solid-js/web";

const fetchClipsUrl = "/api/";
const fetchClipsUrlServer = "http://localhost:8080/";
const postClipUrl = "/api/add";

const ClipsContext = createContext();

const fetchClips = async () => {
    let response = await fetch(isServer ? fetchClipsUrlServer : fetchClipsUrl);
    let clips = await response.json();
    clips.reverse();
    return clips;
};

export function ClipsProvider(props: any) {
    const [clips, { mutate, refetch}] = createResource(fetchClips);

    return (
        <ClipsContext.Provider value={[clips,refetch]}>
            {props.children}
        </ClipsContext.Provider>
    );
}

export function useClips() { return useContext(ClipsContext); }

export const postClip = async (text: string) => {
    let response = await fetch(postClipUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: text
    });
    return response.status == 200;
}

