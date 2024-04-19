<template>
  <section class="appearance__section" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <h2 class="appearance-title">{{ title }}</h2>

            <img :src="filterImg" alt="" class="appearance-filter">
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Appearance Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            title: 'Лаконичный современный дизайн, в котором нет ничего лишнего',
            filterImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Appearance%2Fappearance-filter.png?alt=media&token=fc1e567c-d2d6-442b-9767-1b309f439b53'
        }
    }
}

</script>

<style lang="scss" scoped>

.appearance__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 70px;
        position: relative;
    }

    .appearance {
        &-title {
            max-width: 700px;
            font-size: 45px;
            line-height: 110%;
            color: var(--main-orange);
            font-weight: 600;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        &-filter {
            max-width: max-content;
            width: 100%;
            position: absolute;
            top: -400%;
            left: 50%;
            z-index: -1;
        }
    }
}

</style>