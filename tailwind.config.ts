import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `middleware/**/*.{js,ts,cjs}`,
        `server/**/*.{js,ts,cjs}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`
    ],
    theme: {
        fontFamily: {
            'satoshi': ['Satoshi', 'sans-serif'],
        },
        extend: {
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            }
        },
    },
    important: true
}