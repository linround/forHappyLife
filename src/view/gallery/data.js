function createRandomImg() {
  const width = Math.floor(Math.random() * 600);
  const height = Math.floor(Math.random() * 600);

  return `https://picsum.photos/${width}/${height}`
}

export function createImageData() {
  const data = [];
  for (let i = 0; i < 40; i++) {
    data.push({
      id: i,
      src: createRandomImg(),
    })
  }
  return data;
}
