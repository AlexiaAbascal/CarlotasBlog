<template>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid ms-5">
            <img alt="Blog logo" class="logo" src="../assets/temp_logo.png" width="40" height="40" />
            <a class="navbar-brand ms-2">Carlota's Blog</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto me-5">
                    
                    <img alt="patterns" class="patterns mt-1 me-1" src="../assets/icons/pattern_icon.png" width="30" height="30" /> 
                    <RouterLink to="/patterns" class="navlink me-4 mt-1">Patterns</RouterLink>

                    <img alt="recipes" class="recipes mt-1 me-1" src="../assets/icons/recipe_icon.png" width="25" height="25" /> 
                    <RouterLink to="/recipes" class="navlink me-4 mt-1">Recipes</RouterLink>


                    <img alt="home" class="home mt-1 me-1" src="../assets/icons/home_icon.png" width="25" height="25" /> 
                    <RouterLink to="/" class="navlink me-4 mt-1">Home</RouterLink>

                </div>
            </div>

        </div>
    </nav>

</template>
<!-- d4a6b1 -->
<!-- #3b3033 -->
<style>
    .navbar{
        background-color: #3b3033;
    }
    
    .navbar-brand, .navlink{
        color: #ECECEC !important;
        text-decoration: none;
        text-shadow: 
        0.5px 0.5px 0px black,   /* Shadow to the right and down */
        -0.5px -0.5px 0px black,  /* Shadow to the left and up */
        0.5px -0.5px 0px black,   /* Shadow to the right and up */
        -0.5px 0.5px 0px black;  
    }
    .navbar-toggler{
        background-color: #ECECEC !important; 
        border : none !important;

    }
    .navbar-toggler:focus{
        outline: none;
        box-shadow: none;
    }
</style>