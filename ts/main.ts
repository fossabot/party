// import localForage = require('localforage')
import { autorun } from 'mobx'
import {
  createAttributesModule,
  createClassModule,
  createEventsModule,
  createStylesModule,
  elementToVNode, h, init } from 'mostly-dom'
// import { persistStore } from 'redux-persist'

import * as api from './api'
import * as util from './util'

import party from './containers/party'

/* tslint:disable:no-submodule-imports no-var-requires */

// const augmentedMiddleware = process.env.NODE_ENV === 'development'
//   ? //do this
//   : //or that=

// persistStore(store, {
//   storage: localForage,
//   transforms: [persistTransform],
// })

const partyApiHost = process.env.PARTY_API || 'https://party.chancesnow.me'
api.setPartyApiHost(util.log('Party API Host:', partyApiHost))

const patch = init([
  createAttributesModule(),
  createClassModule(),
  createEventsModule(),
  createStylesModule(),
])

const main = document.querySelector('main')
if (main !== null) {
  main.classList.add('hiding')

  setTimeout(bootstrap, 300)
}

function bootstrap() {
  if (main != null) {
    main.classList.remove('splash')
    main.classList.remove('hiding')
  }

  let vdom = patch(elementToVNode(main as Element), party())

  autorun(() => {
    vdom = patch(vdom, party())
  })
}
