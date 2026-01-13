export const cartPlugin = ({ store }) => {
  if (store.$id !== 'cart') {
    return
  }
  store.$subscribe((mutation, state) => {
    // localStorage
    localStorage.setItem('cart-items', JSON.stringify(state.addedItems))
    console.log('[CartPlugin] cart-items saved to localStorage:', state.addedItems)
  })

  store.$onAction(({ name, args, after, onError }) => {
    // 记录日志
    console.log(`[CartPlugin] action ${name} started with args: ${JSON.stringify(args)}`)

    after((result) => {
      console.log(`[CartPlugin] action ${name} completed with result: ${JSON.stringify(result)}`)
    })

    onError((error) => {
      console.error(`[CartPlugin] action ${name} failed with error: ${error}`)
    })
  })
}
