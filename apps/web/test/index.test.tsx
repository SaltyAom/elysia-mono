import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Page from '@web/app/page'

describe('/', () => {
    it('render form with username', async () => {
        render(<Page />)

        expect(await screen.findByTestId('form')).toContain(
            await screen.findByTestId('input-username')
        )
    })
})
