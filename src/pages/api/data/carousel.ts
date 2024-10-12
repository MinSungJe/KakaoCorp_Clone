import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: CardData[] = [
    {
      title: '제목1',
      description: '설명1',
      tag: ['태', '그'],
      src: '/card-thumbnail.webp',
    },
    {
      title: '제목2',
      description: '설명2',
      tag: ['태', '그'],
      src: '/card-thumbnail.webp',
    },
    {
      title: '제목3',
      description: '설명3',
      tag: ['태', '그'],
      src: '/card-thumbnail.webp',
    },
    {
      title: '제목4',
      description: '설명4',
      tag: ['태', '그'],
      src: '/card-thumbnail.webp',
    },
    {
      title: '제목5',
      description: '설명5',
      tag: ['태', '그'],
      src: '/card-thumbnail.webp',
    },
  ]

  return res.status(200).json(data)
}
