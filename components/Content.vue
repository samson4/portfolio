<template>
<div>
    <div class="mt-40 justify-center flex" >
        <div class="container-content"  >

          <div class="button-div flex hello  ">
              <h3 class="text-[#fb923c] orangeText ">Hello, I'm</h3>
          </div>

          <div>
            <h2 class="name">Samson Kebede</h2>
          </div>

          <div class="job w-full">
            <p>
                Experienced
                <span class="orangeText">Software Developer</span>
                and
                <span class="orangeText">System Administrator</span>
            </p>
          </div>

          <div class="text w-full h-[50%]">
            <p>
                Based in the ever-evolving world of technology, I have dedicated four decades to mastering my craft in software development. With a particular passion for Amazon Web Services (AWS), I have spent the last decade immersing myself in this domain, becoming a recognized authority in architecting and implementing cloud solutions.  
            </p>
          </div>

        </div>

        <div class="avatar ml-16">
            <div class="image">
                <img class="profilePictureHero max-h-[733px] w-[733px] border-red" src="https://res.cloudinary.com/dpj8cuqfq/image/upload/v1689081074/mhzcubtmxkq3cjingnpu.jpg" alt="profile pic">
            </div>

        </div>
        
    </div>
    <div class="flex  mb-16 ">
            <div class="About-me">
                <button class="hover:bg-transparent transition-color delay-100 hover:text-black bg-[#f75023] py-2 px-4 rounded-full border border-[#f75023] text-white" >About me</button>
            </div>
            <div class="socials flex mt-1 center">
                <div class="facebook  ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Icon name="uil:facebook"></Icon>
                    </a>
                </div>
                <div class="twitter ml-6 ">
                    <a href="https://twitter.com/KebedeSamson" target="_blank" rel="noopener noreferrer">
                        <Icon name="uil:twitter"></Icon>
                    </a>
                </div>
                <div class="linkedin ml-6 ">
                    <a href="https://www.linkedin.com/in/samson-kebede-123270206/" target="_blank" rel="noopener noreferrer" >
                        <Icon name="uil:linkedin"></Icon>
                    </a>
                </div>
            </div>
        </div>
</div>
</template>
  
  <script setup>
   
  </script>

<style scoped>
.container-content{
    box-sizing: border-box;
    max-width: 50%;
    max-height: 50%;
    
}

.hello h3{
    font-size: 45px;
}
.orangeText{
    color: #fb923c!important;
    
}
.name{
    font-size: 80px;
    font-weight:600;
    max-width: 100%;
    
}
.job p{
    margin: 20px auto;
    font-size: 28px;
}
.text p {
    font-size: 25px;
    
}
.About-me{
    font-size: 18px;
}
.avatar {
    width: 50%;
    
   
}

.profilePictureHero{
    
    
    object-fit: cover;
    border-radius: 6px;
    
}
.image{
    position: relative;
    max-width: 100%;
    height: auto;
}
.socials{
    font-size: larger;
    margin-left: 60px;
   
}
</style>