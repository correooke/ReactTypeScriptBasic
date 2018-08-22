import * as enzyme from 'enzyme';
import * as React from 'react';
import Hello from './Hello';


it('renders the correct text when ', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' />);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!'); 
});