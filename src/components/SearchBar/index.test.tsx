import React from 'react'
import SearchBar from './index'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<SearchBar {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('Render Search Form', () => {
  const wrapper = setup()
  const searchBar = findByTestAttr(wrapper, 'component-search-bar')

  expect(searchBar.length).toBe(1)
})
