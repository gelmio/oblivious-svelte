<script>
    import Carousel from "../components/Carousel.svelte";
</script>
<style>
</style>

<svelte:head>
    <title>Oblivious - An overlanding motorbike journey through West Africa</title>
    <meta property="og:description"
          content="Oblivious is the epic true-life solo overlanding journey, motorbiking through West Africa on a Royal Enfield. Come along on the unique adventure!"/>
    <meta property="og:url" content="http://www.obliviousthebook.com/"/>
    <meta property="og:site_name" content="ObliviousTheBook.com"/>
    <meta property="fb:admins" content="563453705"/>
    <meta property="og:image"
          content="http://www.obliviousthebook.com/img/portfolio/fullsize/3D-cover-text-farcebook.jpg"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:description"
          content="Oblivious is the epic true-life solo overlanding journey, motorbiking through West Africa on a Royal Enfield. Come along on the unique adventure!"/>
    <meta name="twitter:title" content="Oblivious - An overlanding motorbike journey through West Africa"/>
    <meta name="twitter:image"
          content="http://www.obliviousthebook.com/img/portfolio/fullsize/3D-cover-text-twitter.jpg"/>
</svelte:head>

<section class="flex flex-col items-center max-w-4xl">
    <h1 class="text-center">The <em>Oblivious Trilogy</em> is (finally) <a href="get-the-book">here</a>!</h1>
    <img class="my-4 max-w-full max-h-1/2vh" alt='Oblivious book cover' src='/images/3D-cover.jpg'>
    <div>
        <button class="text-2xl">Get the book now</button>
        <span class="text-xl ml-2">...or get a taste of the adventure <a href="get-a-taste">here</a></span>
    </div>
</section>
<section class="my-20 px-10 w-full">
    <h5 class="text-center mb-3"><strong>AS FEATURED IN</strong></h5>
    <div class="h-20 grid sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10" style="justify-items: center">
        <img class="self-center max-h-24" src="images/OverlandBound-grey.png" alt="Overland Bound">
        <img class="self-center max-h-24" src="images/Rider-grey.png" alt="Rider Magazine">
        <img class="self-center max-h-24" src="images/ADVMoto-grey.png" alt="ADVMoto">
        <img class="self-center max-h-24" src="images/ExcuseMyBike-grey.png" alt="Excuse my bike">
        <img class="self-center max-h-24" src="images/royalenfield-grey.png" alt="Royal Enfield">
        <img class="self-center max-h-24" src="images/cruiser-grey.png" alt="Royal Enfield">
    </div>
</section>
<section class="my-20 px-20 w-full">
    <Carousel />
</section>

