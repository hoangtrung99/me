import Image from 'next/image'
import MemeImage from '../../public/meme.jpeg'

export default function Home() {
  return (
    <main className="container min-h-screen mx-auto flex flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Hi, I&apos;m Trung. I&apos;m a ...
      </h1>

      <Image src={MemeImage} priority alt="Pull stack developer" />
    </main>
  )
}
