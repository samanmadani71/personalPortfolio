import localFont from 'next/font/local'

const iransans = localFont({
    src: [
        {
            path: '../fonts/IranSans/IRANSans.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/IranSans/IRANSans_Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../fonts/IranSans/IRANSans_Light.ttf',
            weight: '300',
            style: 'nomral',
        },
        {
            path: '../fonts/IranSans/IRANSans_UltraLight.ttf',
            weight: '200',
            style: 'normal'
        },
        {
            path: '../fonts/IranSans/IRANSans_Medium.ttf',
            weight: '500',
            style: 'normal'
        }
    ],
    variable: '--font-custom',
    display: 'swap',
    fallback: ['system-ui', 'arial']
}

)
export default iransans