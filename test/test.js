const assert = require('assert')

let title = 'ToDoList'

describe('View',function(){
  describe('Title',function(){
    it('Title is ToDoList',function(){
      assert.equal('ToDoList',title)
    })
  })
})
