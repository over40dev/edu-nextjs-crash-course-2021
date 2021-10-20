import type {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next'
import Link from 'next/link'
// import {useRouter} from 'next/router'

interface Props {
  article: ArticleProps,
}

interface ArticleProps {
    id: any,
    title: string,
    userId?: any,
    body?: string,
}

const ArticlePage: NextPage<Props> = ({article}) => {

  // const router = useRouter()
  // const {id} = router.query

  return (
    <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br />
    <Link href="/">⬅️ Go Back</Link>
    </>
  )
}

export default ArticlePage

export const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()
  return {
    props: {
      article
    }
  }
}
