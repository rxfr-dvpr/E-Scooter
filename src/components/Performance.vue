<template>
  <section class="performance__section">
    <div class="container">
        <div class="row">
            <h2 class="performance-title">{{ title }}</h2>

            <div class="performance__info">
                <div class="performance__info-item" v-for="(info, idx) in list" :key="idx">
                    <p class="info-title">{{ info.title }}</p>

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
                    txt: 'Три режима езды позволяют почуствовать себя комфортно в любой ситуации. Режим «S» увеличитвает скорость, если опаздываете на работу. Во время прогулки по парку активируйте режим «D». Включите режим «Пешеход», когда двигаетесь по оживлённой улице.'
                },
                {
                    title: 'Система восстановления энергии',
                    txt: 'Во время торможения и движения по инерции система преобразовывает кинетическую энергию в электрическую, позволяя увеличить общий запас хода самоката.'
                },
                {
                    title: 'Мощная батарея',
                    txt: 'Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет преодолевать расстояния до 45 км без подзарядки.'
                },
            ]
        }
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
}

</style>