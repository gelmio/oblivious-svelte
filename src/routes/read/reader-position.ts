import { writable } from 'svelte/store';

let storedPosition = null

if(typeof window !== 'undefined') {
    storedPosition = JSON.parse(window.localStorage.getItem("readerPosition")) || null
}

export const readerPosition = writable(storedPosition);

readerPosition.subscribe((newPosition: number[]) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem("readerPosition", JSON.stringify(newPosition))
    }
})