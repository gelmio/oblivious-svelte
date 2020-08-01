<script>
    import {fade} from 'svelte/transition'

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

    const changePhoto = (x) => {
        index = (index + x) % carouselPhotos.length
    }
</script>

{#each [carouselPhotos[index]] as src (index)}
    <div class="relative">
        <img class="absolute" transition:fade {src} alt="Royal Enfield in Africa" />
    </div>
{/each}

<button on:click={() => changePhoto(-1)}>prev!</button>
<button on:click={() => changePhoto(1)}>Next!</button>