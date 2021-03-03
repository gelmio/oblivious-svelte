export default function smoothScroll(
    element: HTMLElement | Window,
    initial: [x: number, y: number],
    final: [x: number, y: number],
    duration: number,
    callback: Function = null
) {
    let startTime;
    const scrollOnNextTick = timestamp => {
        const runTime = timestamp - startTime;
        const progress = runTime / duration;
        const newPosition = [
            initial[0] + (final[0] - initial[0]) * progress,
            initial[1] + (final[1] - initial[1]) * progress
        ];
        if (runTime < duration) {
            element.scrollTo(newPosition[0], newPosition[1])
            requestAnimationFrame(scrollOnNextTick);
        } else {
            element.scrollTo(final[0], final[1])
            if (callback) {
                callback()
            }
        }
    }
    requestAnimationFrame((timestamp) => {
        startTime = timestamp;
        scrollOnNextTick(timestamp);
    });

}