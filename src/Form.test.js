import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
  it('calls the onSubmit prop when the form is submitted', () => {
    const onSubmitMock = jest.fn();

    const wrapper = shallow(<Form onSubmit={onSubmitMock} />);
    wrapper.find('.Form').simulate('submit');

    expect(onSubmitMock).toHaveBeenCalled();
  });
});
