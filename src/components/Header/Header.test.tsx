import * as React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

it('renders without crashing', () => {
  shallow(<Header />)
})
