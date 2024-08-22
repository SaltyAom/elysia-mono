import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Button } from '@ui'

describe('Button', () => {
    it('should render children', async () => {
        render(<Button>Hello</Button>)

        expect(await screen.findByText('Hello')).toBeTruthy()
    })
})
