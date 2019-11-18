import React from 'react';
import { shallow } from 'enzyme';
import Comments from './Comments';

describe('<Comments />', () => {
  it('renders comments with a name, rating and comment body', () => {
    const mockComment = {
      id: 123,
      name: 'commenter name',
      rating: 5,
      comment: 'comment body',
    };

    const wrapper = shallow(<Comments comments={[mockComment]} />);

    expect(wrapper.find('.comment-name').text()).toEqual('commenter name');
    expect(wrapper.find('Rating').prop('value')).toEqual(5);
    expect(wrapper.find('.comment-body').text()).toEqual('comment body');
  });

  it('renders a comment for each object in the comments prop', () => {
    // creates an array with 15 comment objects
    const mockComments = Array.from({ length: 15 }, (x, index) => ({
      id: index,
      name: `commenter ${index}`,
      rating: 5,
      comment: 'comment body',
    }));

    const wrapper = shallow(<Comments comments={mockComments} />);

    expect(wrapper.find('.comment')).toHaveLength(15);
  });
});
