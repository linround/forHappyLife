function createRandomImg() {
  const width = 400;
  const height = 300+ Math.floor(Math.random() * 100);

  return `https://picsum.photos/${width}/${height}`
}

export function createImageData() {
  const data = [];
  for (let i = 0; i < 15; i++) {
    data.push({
      id: i,
      src: createRandomImg(),
    })
  }
  return data;
}

export const imageData = [
  {
    "id": 0,
    "src": "https://picsum.photos/400/216"
  },
  {
    "id": 1,
    "src": "https://picsum.photos/400/282"
  },
  {
    "id": 2,
    "src": "https://picsum.photos/400/393"
  },
  {
    "id": 3,
    "src": "https://picsum.photos/400/253"
  },
  {
    "id": 4,
    "src": "https://picsum.photos/400/349"
  },
  {
    "id": 5,
    "src": "https://picsum.photos/400/116"
  },
  {
    "id": 6,
    "src": "https://picsum.photos/400/550"
  },
  {
    "id": 7,
    "src": "https://picsum.photos/400/388"
  },
  {
    "id": 8,
    "src": "https://picsum.photos/400/180"
  },
  {
    "id": 9,
    "src": "https://picsum.photos/400/389"
  },
  {
    "id": 10,
    "src": "https://picsum.photos/400/544"
  },
  {
    "id": 11,
    "src": "https://picsum.photos/400/433"
  },
  {
    "id": 12,
    "src": "https://picsum.photos/400/333"
  },
  {
    "id": 13,
    "src": "https://picsum.photos/400/576"
  },
  {
    "id": 14,
    "src": "https://picsum.photos/400/386"
  },
  {
    "id": 15,
    "src": "https://picsum.photos/400/232"
  },
  {
    "id": 16,
    "src": "https://picsum.photos/400/541"
  },
  {
    "id": 17,
    "src": "https://picsum.photos/400/334"
  },
  {
    "id": 18,
    "src": "https://picsum.photos/400/249"
  },
  {
    "id": 19,
    "src": "https://picsum.photos/400/494"
  }
]
