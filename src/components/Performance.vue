<template>
  <section class="performance__section">
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
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Performance Section',
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
    }

    .performance-title {
        max-width: 800px;
        width: 100%;
        font-size: 45px;
        font-weight: 400;
        line-height: 110%;
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
                transition: .3s;
            }

            &.active {
                opacity: 1;

                .info-line {
                    background: var(--main-orange);
                }
            }
        }
    }
}

</style>