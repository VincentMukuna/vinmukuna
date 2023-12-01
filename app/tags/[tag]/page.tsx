import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: 'Blogs',
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
  return paths
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag)
  const tags = tag.split('%26')
  // Capitalize first letter and convert space to dash
  const textTags = tags.map((tag) => tag[0].toUpperCase() + tag.split(' ').join('-').slice(1))

  const lastTag = textTags.pop()
  let title = 'Blogs'
  if (textTags.length === 0 && lastTag) {
    title = lastTag
  } else if (textTags.length === 1) {
    title = textTags[0] + ' and ' + lastTag
  } else {
    title = textTags.join(', ') + ' and ' + lastTag
  }

  const filteredPosts = allCoreContent(
    sortPosts(
      allBlogs.filter(
        (post) => post.tags && post.tags.map((t) => slug(t)).some((t) => tags.includes(t))
      )
    )
  )
  return <ListLayout posts={filteredPosts} title={title + ' blogs'} />
}
