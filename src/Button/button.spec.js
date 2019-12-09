import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import Button from './index';

describe('Button Testing', () => {
    it("should be defined", () => {
        const wrapper =  shallow(<Button />);
        expect(wrapper).toBeDefined();
    });
    it("should render button correctly", () => {
        const wrapper =  mount(<Button>My button</Button>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
    it("should renders standard button correctly", () => {
        const props= {
            variant:'standard'
        };
        const wrapper =  mount(<Button  {...props}>My button</Button>);
        expect(wrapper).toHaveStyleRule('color', '#fff');
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
    it("should renders outline button correctly", () => {
        const props= {
            variant:'outline'
        };
        const wrapper =  mount(<Button  {...props}>My button</Button>);
        expect(wrapper).toHaveStyleRule('color', '#09b466');
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
    it("should renders transparent button correctly", () => {
        const props= {
            variant:'transparent'
        };
        const wrapper =  mount(<Button  {...props}>My button</Button>);
        expect(wrapper).toHaveStyleRule('color', '#09b466');
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
