import * as React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import SearchBar from './SearchBar'


const baseProps = {
  handleSearch: jest.fn(),
};

describe('SearchBar component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SearchBar {...baseProps} />)
    expect(wrapper.exists()).toBe(true)
  });

  it('calls handleSearch when submitted', () => {
    const wrapper = shallow(<SearchBar {...baseProps} />)
    wrapper.find('Styled(form)').simulate('submit')
    expect(baseProps.handleSearch).toHaveBeenCalled()
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<SearchBar {...baseProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})
