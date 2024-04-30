<template>
  <section class="safety__section" :class="{'light': light}" id="safety">
    <div class="container">
        <div class="row">
            <h2 class="safety-title all-title-45">{{ title }}</h2>

            <div class="safety__info">
                <div class="safety__info-item" v-for="(info, idx) in list" :key="idx" :class="{'active': info.active}" @click="changeActive(idx)">
                    <p class="info-title">{{ info.title }}</p>
                    
                    <span class="info-line"></span>

                    <p class="info-txt">{{ info.txt }}</p>
                </div>
            </div>

            <div class="safety-gallery">
                <img :src="img.url" alt="" :class="`safety-img img-${idx + 1} ${img.active ? 'active' : ''}`" 
                v-for="(img, idx) in gallery" :key="idx" @click="imgActive(idx)">
            </div>

        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Safety Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            title: 'Заботится о вашей безопасности',
            list: [
                {
                    title: 'Яркие ходовые огни',
                    txt: 'Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников движения.',
                    active: true
                },
                {
                    title: 'Двойная тормозная система',
                    txt: 'При нажатии наручку тормоза системы переднего и заднего колеса активируются последовательно, сокращая тормозной путь и обеспечивая безопасную и плавную остановку.',
                    active: false
                },
                {
                    title: 'Яркая задняя фара',
                    txt: 'При включении ходовых огней задняя фара включается автоматически. При нажатии на ручку тормоза она начинает мигать, предупреждая других участников движения.',
                    active: false
                },
                {
                    title: 'Отражатели спереди, сбоку и сзади',
                    txt: 'Улучшенные отражатели, размещенные с четырех сторон, делают вашу поездку в темное время суток безопаснее.',
                    active: false
                }
            ],
            gallery: [
                {
                    url: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Safety%2Fsafety-img-1.png?alt=media&token=06d5511c-4840-4549-b452-eff4e9ff98da',
                    active: true
                },
                {
                    url: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Safety%2Fsafety-img-2.png?alt=media&token=88be6672-3c41-4bc2-af2d-4d512762cd41',
                    active: false
                },
            ],
        }
    },
    methods: {
        changeActive(idx) {
            this.list.map(info => info.active = false)

            this.list[idx].active = true
        },
        safetyAnim() {
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
        this.safetyAnim();
        }, 600);
    }
}

</script>

<style lang="scss" scoped>

.safety__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 80px;
        position: relative;
    }

    .safety {
        &-title {
            max-width: 800px;
            width: 100%;
            transition: .4s;
            color: var(--main-orange);
        }
    
        &__info {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
    
            &-item {
                width: 100%;
                height: 100%;
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
    
        &-gallery {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 20px;
    
            .safety-img {
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
                z-index: 6;
    
                &.active {
                    max-width: 760px !important;
                }

            }
        }
    
    }


    &.light {
        .safety__info {
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