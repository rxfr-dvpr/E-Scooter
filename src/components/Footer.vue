<template>
  <footer class="footer" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <div class="footer-copyright">
                <span class="footer-copyright-info">{{ `© 2010 - ${new Date().getFullYear()} Xiaomi.` }}</span>
                <span class="footer-copyright-txt">{{ cpTxt }}</span>
            </div>

            <div class="footer-contact">
                <a href="tel:+998998173066" class="footer-contact-num">+998 99 817 30 66</a>
                <span class="footer-contact-info">Часы работы с 9:00 до 20:00 Узб, Пн. – Пт.</span>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>

export default {
    name: 'Footer',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            cpTxt: 'Все права защищены.',
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    padding: 60px 0;

    .row {
        justify-content: space-between;
    }

    &-copyright {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    &-contact {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        align-items: flex-end;

        &-num:hover {
            color: var(--main-orange) !important;
        }
    }

    &.light {
        .footer-copyright, .footer-contact {
            &-info, &-txt, &-num {
                color: var(--main-black);
                font-weight: 500;
            }
        }
    }
}

</style>