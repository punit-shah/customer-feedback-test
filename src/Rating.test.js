import React from 'react';
import { shallow } from 'enzyme';
import Rating from './Rating';

describe('<Rating />', () => {
  describe('when readOnly is true', () => {
    it('renders a <div /> for each star, and does not render any radio buttons', () => {
      const wrapper = shallow(<Rating readOnly />);

      expect(wrapper.find('div.Rating-star')).toHaveLength(5);
      expect(wrapper.find('input[type="radio"]')).toHaveLength(0);
    });

    it('renders the correct number of filled-in stars when value prop is passed', () => {
      const wrapper = shallow(<Rating readOnly value={3} />);

      expect(wrapper.find('.Rating-star')).toHaveLength(5);
      expect(wrapper.find('.Rating-star-filled')).toHaveLength(3);
    });

    it('does not render any filled-in stars when there is no value prop', () => {
      const wrapper = shallow(<Rating readOnly />);

      expect(wrapper.find('.Rating-star')).toHaveLength(5);
      expect(wrapper.find('.Rating-star-filled')).toHaveLength(0);
    });
  });

  describe('when readOnly is false', () => {
    it('renders a radio button for each star', () => {
      const wrapper = shallow(<Rating />);

      expect(wrapper.find('input[type="radio"]')).toHaveLength(5);
    });

    it('renders the correct number of filled-in stars when value prop is passed', () => {
      const wrapper = shallow(<Rating value={2} />);

      expect(wrapper.find('.Rating-star')).toHaveLength(5);
      expect(wrapper.find('.Rating-star-filled')).toHaveLength(2);
    });

    it('does not render any filled-in stars when there is no value prop', () => {
      const wrapper = shallow(<Rating />);

      expect(wrapper.find('.Rating-star')).toHaveLength(5);
      expect(wrapper.find('.Rating-star-filled')).toHaveLength(0);
    });

    it('updates the currentRating state when the user changes the rating', () => {
      const setCurrentRating = jest.fn();
      const useStateSpy = jest
        .spyOn(React, 'useState')
        .mockImplementation(currentRating => [currentRating, setCurrentRating]);

      const wrapper = shallow(<Rating value={2} />);
      wrapper
        .find('#Rating-input-3')
        .simulate('change', { target: { value: '3' } });

      expect(setCurrentRating).toHaveBeenCalledWith(3);

      useStateSpy.mockRestore();
    });
  });
});
