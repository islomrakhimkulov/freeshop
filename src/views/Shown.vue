<template>
    <div>
        <div class="shown-content container py-4">
            <div class="row">
                <div class="col-md-2">
                    <div class="many-show-left">
                        <h3 class="text-uppercase selling-title">Ko'p sotilgan</h3>
                        <p class="selling-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div class="col-md-10">
                    <div class="row g-3 py-4">
                        <div class="col-md-3 col-sm-6">
                            <div class="card">
                                <div class="card-feature">
                                    <img class="card-img-top" :src="require('../assets/images/best-seller/card-top1.png')" alt="">
                                    <div class="card-body">
                                        <h3 class="card-item-title">Cruise Dual Analog</h3>
                                        <span class="card-item-price">$250.00</span>
                                        <div class="star-rating">
                                            <star-rating 
                                                rating=3
                                                :round-start-rating="false"
                                                v-model="rating"
                                                :star-size="20"
                                                :show-rating="false"
                                                :border-width="1"
                                                border-color="#FF9600"
                                                active-border-color="#FF9600"
                                                active-color="#FF9600"
                                                inactive-color="#fff"
                                                padding=1
                                            />
                                        </div>
                                    </div>  
                                </div>
                                <div class="card-feature-details">
                                    <div class="d-flex flex-column">
                                        <button>
                                            <i class="fas fa-shopping-cart"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-heart"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-retweet"></i>
                                        </button>
                                    </div>
                                </div>           
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="card">
                                <div class="card-feature">
                                    <img class="card-img-top" :src="require('../assets/images/best-seller/card-top2.png')" alt="">
                                    <div class="card-body">
                                        <h3 class="card-item-title">Cruise Dual Analog</h3>
                                        <span class="card-item-price">$250.00</span>
                                        <div class="star-rating">
                                            <star-rating 
                                                v-model="rating"
                                                :star-size="20"
                                                :show-rating="false"
                                                :border-width="1"
                                                border-color="#FF9600"
                                                active-border-color="#FF9600"
                                                active-color="#FF9600"
                                                inactive-color="#fff"
                                                padding=1
                                            />
                                        </div>
                                    </div>  
                                </div>
                                <div class="card-feature-details">
                                    <div class="d-flex flex-column">
                                        <button>
                                            <i class="fas fa-shopping-cart"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-heart"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-retweet"></i>
                                        </button>
                                    </div>
                                </div>           
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="card">
                                <div class="card-feature">
                                    <img class="card-img-top" :src="require('../assets/images/best-seller/card-top3.png')" alt="">
                                    <div class="card-body">
                                        <h3 class="card-item-title">Cruise Dual Analog</h3>
                                        <span class="card-item-price">$250.00</span>
                                        <div class="star-rating">
                                            <star-rating 
                                                v-model="rating"
                                                :star-size="20"
                                                :show-rating="false"
                                                :border-width="1"
                                                border-color="#FF9600"
                                                active-border-color="#FF9600"
                                                active-color="#FF9600"
                                                inactive-color="#fff"
                                                padding=1
                                            />
                                        </div>
                                    </div>  
                                </div>
                                <div class="card-feature-details">
                                    <div class="d-flex flex-column">
                                        <button>
                                            <i class="fas fa-shopping-cart"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-heart"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-retweet"></i>
                                        </button>
                                    </div>
                                </div>           
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="card">
                                <div class="card-feature">
                                    <img class="card-img-top" :src="require('../assets/images/best-seller/card-top4.png')" alt="">
                                    <div class="card-body">
                                        <h3 class="card-item-title">Cruise Dual Analog</h3>
                                        <span class="card-item-price">$250.00</span>
                                        <div class="star-rating">
                                            <star-rating 
                                                v-model="rating"
                                                :star-size="20"
                                                :show-rating="false"
                                                :border-width="1"
                                                border-color="#FF9600"
                                                active-border-color="#FF9600"
                                                active-color="#FF9600"
                                                inactive-color="#fff"
                                                padding=1
                                            />
                                        </div>
                                    </div>  
                                </div>
                                <div class="card-feature-details">
                                    <div class="d-flex flex-column">
                                        <button>
                                            <i class="fas fa-shopping-cart"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-heart"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-retweet"></i>
                                        </button>
                                    </div>
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
import StarRating from 'vue-star-rating'
export default {
    name: 'Shown',
    components: {
        StarRating
    },
    computed: {
        rating: {
            get() {
                return this.$store.state.rating;
            },
            set(value) {
                this.$emit("rated", value);
            },
        },
    }
}
</script>

<style>
.many-show-left {
    margin-top: 70px;
}
.selling-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1.5px;
}

.selling-text {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.35px;
}
.card {
    border: 0px solid rgba(0,0,0,.125);
    transition: all 0.5s ease;
}
.card:hover .card-feature-details {
    display: block;
}

.card-body {
    padding: 0.5rem 0.5rem;
}
.card-item-title {
    font-weight: 500;
    font-size: 14px;
    color: #333;
    line-height: 24px;
    margin-block: 0px;
}
.card-item-price {
    font-weight: 600;
    font-size: 18px;
    color: var(--mainColor);
}

.card-feature-details {
    position:absolute;
    display: none;
    top: 5px;
    right: 0;
    padding: 5px;
    font-size: 15px;
}
.card-feature-details button {
    border: none;
    background: var(--mainColor);
    color: #fff;
    padding: 5px 6px;
    margin: 5px 0;
}
    
</style>
