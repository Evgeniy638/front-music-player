module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL,
        CLIENT_ID: process.env.CLIENT_ID
    },
    images: {
        domains: ['i1.sndcdn.com'],
    },
    sassOptions: {
        prependData: `
            $primary-color: #fff;
            $secondary-color: #b3b3b3;
            $footer-side-width: 250px;
        `,
    }
}
