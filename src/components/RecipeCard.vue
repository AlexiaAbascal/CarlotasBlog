<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 card">

                <div class="img-container">
                    <div class="image-overlay">
                        <img src="/src/assets/comida_1.jpg" class="img-fluid rounded">
                    </div>
                </div>

                <div class="card-body">
                    <h4 class="card-title">Chocolate Bread</h4>
                    <p class="card-text">Some description about the product goes here.</p>
                    <!-- <img src="/src/assets/icons/full_heart.png" class="img-fluid rounded" >
                    <img src="/src/assets/icons/empty_heart.png" class="img-fluid rounded"> -->

                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.card-title {
    font-size: 24px;
    margin-bottom:0rem;
}

.card-text {
    font-size: 14px;
    text-align: justify;
}

.card-body {
    height: 60px;
    padding: 0px;
    margin-left:1rem;
    margin-top:0.2rem;
}

.card {
    padding: 0px;
    margin: 0px;
    background-color:#746E6E;
}

.text-body-secondary {
    color: #ECECEC !important;
}

.container {
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.img-container {
    position: relative;
}

.image-overlay {
    position: relative;
    width: 100%;
    height: 150px; 
    border-radius:6px;
}

.image-overlay img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius:6px;
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
    border-radius:6px;
}
</style>
