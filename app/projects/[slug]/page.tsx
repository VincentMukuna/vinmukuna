import React from 'react'

export default function Project({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>
}
