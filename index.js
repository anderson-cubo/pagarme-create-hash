import 'babel-polyfill'

import generate from './lib/generate'

if (window) {
  window.generate = generate
}

export default generate
