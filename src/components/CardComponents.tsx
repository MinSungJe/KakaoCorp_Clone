import Image from 'next/image'
import { IoMdMore } from 'react-icons/io'
import S from './styles/CardComponents.module.css'

interface PropsType {
  title: string
  description1: string
  description2: string
  tag: string[]
  src: string
  category_src: string
}

function TagText({ content }: { content: string }) {
  return <p className={S.tagText}>#{content}</p>
}

export function UpImageCard({
  title,
  description1,
  description2,
  tag,
  src,
  category_src,
}: PropsType) {
  return (
    <div className={S['card-container']}>
      <div className={S['UpImageCard-contents-container']}>
        <div className={S['contents-title']}>
          <div className={S.title}>
            <Image
              src={category_src}
              width={32}
              height={32}
              alt="categoryThumbnail"
            />
            <p className={S.titleText}>{title}</p>
          </div>
          <IoMdMore size={32} />
        </div>
        <div className={S['contents-description']}>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
        <div className={S['contents-tag']}>
          {tag.map((content) => {
            return <TagText key="" content={content} />
          })}
        </div>
      </div>
      <div className={S['UpImageCard-image-container']}>
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
