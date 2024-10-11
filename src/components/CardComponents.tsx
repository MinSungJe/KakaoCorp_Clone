import Image from 'next/image'
import styles from './styles/CardComponents.module.css'

interface PropsType {
  title: string
  description: string
  tag: string[]
  src: string
}

function TagText({ content }: { content: string }) {
  return <p style={{ display: 'inline-block' }}>#{content}</p>
}

export function UpImageCard({ title, description, tag, src }: PropsType) {
  return (
    <div className={styles['card-container']}>
      <div className={styles['UpImageCard-contents-container']}>
        <div className={styles['contents-title']}>
          {title}
          <button type="button">더보기버튼</button>
        </div>
        <div className={styles['contents-description']}>{description}</div>
        <div className={styles['contents-tag']}>
          {tag.map((content) => {
            return <TagText key="" content={content} />
          })}
        </div>
      </div>
      <div className={styles['UpImageCard-image-container']}>
        <Image src={src} alt="ImageThumbnail" fill />
      </div>
    </div>
  )
}
export function DownImageCard() {
  return (
    <div>
      <p>UpImageCard</p>
    </div>
  )
}
export function LongImageCard() {
  return (
    <div>
      <p>UpImageCard</p>
    </div>
  )
}
