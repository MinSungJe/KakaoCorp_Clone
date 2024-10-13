import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: CardData[] = [
    {
      title: '뚝딱뚝딱 성장기',
      description1: '지역 정보 매체에서',
      description2: '위치기반 상호작용 플랫폼으로',
      tag: ['지도플랫폼', '카카오맵', '트랜드랭킹'],
      src: '/thumbnails/card-thumbnail01.webp',
      category_src: '/icons/steak.webp',
    },
    {
      title: '더 가깝게',
      description1: '웰 메이드',
      description2: '콘텐츠 IP의 저력',
      tag: ['K콘텐츠', '웹소설', '웹툰'],
      src: '/thumbnails/card-thumbnail02.webp',
      category_src: '/icons/card-ring.webp',
    },
    {
      title: '서비스',
      description1: '100명에게',
      description2: '물어봤습니다',
      tag: ['로드트립', '카카오톡', '카톡이지'],
      src: '/thumbnails/card-thumbnail03.webp',
      category_src: '/icons/movie.webp',
    },
    {
      title: '서비스',
      description1: '접근성',
      description2: '어디까지 고민해 봤나요',
      tag: ['디지털접근성', '카카오톡', '카톡이지'],
      src: '/thumbnails/card-thumbnail04.webp',
      category_src: '/icons/movie.webp',
    },
    {
      title: '임팩트',
      description1: '왕초보 사장님들의',
      description2: '단골 만들기 비법',
      tag: ['소상공인지원', '카카오상생활동'],
      src: '/thumbnails/card-thumbnail05.webp',
      category_src: '/icons/movie.webp',
    },
    {
      title: '더 가깝게',
      description1: '무료로 여는',
      description2: '톡 안의 두 번째 매장',
      tag: ['디지털전환', '카카오톡채널'],
      src: '/thumbnails/card-thumbnail06.webp',
      category_src: '/icons/card-ring.webp',
    },
    {
      title: '임팩트',
      description1: '도로 위 히어로즈',
      description2: '',
      tag: ['카카오모빌리티', '파트너상생'],
      src: '/thumbnails/card-thumbnail07.webp',
      category_src: '/icons/movie.webp',
    },
    {
      title: '임팩트',
      description1: '카카오가 꿈꾸는',
      description2: '지속가능한 미래',
      tag: ['ESG', 'ESG보고서', '약속과책임'],
      src: '/thumbnails/card-thumbnail08.webp',
      category_src: '/icons/movie.webp',
    },
    {
      title: '서비스',
      description1: '진화에 누구보다',
      description2: '진심인 편',
      tag: ['조승연의탐구생활', '카카오톡'],
      src: '/thumbnails/card-thumbnail09.webp',
      category_src: '/icons/movie.webp',
    },
  ]

  return res.status(200).json(data)
}
