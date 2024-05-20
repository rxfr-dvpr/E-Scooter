<template>
  <section class="performance__section" :class="{'light': light}" id="about">
    <div class="container">
        <div class="row">
            <h2 class="performance-title all-title-45">{{ title }}</h2>

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

                <img :src="vectorImg" alt="" class="performance-vector">
            </div>

            <img :src="filterImg" alt="" class="performance-bg">
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
            ],
            filterImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Performance%2Fperformance-bg.png?alt=media&token=3d51eb76-33fd-43b1-abc0-e3164125f35e',
            vectorImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Performance%2Fperformance-vector.png?alt=media&token=d44bdcde-e09f-42f6-b467-5ad1162d7e32'
        }
    },
    methods: {
        changeActive(idx) {
            this.list.map(info => info.active = false)

            this.list[idx].active = true
        },
        perforAnim() {
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
        this.perforAnim();
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
        position: relative;

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

            &.img-1 {
                z-index: 3;
            }
        }
    }

    .performance-bg {
        max-width: 900px;
        width: 100%;
        position: absolute;
        top: -30%;
        left: -20%;
        z-index: -1;
    }

    .performance-vector {
        position: absolute;
        top: 45%;
        left: -13%;
        pointer-events: none;
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

@media (max-width: 1500px) {
    .performance-vector {
        display: none;
    }
}

@media (max-width: 992px) {
    .performance__info {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media (max-width: 876px) {
    .performance-gallery {
        flex-direction: column;
        align-items: center;

        .gallery-img {
            max-width: 760px !important;
            min-height: auto  !important;
        }
    }

    .performance-title {
        text-align: center;
    }

    .performance-bg {
        top: -10% !important;
        left: 0 !important;
    }
}

@media (max-width: 856px) {
    .performance__info {
        max-width: 500px;
        grid-template-columns: repeat(1, 1fr) !important;
        margin: 0 auto;

        &-item {
            align-items: center;
            text-align: center;
        }
    }
}

</style>