<template>
    <div class="container">
        <div class="display-content">
            <div class="row d-flex justify-content-center">
                <div v-for="pattern in patterns" :key="pattern.id" class="col-md-9 card">
                    <div class="row g-0">
                        <div class="col-md-2 img-container d-flex">
                            <div class="image-overlay">
                                <img :src="`./src/assets/images/${pattern.image}`" class="img-fluid rounded-start" alt="cable beanie">
                            </div>
                        </div>
                        <div class="col-md-10">
                            <div class="card-body">

                                <router-link :to="`/patterns/${pattern.id}`" class="card-title">
                                    <h4 class="title-text">{{ pattern.title }}</h4>
                                </router-link>
                                <h6 class="card-text">{{ pattern.description }}</h6>
                                <p class="card-text"><small class="text-body-secondary">Level : {{ pattern.level }}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from "../database/data_patterns.json";
export default {
    data() {
        return {
            patterns: data  
        };
    }
}
</script>


<style scoped>

.display-content{
    margin-left: 6px;
    margin-right:6px;
}

.card-title{
    font-size: 24px;
    text-decoration: none;

}

.card-text{
    font-size: 14px;
    text-align: justify;
}

.card-body {
    padding: 6px;
    margin-left: 6px; 
    margin-top: 8px;
}

.card{
    padding: 0px;
    margin: 0px;
    background-color:#746E6E;
}

.text-body-secondary{
    color: #ECECEC !important;

}

.container{
    margin-top : 2rem;
    margin-bottom: 2rem;
}

.img-container {
    position: relative;
}

.image-overlay {
    position: relative;
    width: 100%;
    height: 100%;
}

.image-overlay img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.image-overlay::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1c333450 ; 
    pointer-events: none; 
}
</style>