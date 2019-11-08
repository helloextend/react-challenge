import * as React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ResultsList from './ResultsList'


const baseProps = {
  favorites: [
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg',
  ],
  clickHeart: jest.fn(),
  imgUrls: [
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_10832.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_10982.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_11006.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_11172.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_11182.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1126.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1128.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_11432.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_1145.jpg',
  ],
  columnCount: 3
};



describe('ResultsList component', () => {
  it('renders without crashing', () => {
    shallow(<ResultsList {...baseProps} />)
  });

  it('renders the UI as expected when given no urls', () => {
   const tree = renderer
      .create(<ResultsList {...baseProps} imgUrls={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders 10 dog images when given an array of 10 urls', () => {
    const wrapper = shallow(<ResultsList {...baseProps} />)
    expect(wrapper.find('Styled(img)')).toHaveLength(10)
  })

})