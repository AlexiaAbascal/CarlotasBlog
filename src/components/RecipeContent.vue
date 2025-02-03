<template>
    <div class="container">
        <div class="display-content">
            <div class="row d-flex justify-content-center">
                <div class="col-md-10 card">
                    <div class="img-container">
                        <div class="image-overlay">
                            <img :src="`../images/${recipe.image}`" class="img-fluid top-border-radius" alt="image not found" />
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title mt-3">{{ recipe.title }}</h4>

                        <div class="time-description">
                            <p class="card-text">Preparation time: {{ recipe.prepTime }}</p>
                        </div>

                        <div class="ingredients-description">
                            <h6 class="ingredients-title mt-3">Ingredients</h6>
                            <div class="mt-2">
                                <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="form-check">
                                    <input class="form-check-input" type="checkbox" :id="'ingredient-' + index">
                                    <label class="form-check-label" :for="'ingredient-' + index">
                                        {{ ingredient }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="intructions-description">
                            <h6 class="instructions-title mt-3">Instructions</h6>
                            <div class="instructions-set">
                                <div v-for="(instruction, index) in recipe.instructions" :key="index">
                                    <h5 class="mt-3">{{ instruction }}</h5>
                                </div>
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
    props: ['id'], 
    computed: {
        recipe() {
            return data.find(recipe => recipe.id === this.id);
        }
    }
};
</script>

<style scoped>
label,
h5 {
    font-size: 14px !important;
    text-align: justify;
    margin-right: 12px;
}

.form-check-input:checked {
    background-color: #ED739F !important;
    border: #ff69b480;
}

.form-check-input {
    border-color: #ddd;
}

.form-check-input:checked:focus {
    box-shadow: 0 0 0 0.25rem #ff69b480;
}

.form-check-input:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 105, 180, 0.5);
}

.display-content {
    margin-left: 6px;
    margin-right: 6px;
}

.rating {
    padding: 0px;
    margin-left: 8px;
}

.hearts_icon {
    height: 15px;
    width: 15px;
    padding: 0px;
}

.card-title {
    font-size: 28px;
    margin-bottom: 0rem;
}

.ingredients-title,
.instructions-title {
    font-size: 20px;
    font-weight: 500 !important;
    color: #373033 !important;
}

.card-text {
    font-size: 14px;
    text-align: justify;
    padding: 0px;
    margin-top: 0px;
    margin-right: 8px;
}

.card-body {
    padding: 0px;
    margin-left: 0.4rem;
    margin-top: 0.2rem;
}

.card {
    padding: 0px;
    margin: 0px;
    background-color: #746E6E;
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
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.image-overlay img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
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
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
</style>