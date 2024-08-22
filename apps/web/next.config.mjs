import withAnalyze from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
export default withAnalyze({ enabled: process.env.ANALYZE === 'true' })(
    {
        experimental: {
            // reactCompiler: true,
            // instrumentationHook: true
        },
        i18n: {
            locales: ['en-US'],
            defaultLocale: 'en-US'
        }
    },
    {
        auto: { rsc: true },
        rsc: true
    }
)
