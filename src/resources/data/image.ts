import * as U from './util'

export const picsumUrl = (width: number, height: number): string =>
  `https://picsum.photos/${width}/${height}`

export const randomImage = (
  w: number = 500,
  h: number = 400,
  delta: number = 200
): string => picsumUrl(U.random(w, w + delta), U.random(h, h + delta))

export const randomAvatar = () => {
  const size = U.random(100, 200)
  return picsumUrl(size, size)
}
