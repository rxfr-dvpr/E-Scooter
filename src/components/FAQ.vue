<template>
  <section class="faq__section" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <div class="faq__descr">
                <h2 class="faq__descr-title all-title-45">{{ descr.title }}</h2>
                <p class="faq__descr-txt">{{ descr.txt }}</p>

                <button class="faq__descr-btn all-btn">{{ descr.btn }}</button>
            </div>

            <ul class="faq__list">
                <li class="faq__list-item" v-for="(item, idx) in faqList" :key="idx">
                    <p class="item-question">{{ item.question }}</p>

                    <span class="item-line"></span>

                    <p class="item-answer">{{ item.answer }}</p>
                </li>
            </ul>

            <img :src="faqBg" alt="" class="faq-bg">
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'FAQ Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            descr: {
                title: 'Часто задаваемые вопросы',
                txt: 'Все ваши часто задаваемые вопросыо электросамокате Mi Scooter Pro 2. Если у вас есть собственный вопрос - задайте его через форму обратной связи.',
                btn: 'Задать вопрос'
            },
            faqList: [
                {
                    question: 'На него нужны права категории M?',
                    answer: 'Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников движения.'
                },
                {
                    question: 'У меня вес 135 кг, выдержит ли этот самокат?',
                    answer: 'Самокат определенно выдержит и будет ехать, но не с максимальной скоростью.'
                },
                {
                    question: 'Есть ли влагозащита?',
                    answer: 'Электросамокат имеет степень защиты IP54. Он защищен от попадания пыли и брызг, падающих в любом направлении. Погружение в воду может привести к поломке.'
                },
                {
                    question: 'Это версия для Китая или Европы?',
                    answer: 'Это Европейская версия, со всеми обновлениями и евро-вилкой.'
                }
            ],
            faqBg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/FAQ%2Ffaq-bg.png?alt=media&token=791b2dc3-ab3d-4987-9869-643161eb4160'
        }
    }
}

</script>

<style lang="scss" scoped>

.faq__section {
    width: 100%;

    .row {
        justify-content: space-between;
        position: relative;
    }

    .faq__descr {
        max-width: 415px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        
        &-title {
            color: var(--main-orange);
        }

        &-txt {
            max-width: 360px;
            width: 100%;
            font-size: 14px;
        }
    }

    .faq__list {
        max-width: 660px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        &-item {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 10px;

            .item-question {
                font-size: 20px;
                font-weight: 600;
            }

            .item-line {
                max-width: 100px;
                width: 100%;
                height: 3px;
                background: var(--main-orange);
            }

            .item-answer {
                font-size: 14px;
                font-weight: 300;
            }
        }
    }

    &.light {
        .faq__descr-txt {
            font-weight: 600;
            color: var(--main-black);
        }

        .item-question {
            color: var(--main-black);
            font-weight: 700;
        }

        .item-answer {
            color: var(--main-black);
            font-weight: 600;
        }
    }

    .faq-bg {
        position: absolute;
        top: -30%;
        left: -15%;
        max-width: 650px;
        width: 100%;
        z-index: -1;
    }
}

</style>