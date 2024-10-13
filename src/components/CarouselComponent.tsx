/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client'

import useCarouselScroll from '@/hooks/useCarouselScroll'
import useCarouselCardData from '@/hooks/useCarouselCardData'
import { UpImageCard } from './CardComponents'
import S from './styles/CarouselComponent.module.css'

export default function CarouselComponent() {
  const [handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave] =
    useCarouselScroll()
  const data = useCarouselCardData()

  return (
    <>
      <div className={S.title}>
        <div className={S.titleContent}>
          <div className={S.titleGIF} />
          <p className={S.titleText}>
            카카오와 카카오 그룹이 함께 축적해온 이야기들
          </p>
        </div>
        <div className={S.carouselStopBtn} />
      </div>
      <div
        className={S.carousel}
        onMouseDown={handleMouseDown} // 마우스 클릭 시작
        onMouseMove={handleMouseMove} // 마우스 이동 중
        onMouseUp={handleMouseUp} // 마우스 클릭 끝날 때
        onMouseLeave={handleMouseLeave} // 마우스가 캐러셀을 벗어날 때
      >
        {data.map((element) => (
          <UpImageCard
            key=""
            title={element.title}
            description={element.description}
            tag={element.tag}
            src={element.src}
          />
        ))}
      </div>
    </>
  )
}
