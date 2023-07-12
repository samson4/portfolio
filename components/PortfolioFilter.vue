<template >
     <div class="portfolio-filter w-full">
        <div class="portfolio-head flex center">
                <div>
                    <ul>
                        <li><a href="#header" class="hover:opacity-25">All</a></li>
                    </ul>
                </div>
            <div>
                <ul>
                    <li> <a href="#portfolio">Cisco</a> </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><RouterLink to="#">Awards</RouterLink> </li>
                </ul>
                
            </div>
            <div>
                <ul>
                    <li><RouterLink to="#">Trend Micro</RouterLink></li>
                </ul>
                
            </div>
            <div>
                <ul>
                    <li><RouterLink to="#">Certifications</RouterLink></li>
                </ul>
                
            </div>
           
            
           
        </div>
        <div class="portfolio-list flex my-12 max-w-[1200px] m-auto flex-wrap justify-around relative z-0">
            <div class="inner-portfolio-list mx-[16px] " v-for="cert in certs">
                <ul>
                    <div class="cert mb-6 relative z-0">
                        <li><img class="hover:scale-125 transition-all" :src="cert.img" alt=""></li>
                    </div>
                </ul>
            </div>
        </div>
        </div>
        <div>
            <div class="float-right relative z-10  mt-[-160px]  ">
                <img src="/2.png" class="" alt="">
            </div>
        </div>
</template>


<script setup>
const certs = ref([
    {"name":"Cisco introduction to Networks","img":"/intro.png"},
    {"name":"CCNA Enterprise Network Security and Automation","img":"/ENSA.png"},
    {"name":"CCNA Switching Routing & Wireless Essentials","img":"/SRWE.png"},
    {"name":"Trend Micro TrendCampus Foundation","img":"/TC.png"},
    {"name":"Cisco introduction to Networks","img":"/AWSudemy.jpg"},
    {"name":"Cisco introduction to Networks","img":"/intro.png"},
    

])



</script>

<style>
.router-link-exacy-active{
    color: #fb923c;
}
.portfolio-head{
    text-align: center;
    justify-content: space-evenly;
    /* max-width: 80%; */
   
}
ul li{
    font-size: 18px;
}
.cert li img{
    /* background-color: aliceblue;......''''[] */
    max-width: 360px;
    max-height: 350px;
    border-radius: 6px;
}
</style>