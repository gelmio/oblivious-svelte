<script>
    import {fade} from 'svelte/transition'
    import {onDestroy} from "svelte";

    const carouselPhotos = [
        '/images/carousel/images(1).jpg',
        '/images/carousel/images(2).jpg',
        '/images/carousel/images(3).jpg',
        '/images/carousel/images(4).jpg',
        '/images/carousel/images(5).jpg',
        '/images/carousel/images(6).jpg',
        '/images/carousel/images(7).jpg',
        '/images/carousel/images(9).jpg',
        '/images/carousel/images(10).jpg',
        '/images/carousel/images(11).jpg',
        '/images/carousel/images(11).jpg',
    ]

    let index = 0

    const changePhoto = (step, stopInterval) => {
        if (index === 0 && step === -1) {
            index = carouselPhotos.length - 1
        } else {
            index = (index + step) % carouselPhotos.length
        }
        if (stopInterval) {
            clearInterval(interval)
        }
    }

    const interval = setInterval(() => changePhoto(1), 6000)

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="relative">
    <img class="relative" transition:fade src="{carouselPhotos[index]}" alt="Royal Enfield in Africa" />
    <button class="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-transparent" on:click={() => changePhoto(-1, true)}>
        <img class="h-40 opacity-50" src="/images/icons/keyboard_arrow_left-24px.svg" alt="arrow left">
    </button>
    <button class="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-transparent" on:click={() => changePhoto(1, true)}>
        <img class="h-40 opacity-50" src="/images/icons/keyboard_arrow_right-24px.svg" alt="arrow right">
    </button>
</div>