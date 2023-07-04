<template>
    <div>
         
    
     <div class="process-container flex" id="portfolio" >
        
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
    {"title":"Django Rest Framework","iconName":"devicon:djangorest","text":"Tap into my decades-long experience with AWS, cloud, and infrastructure as I help create robust and scalable cloud solutions tailored to your most-wished business needs and desired technical outcomes."},
    {"title":"Python","iconName":"devicon:python","text":"Tap into my decades-long experience with AWS, cloud, and infrastructure as I help create robust and scalable cloud solutions tailored to your most-wished business needs and desired technical outcomes."},
    {"title":"Vue Js","iconName":"devicon:vuejs","text":"Tap into my decades-long experience with AWS, cloud, and infrastructure as I help create robust and scalable cloud solutions tailored to your most-wished business needs and desired technical outcomes."}
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

