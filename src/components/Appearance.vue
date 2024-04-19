<template>
  <section class="appearance__section" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <h2 class="appearance-title">{{ title }}</h2>
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
            title: 'Лаконичный современный дизайн, в котором нет ничего лишнего'
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
    }
}

</style>