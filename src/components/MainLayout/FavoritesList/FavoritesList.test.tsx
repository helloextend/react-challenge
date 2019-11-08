import * as React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import FavoritesList from './FavoritesList'


const baseProps = {
  favorites: [
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg',
  ],
  clickHeart: jest.fn(),
};



describe('FavoritesList component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FavoritesList {...baseProps} />)
    expect(wrapper.exists()).toBe(true)
  });

  it('renders 3 dog images when given 3 urls', () => {
    const tree = renderer
      .create(<FavoritesList {...baseProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected when given no urls', () => {
    const tree = renderer
      .create(<FavoritesList {...baseProps} favorites={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('does not break with no data', () => {
    const wrapper = shallow(<FavoritesList {...baseProps} favorites={[]} />)
    expect(wrapper.find('Styled(img)')).toHaveLength(0)
  })

})