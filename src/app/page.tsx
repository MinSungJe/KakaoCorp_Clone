/* eslint-disable jsx-a11y/media-has-caption */

import { UpImageCard } from '@/components/CardComponents'

export default function Home() {
  return (
    <ul>
      <li style={{ display: 'inline-block', padding: '0 6px' }}>
        <UpImageCard
          title="제목"
          description="설명"
          tag={['태', '그']}
          src="/card-thumbnail.webp"
        />
      </li>
      <li style={{ display: 'inline-block', padding: '0 6px' }}>
        <UpImageCard
          title="제목"
          description="설명"
          tag={['태', '그']}
          src="/card-thumbnail.webp"
        />
      </li>
      <li style={{ display: 'inline-block', padding: '0 6px' }}>
        <UpImageCard
          title="제목"
          description="설명"
          tag={['태', '그']}
          src="/card-thumbnail.webp"
        />
      </li>
    </ul>
  )
}
