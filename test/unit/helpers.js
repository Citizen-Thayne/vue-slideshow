import loremIpsum from 'lorem-ipsum'

export function mockSlideshow () {
  return {
    title: loremIpsum({ count: 5, units: 'words' }),
    slides: [...Array(10)].map(mockSlide)
  }
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
}

export function mockSlide () {
  return {
    title: loremIpsum({ count: 5, units: 'words' }),
    imageUrl: `http://lorempixel.com/${getRandomInt(200, 400)}/${getRandomInt(200, 400)}`,
    caption: loremIpsum({ count: 1, units: 'paragraphs' })
  }
}
