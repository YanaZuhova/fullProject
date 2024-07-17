const buttonCall = document.querySelector('.item__call')

let wrapper = document.querySelector('.wrapperWeb')

let windowCall = document.querySelector('.call')

buttonCall.addEventListener('click', function () {
  wrapper.classList.add('wrapper--hide')

  windowCall.classList.add('call--show')
  windowCall.classList.remove('call')
})
