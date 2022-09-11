export const onToggleClassName = (
  ref: any,
  className: string,
  activeClass: string,
  reverseClass: string
) => {
  if (ref.current.classList.value === className) {
    ref.current.classList.add(activeClass)
  } else {
    ref.current.classList.remove(activeClass)
    ref.current.classList.add(reverseClass)
    ref.current.addEventListener('animationend', () => {
      ref.current.classList.remove(reverseClass)
    })
  }
}
