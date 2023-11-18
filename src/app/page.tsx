export default function Home() {
  return (
    <main className="flex flex-grow h-full min-h-screen items-center justify-between p-24">
      <div className='flex flex-col gap-4 items-center w-full'>
        <h1 className='text-7xl font-black'>NextJS</h1>
        <h2 className='text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-sky-500'>Boilerplate</h2>
        <p>NextJs + Tailwind + ESlint + Typescript</p>
      </div>
    </main>
  )
}
