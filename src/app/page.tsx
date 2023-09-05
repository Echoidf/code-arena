import Image from 'next/image'
import Typewriter from '../components/Typewriter'
import LoginForm from '../components/login'

export default function APP() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="border-2 border-current p-6 flex flex-col">
          <LoginForm className="flex h-40 w-40"/>
          <Typewriter text="Let's go for it!" delay={100} className="m-4"/>
        </div>
      </div>
    </main>
  )
}
