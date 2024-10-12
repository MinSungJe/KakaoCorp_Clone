/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client'

import useCarouselScroll from '@/hooks/useCarouselScroll'
import { UpImageCard } from './CardComponents'
import S from './styles/CarouselComponent.module.css'

export default function CarouselComponent() {
  const [handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave] =
    useCarouselScroll()

  return (
    <div
      className={S.carousel}
      onMouseDown={handleMouseDown} // 마우스 클릭 시작
      onMouseMove={handleMouseMove} // 마우스 이동 중
      onMouseUp={handleMouseUp} // 마우스 클릭 끝날 때
      onMouseLeave={handleMouseLeave} // 마우스가 캐러셀을 벗어날 때
    >
      <UpImageCard
        title="제목1"
        description="설명1"
        tag={['태', '그']}
        src="/card-thumbnail.webp"
      />
      <UpImageCard
        title="제목2"
        description="설명2"
        tag={['태', '그']}
        src="/card-thumbnail.webp"
      />
      <UpImageCard
        title="제목3"
        description="설명3"
        tag={['태', '그']}
        src="/card-thumbnail.webp"
      />
      <UpImageCard
        title="제목4"
        description="설명4"
        tag={['태', '그']}
        src="/card-thumbnail.webp"
      />
      <UpImageCard
        title="제목5"
        description="설명5"
        tag={['태', '그']}
        src="/card-thumbnail.webp"
      />
    </div>
  )
}
