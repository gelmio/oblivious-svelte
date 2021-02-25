import { writable } from 'svelte/store';

let storedPosition = null
let storedGiveScrollHint = null

if(typeof window !== 'undefined') {
    storedPosition = JSON.parse(window.localStorage.getItem("readerPosition")) || null
    storedGiveScrollHint = JSON.parse(window.localStorage.getItem("storedGiveScrollHint")) ?? true
}

export const readerPosition = writable(storedPosition);
export const giveScrollHint = writable(storedGiveScrollHint);

readerPosition.subscribe((newPosition: number[]) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem("readerPosition", JSON.stringify(newPosition))
    }
})

giveScrollHint.subscribe((newState: boolean) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem("storedGiveScrollHint", JSON.stringify(newState))
    }
})
