<template>
  <header class="header" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <h1 class="header-title">{{ title }}</h1>

            <p class="header-txt">{{ txt }}</p>

            <button class="theme-btn all-btn" @click="this.$emit('changeTheme')">Change theme</button>
        </div>
    </div>
  </header>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            title: 'Стильный электросамокат с мощным аккумулятором',
            txt: 'Улучшенная производительность для дальних путешествий. Работает так же просто, как и выглядит.'
        }
    },
    props: {
        light: {
            type: Boolean,
            default: false,
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding-top: 80px;

    .row {
        flex-direction: column;
        row-gap: 30px;
    }

    &-title {
        max-width: 950px;
        width: 100%;
        font-size: 80px;
        line-height: 100%;
        transition: .4s;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    &-txt {
        max-width: 480px;
        width: 100%;
        font-size: 30px;
        font-weight: 600;
        line-height: 100%;
        color: var(--main-orange);
        transition: .4s;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .theme-btn {
        margin-top: 60px;
    }

    &.light {
        .header {
            &-title {
                color: var(--main-orange);
            }

            &-txt {
                color: var(--main-black);
            }
        }
    }
}

</style>