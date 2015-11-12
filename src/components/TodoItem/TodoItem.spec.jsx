import React from 'react';
import ReactTestUtils from 'react-addons-test-utils'
import TodoItem from './TodoItem';

describe('Todo Item', () => {
  let element, sandbox, stubs;

  beforeEach(() => {
    let sandbox = sinon.sandbox.create();
    stubs = {
      todo: {
        id: 1,
        description: 'Hello World'
      },
      onRemoveTodoStub: sandbox.stub()
    };

    element = ReactTestUtils.renderIntoDocument(
      <TodoItem todo={stubs.todo} onRemoveTodo={stubs.onRemoveTodoStub} />
    );
  });

  describe('render', () => {
    it('shoud display the component', () => {
      expect(ReactTestUtils.isCompositeComponent(element)).to.equal.true;
    });

    it('should displat the description', () => {
      let spans = ReactTestUtils.scryRenderedDOMComponentsWithTag(element, 'span');
      expect(spans[0].textContent).to.equal(stubs.todo.description);
    });
  });

  describe('remove', () => {
    it('should call the callback', () => {
      let button = ReactTestUtils.findRenderedDOMComponentWithTag(element, 'button');
      ReactTestUtils.Simulate.click(button);
      expect(stubs.onRemoveTodoStub).to.have.been.called.once;
    });
  });

});
