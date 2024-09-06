export function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `博客文章 - ${params.id}`
  }
}

export default function Page({params}) {
  return (
    <div>article {params.id}</div>
  )
}
