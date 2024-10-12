import { SetStateAction, useState } from 'react'

export default function useCarouselScroll() {
  const [isDragging, setIsDragging] = useState(false) // 드래그 상태
  const [startX, setStartX] = useState(0) // 마우스 드래그 시작 위치
  const [scrollLeft, setScrollLeft] = useState(0) // 드래그 시작 시 캐러셀 스크롤 위치

  const handleMouseDown = (e: {
    pageX: number
    currentTarget: { offsetLeft: number; scrollLeft: SetStateAction<number> }
  }) => {
    setIsDragging(true) // 드래그 시작
    setStartX(e.pageX - e.currentTarget.offsetLeft) // 시작 X좌표 저장
    setScrollLeft(e.currentTarget.scrollLeft) // 시작할 때 스크롤 위치 저장
  }

  const handleMouseMove = (e: {
    pageX: number
    currentTarget: { offsetLeft: number; scrollLeft: number }
  }) => {
    if (!isDragging) return // 드래그 중이 아니면 아무것도 하지 않음
    const x = e.pageX - e.currentTarget.offsetLeft // 현재 X좌표 계산
    const walk = (x - startX) * 2 // 드래그 이동 거리 (속도 조정 가능)
    e.currentTarget.scrollLeft = scrollLeft - walk // 스크롤 이동
  }

  const handleMouseUp = () => {
    setIsDragging(false) // 드래그 종료
  }

  const handleMouseLeave = () => {
    setIsDragging(false) // 캐러셀 밖으로 나가면 드래그 종료
  }

  return [handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave]
}
