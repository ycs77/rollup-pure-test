const aConfig = {
  a: 'A',
}

const bConfig = /* @__PURE__ */ Object.assign({}, aConfig, {
  b: 'B',
})

export function bar() {
  console.log(`foo / bar | ${aConfig.a}`)
}

export function baz() {
  console.log('foo / baz')
}
