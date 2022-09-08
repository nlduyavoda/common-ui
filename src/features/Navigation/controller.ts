export const generateData = () => {
  let arr = []
  let items = []
  for (let i = 1; i < 50; i++) {
    const postfix = Math.floor(Math.random() * 100 + 1)
    if (i < 5) {
      items.push({
        id: `${i}-ADA-${postfix}`
      })
    }
    arr.push({
      id: `${i}-ADA-${postfix}`,
      value: `item-${postfix}`
    })
  }
  return { arr: arr, items: items }
}

export const isScrolledIntoView = (props: any) => {
  const headerHeight = +props.headerRef.current.offsetHeight
  const listHeight = +props.listRef.current.scrollTop.toFixed()
  if (headerHeight <= listHeight) {
    props.navRef.current.classList.add('active')
  } else {
    props.navRef.current.classList.remove('active')
  }
}
