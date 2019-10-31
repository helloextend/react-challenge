import * as React from 'react'
import { shallow } from 'enzyme'
import Heart from './Heart'

describe('<Heart />', () => {
  const mockProps = {
    icon: 'redHeartIcon',
    alt: 'My fake alt text',
  }

  it('renders without crashing', () => {
    shallow(<Heart {...mockProps} />)
  })

  it('renders the correct icon', () => {
    const wrapper = shallow(<Heart {...mockProps} />)
    expect(wrapper.prop('alt')).toBe(mockProps.alt)
  })
})
