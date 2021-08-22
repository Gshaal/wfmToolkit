
import React from 'react'
import Layout from './Containers/Layout/DefaultLayout'
import Enzyme,{shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter:new Adapter()})

describe('<MainApp />', () => {
    it('renders the <layout /> components', () => {
      const wrapper = shallow(<Layout />);
      expect(wrapper).toMatchSnapshot();
    })
})