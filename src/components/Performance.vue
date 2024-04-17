<template>
  <section class="performance__section" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <h2 class="performance-title">{{ title }}</h2>

            <div class="performance__info">
                <div class="performance__info-item" v-for="(info, idx) in list" :key="idx" :class="{'active': info.active}" @click="changeActive(idx)">
                    <p class="info-title">{{ info.title }}</p>
                    
                    <span class="info-line"></span>

                    <p class="info-txt">{{ info.txt }}</p>
                </div>
            </div>

            <div class="performance-gallery">
                <img :src="img.url" alt="" :class="`gallery-img img-${idx + 1} ${img.active ? 'active' : ''}`" 
                v-for="(img, idx) in gallery" :key="idx" @click="imgActive(idx)">
            </div>

            <img src="@/assets/images/performance-bg.png" alt="" class="performance-bg">
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Performance Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            title: 'Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км',
            list: [
                {
                    title: 'Три режима скорости',
                    txt: 'Три режима езды позволяют почуствовать себя комфортно в любой ситуации. Режим «S» увеличитвает скорость, если опаздываете на работу. Во время прогулки по парку активируйте режим «D». Включите режим «Пешеход», когда двигаетесь по оживлённой улице.',
                    active: true
                },
                {
                    title: 'Система восстановления энергии',
                    txt: 'Во время торможения и движения по инерции система преобразовывает кинетическую энергию в электрическую, позволяя увеличить общий запас хода самоката.',
                    active: false
                },
                {
                    title: 'Мощная батарея',
                    txt: 'Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет преодолевать расстояния до 45 км без подзарядки.',
                    active: false
                },
            ],
            gallery: [
                {
                    url: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Performance%2Fgallery-img-1.png?alt=media&token=5412c4b2-ec2b-4982-8927-d548678ecd81',
                    active: true
                },
                {
                    url: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Performance%2Fgallery-img-2.png?alt=media&token=e6ee8022-fef3-4c22-b0f4-86059e659ab3',
                    active: false
                },
            ]
        }
    },
    methods: {
        changeActive(idx) {
            this.list.map(info => info.active = false)

            this.list[idx].active = true
        },
        infinityAnim() {
            const activeIndex = this.list.findIndex(info => info.active);
            const numItems = this.list.length;

            // Deactivate the currently active item
            if (activeIndex !== -1) {
                this.list[activeIndex].active = false;
            }

            // Calculate the index of the next item to activate
            const nextIndex = (activeIndex + 1) % numItems;

            // Activate the next item
            this.list[nextIndex].active = true;
        },
        imgActive(idx) {
            this.gallery.map(img => img.active = false)

            this.gallery[idx].active = true
        }
    },
    mounted() {
        setInterval(() => {
        this.infinityAnim();
        }, 600);
    }
}

</script>

<style lang="scss" scoped>

.performance__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 80px;
        position: relative;
    }

    .performance-title {
        max-width: 800px;
        width: 100%;
        font-size: 45px;
        font-weight: 500;
        line-height: 110%;
        transition: .4s;
    }

    .performance__info {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;

        &-item {
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            opacity: .4;
            transition: .3s;
            cursor: pointer;

            .info-title {
                font-size: 20px;
                font-weight: 600;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .info-txt {
                font-size: 14px;
            }

            .info-line {
                width: 100%;
                height: 3px;
                background: var(--main-white);
                transition: .4s;
            }

            &.active {
                opacity: 1;

                .info-title {
                    color: var(--main-orange) !important;
                }

                .info-line {
                    background: var(--main-orange) !important;
                }
            }
        }
    }

    .performance-gallery {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .gallery-img {
            max-width: 360px;
            width: 100%;
            border-radius: 15px;
            overflow: hidden;
            height: max-content;
            min-height: 300px;
            object-fit: cover;
            object-position: center center;
            transition: .4s;
            cursor: pointer;

            &.active {
                max-width: 760px !important;
            }
        }
    }

    .performance-bg {
        max-width: 800px;
        width: 100%;
        position: absolute;
        top: -50%;
        left: -20%;
        z-index: -1;
    }

    &.light {
        .performance-title {
            font-weight: 600;
            color: var(--main-black);
        }

        .performance__info {
            .info-title, .info-txt {
                color: var(--main-black);
            }

            .info-line {
                background: var(--main-black);
            }
        }
    }
}

</style>