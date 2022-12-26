export const toggleModal = (ref: any, state = true) => {
  const showToggle = () => {
    ref.current.classList.add('modalShow')
    ref.current.classList.remove('modalFade')
  }

  const hideToggle = () => {
    ref.current.classList.remove('modalShow')
    ref.current.classList.add('modalFade')
    ref.current.addEventListener('animationend', () => {
      ref.current.classList.remove('modalFade')
    })
  }

  return state ? showToggle() : hideToggle()
}
