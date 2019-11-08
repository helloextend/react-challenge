import * as React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import MainLayout from './MainLayout'
import { GlobalWithFetchMock } from "jest-fetch-mock";

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

const testData = {
  imgUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg',
  customEvent: {
    target: {
      searchTerm: {
        value: 'hound'
      }
    },
    preventDefault: () => { }
  }
}

describe('MainLayout component', () => {
  it('renders without crashing', () => {
    shallow(<MainLayout />)

  });

  it('adds urls to favorites', () => {
    const wrapper = shallow(<MainLayout />)
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
    componentInstance.componentWillMount();
    componentInstance.handleToggleFavorite(testData.imgUrl);

    expect(wrapper.state('favorites')).toHaveLength(1);
  });

  it('removes urls from favorites', () => {
    const wrapper = shallow(<MainLayout />)
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
    componentInstance.componentWillMount();
    componentInstance.handleToggleFavorite(testData.imgUrl);
    componentInstance.handleToggleFavorite(testData.imgUrl);

    expect(wrapper.state('favorites')).toHaveLength(0);
  });


  it("makes a fetch call when user clicks search", done => {
    const wrapper = shallow(<MainLayout />);

    setTimeout(() => {
      wrapper.update();
      const componentInstance = wrapper.instance();
      componentInstance.handleSearchClick(testData.customEvent);

      expect(global.fetch).toHaveBeenCalled();

      done();
    });
  })


  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MainLayout />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})
