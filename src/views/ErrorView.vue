<template>
  <section class="error__section">
    <div class="container">
        <div class="row">
            <h2 class="error-num">{{ errorNum }}</h2>

            <p class="error-txt">{{ txt }}</p>

            <router-link to="/" class="back-link"><i class="fal fa-long-arrow-left"></i> назад</router-link>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Error Page',
    data() {
        return {
            txt: 'Страница не найдена',
            errorNum: 404
        }
    }
}

</script>

<style lang="scss" scoped>

.error__section {
    width: 100%;
    height: 100vh;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        row-gap: 15px;
    }

    .error-num {
        font-size: calc(100px + 20 * (100vw / 1920));
    }

    .error-txt {
        font-size: 20px;
        font-weight: 500;
    }

    .back-link {
        color: var(--main-orange);
        display: flex;
        align-items: center;
        gap: 5px;
        text-transform: capitalize;

        i {
            margin-top: 5px;
            color: var(--main-orange);
        }
    }
}

@media (min-width: 1920px) {
    .error-num {
        font-size: 120px !important;
    }
}

</style>