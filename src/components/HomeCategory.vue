<template>
    <div class="container">
        <div class="home-category-wrapper ">
            <div class="row g-4  py-5 ">
                <div class="col-md-4 col-sm-6 home-category-content ">
                    <div class="home-category-img">
                        <img class="img-fluid  " :src="require('../assets/images/categories/categories-1.jpg')" alt="categoryImage">
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 home-category-content ">
                    <div class="home-category-img">
                        <img class="img-fluid  " :src="require('../assets/images/categories/categories-2.jpg')" alt="categoryImage">
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 home-category-content ">
                    <div class="home-category-img">
                        <img class="img-fluid  " :src="require('../assets/images/categories/categories-3.jpg')" alt="categoryImage">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeCategory",
}
</script>
<style>
.home-category-content {
    position: relative;
}
.home-category-img {
    position: relative;
}
.home-category-content::before {
    content: '';
    position: absolute;
    top: 15px;
    right: 35px;
    height: 1px;
    width: 100px;
    background-color: #fff;
    z-index: 1;
}
.home-category-content::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 35px;
    height: 100px;
    width: 1px;
    background-color: #fff;
    z-index: 1;
}
.home-category-img::after {
    content: '';
    position: absolute;
    bottom: 15px;
    left: 25px;
    height: 95px;
    width: 1px;
    background-color: #fff;
    z-index: 1;
}
.home-category-img::before {
    content: '';
    position: absolute;
    bottom: 15px;
    left: 25px;
    height: 1px;
    width: 95px;
    background-color: #fff;
    z-index: 1;
}
.home-category-content img {
    transition: transform .5s ease;
}
.home-category-content img:hover {
    transform: scale(1.07);
}
</style>
