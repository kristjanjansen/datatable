/*

https://css-tricks.com/almanac/properties/a/animation/

.element {
  animation: pulse 5s infinite;
}

@keyframes pulse {
  0% {
    background-color: #001F3F;
  }
  100% {
    background-color: #FF4136;
  }
}

https://github.com/threepointone/glamor/blob/master/docs/howto.md

let bounce = css.keyframes({ 
  '0%': { transform: 'scale(0.1)', opacity: 0 },
  '60%': { transform: 'scale(1.2)', opacity: 1 },
  '100%': { transform: 'scale(1)' }
})

let box = css({
  animation: `${bounce} 2s`,
  width: 50,
  height: 50,
  backgroundColor: 'red'
})

*/