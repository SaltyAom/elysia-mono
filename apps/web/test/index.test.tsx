import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Page from '@web/app/page'

test('Page', async () => {
    render(<Page />)

    expect(await screen.findByTestId('form')).toContain(
        await screen.findByTestId('input-username')
    )
})
