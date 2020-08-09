<script>
    import {fade} from 'svelte/transition'
    import {onDestroy} from "svelte";

    const carouselPhotos = [
        {
            imageSource: '/images/carousel/images(1).jpg',
            caption: "The Royal Enfield looking sensational in outback Guinea"
        },
        {
            imageSource: '/images/carousel/images(2).jpg',
            caption: "Cow in a tree... That's all..."
        },
        {
            imageSource: '/images/carousel/images(3).jpg',
            caption: "Trailblazing through Guinea. Too Fucking hot."
        },
        {
            imageSource: '/images/carousel/images(4).jpg',
            caption: "Hitchhiking the Sahara on a mining train into the night. Life goals."
        },
        {
            imageSource: '/images/carousel/images(5).jpg',
            caption: "Sunset in the stunning Sahara Desert. It's not all shit..."
        },
        {
            imageSource: '/images/carousel/images(6).jpg',
            caption: "Hiking in stunning outback Guinea."
        },
        {
            imageSource: '/images/carousel/images(7).jpg',
            caption: "One of the few properly done photo's from the trip. Props to our favourite Greek, Manos."
        },
        {
            imageSource: '/images/carousel/images(9).jpg',
            caption: "Posing infront of a boat."
        },
        {
            imageSource: '/images/carousel/images(10).jpg',
            caption: "Mobbed, with JB the Brit."
        },
        {
            imageSource: '/images/carousel/images(11).jpg',
            caption: "Hot as fuck in 40 degree heat and a leather jacket. The smile is a delerious one."
        }
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

<figure class="relative">
    <img class="relative" transition:fade src="{carouselPhotos[index].imageSource}"
         alt="{carouselPhotos[index].caption}"/>
    <button class="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-transparent"
            on:click={() => changePhoto(-1, true)}>
        <img class="h-20 md:h-40 opacity-50" src="/images/icons/keyboard_arrow_left-24px.svg" alt="arrow left">
    </button>
    <button class="absolute h-20 md:h-auto top-1/2 transform -translate-y-1/2 right-0 z-10 bg-transparent"
            on:click={() => changePhoto(1, true)}>
        <img class="h-20 md:h-40 opacity-50" src="/images/icons/keyboard_arrow_right-24px.svg" alt="arrow right">
    </button>
    <figcaption class="absolute top-100 left-0 right-0 text-center text-xl text-oblivious-dark">{carouselPhotos[index].caption}</figcaption>
</figure>
