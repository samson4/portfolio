<template>
  
    <div class="container" >
        <div class="flex" id="header" >


          <div class="button-div">
              <h3 class=" py-2 px-4 text-[#fb923c] ">Samson</h3>
          </div>


         <div class="header-div w-full  ">
          <ul class="flex items-center justify-end text-[#333333]  ">
            <div class="button-div ">
              <button class="hover:bg-[#fb923c]  py-2 px-4 rounded-full">Home</button>
            </div>
            <div class="button-div ">
              <button class="hover:bg-[#fb923c] py-2 px-4 rounded-full border-rose-500"><a href="#about">About</a></button>
            </div>
            <div class="button-div ">
              <button class="hover:bg-[#fb923c] transition-color delay-100 hover:text-white min-w-[180px] border border-[#f75023] rounded-full "><a href="mailto:samsonkebede4@gmail.com">Contact</a></button>
              
            </div>
          </ul>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
   
  </script>

<style>
.container {
  max-width: 100%;
  position:absolute;
}
.button-div{
  margin: 10px;
  max-width: 90%;
  
}
ul {
  font-size: 26px;
}
h3{
  font-size: 26px;
}

</style>
