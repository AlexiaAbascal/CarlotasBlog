<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-8 card">
                <div class="row g-0">
                    <div class="col-md-2 img-container d-flex">
                        <div class="image-overlay">
                            <img src="/src/assets/cable_beanie.jpg" class="img-fluid rounded-start" alt="cable beanie">
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="card-body">
                            <h4 class="card-title">Cable Beanie</h4>
                            <h6 class="card-text">This cable beanie knitting pattern features intricate, 
                                textured cable stitches that create a cozy and stylish design. The pattern guides you through knitting the hat in the round, 
                                using a combination of twisted stitches to form beautiful braided cables</h6>
                            <p class="card-text"><small class="text-body-secondary">Level : Advanced beginner</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.card-title{
    font-size: 24px;
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
    margin-top : 3rem;
    margin-bottom: 3rem;
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