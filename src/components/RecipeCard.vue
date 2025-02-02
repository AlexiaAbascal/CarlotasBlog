<template>
    <div class="container">
        <div class="display-content">
            <div class="row d-flex justify-content-center row-container">
                <div v-for="recipe in recipes" :key="recipe.id" class="col-md-10 card">

                    <div class="img-container">
                        <div class="image-overlay">
                            <img :src="`/assets/icons/images/${recipe.image}`" class="img-fluid  top-border-radius">
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="card-container d-flex flex-wrap"> 
                            <router-link :to="`/recipes/${recipe.id}`" class="card-title">
                                <h4 class="title-text">{{ recipe.title }}</h4>
                            </router-link>
                            
                            <div v-for="index in 5" :key="index" class="rating">
                                <img :src="index <= recipe.rating ? '/assets/icons/full_heart.png' : '/assets/icons/empty_heart.png'" 
                                    class="hearts_icon img-fluid ">
                            </div>
                        </div>
                        
                        <div class="d-flex justify-content-between flex-wrap"> 
                            <div class="description">
                                <p class="card-text">{{recipe.description}}</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from "../database/data_recipes.json";
export default {
    data() {
        return {
            recipes: data  
        };
    }
}
</script>


<style scoped>

.title-text{
    margin:0px;
}


.display-content{
    margin-left: 6px;
    margin-right:6px;
}

.rating{
    padding:0px;
    margin-left:8px;
}

.hearts_icon{
    height:15px;
    width:15px;
    padding:0px;
    margin-top:4px;

}

.card-title {
    font-size: 24px;
    text-decoration: none;
    margin-top:4px;
    margin-bottom:0px;
}

.card-text {
    font-size: 14px;
    text-align: justify;
    padding:0px;
    margin-top:0px;
    margin-right: 8px;
    margin-bottom: 0px;
}

.card-body {
    padding: 0px;
    margin-left:0.4rem;
    margin-top:0.2rem;
}

.card {
    padding: 0px;
    margin-bottom:1rem;
    background-color:#746E6E;
}

.text-body-secondary {
    color: #ECECEC !important;
}

.container {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.img-container {
    position: relative;
}

.image-overlay {
    position: relative;
    width: 100%;
    height: 150px; 
    border-top-left-radius: 6px;  /* Adjust this value to your liking */
    border-top-right-radius: 6px; /* Adjust this value to your liking */
}

.image-overlay img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-top-left-radius: 6px;  /* Adjust this value to your liking */
    border-top-right-radius: 6px; /* Adjust this value to your liking */
}

.image-overlay::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1c333450;
    pointer-events: none;
    border-top-left-radius: 6px;  /* Adjust this value to your liking */
    border-top-right-radius: 6px; /* Adjust this value to your liking */}
</style>
