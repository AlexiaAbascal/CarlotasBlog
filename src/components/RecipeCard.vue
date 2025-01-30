<template>
    <div class="container">
        <div class="display-content">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 card">

                <div class="img-container">
                    <div class="image-overlay">
                        <img src="/src/assets/comida_1.jpg" class="img-fluid  top-border-radius">
                    </div>
                </div>

                <div class="card-body">
                    <div class="d-flex flex-wrap"> 
                    <h4 class="card-title">Chocolate Bread</h4>
                    <div class="rating">
                                <img src="/src/assets/icons/full_heart.png" class="hearts_icon img-fluid me-1">
                                <img src="/src/assets/icons/full_heart.png" class="hearts_icon img-fluid me-1">
                                <img src="/src/assets/icons/full_heart.png" class="hearts_icon img-fluid me-1">
                                <img src="/src/assets/icons/empty_heart.png" class="hearts_icon img-fluid me-1">
                                <img src="/src/assets/icons/empty_heart.png" class="hearts_icon img-fluid me-3">
                            </div>
                        </div>
                    <div class="d-flex justify-content-between flex-wrap"> 
                        <div class="description">
                            <p class="card-text">A delicious, soft, and slightly sweet treat made with rich cocoa</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>

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
}

.card-title {
    font-size: 24px;
    margin-bottom:0rem;
}

.card-text {
    font-size: 14px;
    text-align: justify;
    padding:0px;
    margin-top:0px;
    margin-right: 8px;
}

.card-body {
    padding: 0px;
    margin-left:0.4rem;
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
