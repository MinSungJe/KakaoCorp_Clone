import S from './styles/TitleVideoComponent.module.css'

export default function VideoComponent({ src }: { src: string }) {
  return (
    <video className={S.Video} muted autoPlay loop>
      <source src={src} type="video/mp4" />
      브라우저에서 동영상을 지원하지 않습니다.
    </video>
  )
}
