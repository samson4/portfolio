<template>
    <div>
         
    
     <div class="process-container flex mt-12" id="portfolio" >
        <h3 class="text-[#fb923c]">Skills and Knowledges</h3>
        <div class="container ">
            <div class="list flex">
                <div class="inner-list " v-for="skill in skills">
                    <div class="icon hover:scale-125 transition-all"><Icon :name= skill.iconName></Icon></div>
                    <div class="title hover:scale-125 transition-all"><h3>{{ skill.title }}</h3></div>
                    <div class="text"><p>{{ skill.text }}</p></div>
                </div>                
            </div>
            
        </div> 
        
    </div>
    
</div> 
</template>


<script setup>
const skills = ref([
    {"title":"Django Rest Framework","iconName":"devicon:djangorest","text":"Tap into my experience with Django, Django Rest Framework and API Architecture as I help create robust and scalable Web Applications tailored to your most-wished business needs and desired technical outcomes."},
    {"title":"Python","iconName":"devicon:python","text":"Tap into my  experience with Python as I help create robust and scalable cloud solutions tailored to your most-wished business needs and desired technical outcomes."},
    {"title":"Vue Js","iconName":"devicon:vuejs","text":"Tap into my experience with Vue.js, Nuxt and Vuetify as I help create robust and scalable Web Applications tailored to your most-wished business needs and desired technical outcomes."}
])

</script>

<style scoped>
.list{
    
     width: 100%;
     
}
.icon { 
    font-size:120px ;
    text-align: center;
}
.title{
    
    text-align: center;
    color: #fb923c!important;
    
}
.text {
    text-align: center;
    margin: 2px;
    font-size: 20px;    
}
.inner-list{
    width: 50%;
    margin: 0 16px 0 16px;
}
.container{
    margin-top: 60px;
    max-width: 80%;
    max-height: 50%;
}

.process-container{
    max-width: 100%;
    max-height: 100%;
    justify-content: space-around;
}




</style>

