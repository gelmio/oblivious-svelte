import { V as writable } from './client.c6921205.js';

var _a;
let storedPosition = null;
let storedGiveScrollHint = null;
if (typeof window !== 'undefined') {
    storedPosition = JSON.parse(window.localStorage.getItem("readerPosition")) || null;
    storedGiveScrollHint = (_a = JSON.parse(window.localStorage.getItem("storedGiveScrollHint"))) !== null && _a !== void 0 ? _a : true;
}
const readerPosition = writable(storedPosition);
const giveScrollHint = writable(storedGiveScrollHint);
readerPosition.subscribe((newPosition) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem("readerPosition", JSON.stringify(newPosition));
    }
});
giveScrollHint.subscribe((newState) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem("storedGiveScrollHint", JSON.stringify(newState));
    }
});

export { giveScrollHint as g, readerPosition as r };
