<script>
import Carousel from "../components/Carousel.svelte";
import DownloadBox from "../components/DownloadBox.svelte";
</script>
<style>
</style>

<svelte:head>
    <title>Oblivious | An outrageously inappropriate journey through West Africa</title>
    <meta name="description" content="Oblivious is an epic true-life solo overlanding journey through West Africa on a Royal Enfield motorbike. Come along on the unique adventure for free!">
    <meta property="og:description"
          content="Oblivious is an epic true-life solo overlanding journey through West Africa on a Royal Enfield motorbike. Come along on the unique adventure for free!"/>
    <meta property="og:url" content="http://www.obliviousthebook.com/"/>
    <meta property="og:site_name" content="ObliviousTheBook.com"/>
    <meta property="fb:admins" content="563453705"/>
    <meta name="twitter:description"
          content="Oblivious is an epic true-life solo overlanding journey through West Africa on a Royal Enfield motorbike. Come along on the unique adventure for free!"/>
    <meta name="twitter:title" content="Oblivious | An outrageously inappropriate journey through West Africa"/>
</svelte:head>

<section class="flex flex-col items-center mt-8 md:mt-20">
    <h1 class="text-4xl md:text-6xl text-center mb-2">Yeah Buddy!</h1>
    <h2 class="text-xl md:text-3xl text-center">Book two of the <em>Oblivious Trilogy</em> is <a href="read" rel="prefetch">here</a> and available for free!</h2>
</section>
<section class="flex flex-col items-center mb-20 md:mb-32">
    <img class="my-12 max-w-3xl max-h-1/2vh" alt='Oblivious book cover' src='/images/3D-cover.jpg'>
    <div class="flex flex-col md:flex-row justify-center items-center">
        <a class="inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious" href="read" rel="prefetch">Start reading now</a>
        <DownloadBox>
            <div 
                class="inline-block text-xl sm:text-2xl p-4 mx-4 my-2 rounded-lg no-underline bg-white border border-solid border-oblivious"
            >
                    Or download the e-book
		    </div>
        </DownloadBox>
    </div>
</section>
<!-- <section class="mb-20 md:mb-32 px-10 w-full">
    <AsSeenIn />
</section> -->
<section class="flex flex-col items-center mb-20 md:mb-32">
    <h1 class="text-4xl md:text-6xl text-center">Ride through Africa with me on an outrageously inappropriate <em>Royal Enfield Bullet</em></h1>
</section>
<section class="flex mb-28 md:mb-32 sm:px-20">
    <Carousel/>
</section>
<section class="flex flex-col justify-center items-center mb-20 md:mb-32">
    <h2 class="text-4xl md:text-6xl text-center mb-8">Ride the Adventure from your phone, tablet or e-reader</h2>
    <div class="flex relative items-end justify-center mx-0 lg:mx-10 mb-10">
        <img class="relative inline-block w-full lg:w-2/3 lg:-mr-10" src="/images/kindle-pad-phone.jpg" alt="book being used on various platforms">
        <div class="hidden lg:inline-block w-1/3 z-10 pb-4">
            <p class="absolute top-0 right-0 left-1/2 mt-1 text-xl">
                "This is fascinating shit, man. You're reminding me of a modern Hemingway"<br>
                <span class="text-oblivious-dark">- Ben Napier, <em>Scotsman.co</em></span>
            </p>
            <div class="absolute top-1/4 bottom-0 pb-8 flex flex-col justify-between">
                <p class="text-xl">
                    "Jesus tap-dancing Christ these are great stories"<br>
                    <span class="text-oblivious-dark">- Zach Kelm</span>
                </p>
                <p class="text-xl">
                    "Adventure is such an abused and overused word these days... Check this out for a taste of <em>real</em> adventure."<br>
                    <span class="text-oblivious-dark">- Iron and Resin</span>
                </p>
                <p class="text-xl">
                    "Don't laugh at him, he's not funny!"<br>
                    <span class="text-oblivious-dark">- My Mum</span>
                </p>
            </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center">
        <a class="inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious" href="read" rel="prefetch">Read online now</a>
        <DownloadBox>
            <div 
                class="inline-block text-xl sm:text-2xl p-4 mx-4 my-2 rounded-lg no-underline bg-white border border-solid border-oblivious"
            >
                    Or download the e-book
		    </div>
        </DownloadBox>
    </div>
</section>
<section class="mb-20 md:mb-32 sm:px-20 text-center">
    <h2 class="text-5xl md:text-6xl">Adventure for free!</h2>
    <h3>Or... pay what you like!</h3>
</section>