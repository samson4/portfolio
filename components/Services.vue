<template >
  <div class="services my-[1250px] ">
    <div class="container-offer ">
        <span class="font-semibold text-[#f75023] text-[22px]">Projects</span>
        <h3 class="font-semi text-[42px] mb-3">What I Offer to Clients</h3>
        <p class="text-[#6f6b80]">With a focus on software development, AWS solutions, Netwoking and System Administration, I provide a range of services that bring value to your organization and foster an innovative culture.<br>
Explore into my full time and various side projects that can provide a general view of what I can provide for your company.</p>
    </div>
    <div class="service-list my-16  w-full">
      <div class="absolute z-0 mt-[-140px]">
        <img src="/5.png" alt="">
      </div>
      <div class="inner relative z-10 flex flex-wrap w-[80%] " @mouseenter="">
        
            <div class="w-[45%] hover:rotate-[2deg] h-[400px] transition-all flex shadow-2xl rounded-2xl mb-12 bg-white transparent">
              <span class=" min-w-[40%] text-center pt-6"><Icon name="material-symbols:restaurant-rounded" class=""></Icon></span>
              <div class="service-inner m-auto"> 
                <h3 class="max-w-[300px] ">Online Food Ordering and delivery </h3>
                <p>A web app that automates the traditional ordering and delivery of food for restaurant customers. The system incorporates third party Apis like "mapbox" for restaurant locations and "Yenepay" For easy payment system </p>
              <div class="stacks flex justify-evenly mt-3">
                <Icon class="w-[30px] h-[30px] " name="logos:django-icon"></Icon>
                <Icon class="w-[30px] h-[30px] " name="devicon:html5"></Icon>
                <Icon class="w-[30px] h-[30px] " name="devicon:javascript"></Icon>
                <Icon class="w-[30px] h-[30px] " name="devicon:bootstrap"></Icon>
              </div>
              <div class="text-left">
              <button class="hover:bg-black hover:text-white border-2 border-[#f75023] rounded-lg my-6 px-1 transition-all"><a href="https://github.com/samson4/foodapp" target="_blank" rel="noopener noreferrer"><span class="px-1"><Icon name="skill-icons:github-dark" ></Icon></span>Source Code </a></button>
            </div>
              </div>
            </div>
          
       
        <div class="w-[45%] hover:rotate-[6deg] h-[400px] transition-all flex shadow-2xl  rounded-lg mb-12">
          <span class=" min-w-[40%] text-center pt-6 "><Icon name="emojione:movie-camera" class=""></Icon></span>
          <div class="service-inner m-auto"> 
            <h3 class="max-w-[300px] ">HDToday Clone</h3>
          <p class="max-w-[220px]">A side project that mimics a movie streaming website called HDToday built with MEVN stack and Vuetify as a UI library.An admin uploads a movie and is displayed for users.</p>
            <div class="stacks flex justify-evenly mt-3">
              <Icon class="w-[30px] h-[30px]" name="devicon:nodejs"></Icon>
              <Icon class="w-[30px] h-[30px]" name="devicon:express"></Icon>
              <Icon class="w-[30px] h-[30px]" name="devicon:mongodb"></Icon>
              <Icon class="w-[30px] h-[30px]" name="devicon:vuejs"></Icon>
            </div>
            <div class="text-left">
              <button class="hover:bg-black hover:text-white border-2 border-[#f75023] rounded-lg my-6 px-1 transition-all"><a href="https://github.com/samson4/hdtoday" target="_blank" rel="noopener noreferrer"><span class="px-1"><Icon name="skill-icons:github-dark" ></Icon></span>Source Code </a></button>
            </div>
            
          </div>
        </div>

        <div class="w-[45%] hover:rotate-[6deg] h-[400px] transition-all flex shadow-2xl rounded-lg mb-12">
          <span class="min-w-[40%] text-center pt-6"><Icon name="mdi:blogger"></Icon></span>
          <div class="service-inner m-auto"> 
            <h3 class="max-w-[300px]">Django Blog</h3>
            <p class="w-[220px]">A re-implementation for a Django Blog tutorial series by Corey M Schafer which is found on Youtube. I remade the app with Django Rest framework and vue.js. Also added more functionalities like search support.</p>        
            <div class="stacks flex justify-between mt-3 ">
            <Icon class="w-[30px] h-[30px] " name="devicon:djangorest"></Icon>
            <Icon class="w-[30px] h-[30px] " name="devicon:vuejs"></Icon>
            <Icon class="w-[30px] h-[30px] " name="devicon:bootstrap"></Icon>
          </div>
          <div class="text-left">
              <button class="hover:bg-black hover:text-white border-2 border-[#f75023] rounded-lg my-6 px-1 transition-all"><a href="https://github.com/samson4/Blog-backend" target="_blank" rel="noopener noreferrer"><span class="px-1"><Icon name="skill-icons:github-dark" ></Icon></span>Source Code </a></button>
            </div>
          </div>
          
        </div>
        

      </div>
    </div>
  </div>
</template>
  
<script setup>

const options = defineProps(
  {
    reverse: false, // reverse the tilt direction

max: 35, // max tilt rotation (degrees)

startX: 0, // the starting tilt on the X axis, in degrees.

startY: 0, // the starting tilt on the Y axis, in degrees.

perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.

scale: 1, // 2 = 200%, 1.5 = 150%, etc..

speed: 300, // Speed of the enter/exit transition

transition: true, // Set a transition on enter/exit.

axis: null, // What axis should be disabled. Can be X or Y.

reset: true, // If the tilt effect has to be reset on exit.

easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.

glare: false, // if it should have a "glare" effect

"max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)

"glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise

// you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself

"mouse-event-element": null, // css-selector or link to HTML-element what will be listen mouse events

// you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself

gyroscope: true, // Boolean to enable/disable device orientation detection,

gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;

gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;

gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;

gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;


}
)
</script>

<style scoped>
.container-offer{
 max-width: 50%;
 text-align: center;
 margin: 0 25% 0 25%;
}
p{
  line-height: 28px;
}
.inner{
  margin: auto;
  justify-content: space-between;
  /* background-color: #f2f2f2; */
  
  
}
/* .service-inner{
  float: left;
} */

</style>