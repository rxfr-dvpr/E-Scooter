<template>
  <swiper :navigation="btns" :modules="modules" class="reviews-slider" :class="{'light': light}" 
   :breakpoints="breakpoints">
    <swiper-slide class="reviews-slider-item" v-for="(item, idx) in dataList" :key="idx">
        <p class="review-author">{{ item.author }}</p>
        <span class="review-line"></span>
        <p class="review-msg">{{ item.msg }}</p>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'Reviews Slider',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation],
            btns: {
                prevEl: '.slider-buttons .slider-btn.prev',
                nextEl: '.slider-buttons .slider-btn.next'
            },
            breakpoints: {
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 35
                },
                826: {
                   slidesPerView: 2,
                   spaceBetween: 35
                },
                600: {
                    slidesPerView: 1.5,
                   spaceBetween: 30
                },
                320: {
                    slidesPerView: 1.1,
                   spaceBetween: 20
                }
            }
        }
    },
    props: {
        dataList: {
            type: Array,
            default: [],
        },
        light: {
            type: Boolean,
            default: false
        }
    }
}

</script>

<style lang="scss" scoped>

.reviews-slider {
    width: 100%;

    &-item {
        height: auto;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        padding: 40px;
        background: #111010;
        border-radius: 15px;
        transition: .4s;

        .review-author {
            font-size: 20px;
            text-transform: capitalize;
            font-weight: 600;
            transition: .4s;
        }

        .review-msg {
            font-size: 14px;
            transition: .4s;

            &::first-letter {
                text-transform: uppercase;
            }
        }
        .review-line {
            max-width: 100px;
            width: 100%;
            height: 3px;
            background: var(--main-orange);
            border-radius: 3px;
        }
    }
    
    &.light {
        .reviews-list-item {
            background: #f1f1f1;

            .review-author, .review-msg {
                color: var(--main-black);
            }
        }
    }
}

</style>