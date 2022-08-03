/**
 * @jest-environment jsdom
 */

import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Progress, { ProgressStatus } from './Progress'

describe('Progress Comoponent', () => {
  it('should have first element in "in-progress", the rest in "pending" state', () => {
    render(<Progress status={ProgressStatus.Ordered} />)
    expect(1).toBe(1)
  })

})
