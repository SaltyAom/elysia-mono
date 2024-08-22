import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const root = join(__dirname, '../../..')
const web = join(root, 'apps/web/src')
const ui = join(root, 'packages/ui/src')
const server = join(root, 'packages/server/src')
const libs = join(root, 'packages/libs/src')

export const alias = {
    // web
    '@web': web,
    '@web/app': join(web, 'app'),
    '@web/components': join(web, 'components'),
    '@web/layouts': join(web, 'layouts'),
    '@web/stores': join(web, 'stores'),
    '@web/libs': join(web, 'libs'),
    '@web/public': join('..', web, 'public'),
    // ui
    '@ui': ui,
    '@ui/components': join(ui, 'components'),
    '@ui/layouts': join(ui, 'layouts'),
    '@ui/ui': join(ui, 'ui'),
    '@ui/libs': join(ui, 'libs'),
    // server
    '@server': server,
    // libs
    '@libs': libs
}
