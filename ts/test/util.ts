import { expect, test, that } from './lib/expect'

import { klass, log } from '../util'

test('log returns logged value', t => {
  const value = 'foobar'

  expect(that(log('foo', value)).equals('foobar'))

  t.end()
})

test('log is curryable', t => {
  const fooLogger = log('foo')

  expect(that(fooLogger).is.an.instanceOf(Function))
  expect(that(fooLogger('foobar')).equals('foobar'))

  t.end()
})

test('klass emits identity when all names are true', t => {
  const hiding = { hiding: true }
  const hidingAndSelected = { hiding: true, selected: true }

  expect(that(klass(hiding)).equals('hiding'))
  expect(that(klass(hidingAndSelected)).equals('hiding selected'))

  t.end()
})

test('klass emits only true names', t => {
  const hiding = { hiding: false }
  const notHidingAndSelected = { hiding: false, selected: true }

  expect(that(klass(hiding)).equals(''))
  expect(that(klass(notHidingAndSelected)).equals('selected'))

  t.end()
})
