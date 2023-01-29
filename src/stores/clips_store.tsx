import { createContext, createResource, useContext } from "solid-js";
import { isServer } from "solid-js/web";

const fetchClipsUrl = "/api/";
const fetchClipsUrlServer = "http://localhost:8080/";
const postClipUrl = "/api/add";

const ClipsContext = createContext();

const api_key='some key here';

export type Clip = {
    sender: string,
    reciever: string,
    text:string,
    date: Date
};

const fetchClips = async () => {
    let response = await fetch(isServer ? fetchClipsUrlServer : fetchClipsUrl, {
        method: "GET",
        headers: {
            "api_key":api_key
            }
        });
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

export const postClip = async (text: string, reciever: string | undefined ) => {
    let dto = {
            text,
            sender: "system",
            reciever: reciever ?? "system",
            persist: true

        };

    let response = await fetch(postClipUrl, {
        method: "POST",
        headers: {
            'api_key': api_key,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto)
    });
    return response.status == 200;
}

