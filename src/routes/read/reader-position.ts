import { writable } from 'svelte/store';

let storedPosition = null

if(typeof window !== 'undefined') {
    storedPosition = JSON.parse(window.localStorage.getItem("readerPosition")) || null
    console.log(storedPosition)
}

export const readerPosition = writable(storedPosition);

readerPosition.subscribe((newPosition: number[]) => {
    if (typeof window !== 'undefined') {
        console.log(typeof newPosition)
        window.localStorage.setItem("readerPosition", JSON.stringify(newPosition))
    }
})