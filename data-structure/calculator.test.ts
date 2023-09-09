import { add } from './calculator'
import { Example } from './calculator'

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })
})

test('doSomething should increment the counter', () => {
  // Arrange
  const example = new Example()

  // Act
  example.doSomething()

  // Assert
  expect(example.getCounter()).toBe(1)
})
