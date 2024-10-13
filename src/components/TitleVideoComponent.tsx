import VideoComponent from './VideoComponent'
import S from './styles/TitleVideoComponent.module.css'

function DonateCard() {
  return (
    <div className={`${S.Card} ${S.bgYellow}`}>
      <p>기부에 함께 해주신</p>
    </div>
  )
}
function ReportCard() {
  return (
    <div className={`${S.Card} ${S.bgGray}`}>
      <p>기부에 함께 해주신</p>
    </div>
  )
}
function BallonCard() {
  return (
    <div className={`${S.Card} ${S.bgYellow}`}>
      <p>기부에 함께 해주신</p>
    </div>
  )
}

export default function TitleVideoComponent() {
  return (
    <div className={S.container}>
      <div className={S.VideoContainer}>
        <VideoComponent src="/4c2201fa019200001.mp4" />
      </div>
      <div className={S.CardContainer}>
        <DonateCard />
        <ReportCard />
        <BallonCard />
      </div>
    </div>
  )
}
