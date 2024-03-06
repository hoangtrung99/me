import Image from 'next/image'
import MemeImage from '../../public/meme.jpeg'

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-8">
        Hi, I&apos;m Trung. I&apos;m a ...
      </h1>

      <Image src={MemeImage} priority alt="Pull stack developer" />

      <div className="text-lg font-semibold mt-8">
        📫 How to reach me: @hoangtrung99
      </div>
      <div className="text-lg font-semibold space-x-2">
        <a
          className="text-blue-500 visited:text-purple-500"
          target="_blank"
          href="https://github.com/hoangtrung99"
        >
          Github
        </a>
        <a
          className="text-blue-500 visited:text-purple-500"
          target="_blank"
          href="https://facebook.com/hoangtrung99"
        >
          Facebook
        </a>
        <a
          className="text-blue-500 visited:text-purple-500"
          target="_blank"
          href="https://twitter.com/trungnh_"
        >
          X
        </a>
      </div>
    </main>
  )
}
