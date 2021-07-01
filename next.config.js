module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL
    },
    sassOptions: {
        prependData: `
            $primary-color: #fff;
            $secondary-color: #b3b3b3;
        `,
    },
}
