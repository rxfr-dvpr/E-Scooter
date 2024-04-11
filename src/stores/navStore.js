import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        links: [
            {
                name: 'О продукте',
                url: '#about'
            },
            {
                name: 'Внешний вид',
                url: '#appearance'
            },
            {
                name: 'Безопасность',
                url: '#safety'
            },
            {
                name: 'Отзывы',
                url: '#reviews'
            },
            {
                name: 'FAQ',
                url: '#faq'
            },
        ]
    })
})