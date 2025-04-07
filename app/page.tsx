import Dashboard from "@/components/dashboard"
import Sidebar from "@/components/sidebar"


export default function Home() {
  return (
    <div className="flex bg-primary w-full h-[100vh]">
      <Sidebar/>
      <Dashboard />
    </div>
  )
}

{/* <section className='relative mx-auto flex h-[100vh] w-full flex-col gap-2 overflow-hidden px-4 pt-8 md:px-20 md:pt-8'>
<div className='flex w-full flex-row items-start justify-between'>
  <div className='flex-1'>
    <h1 className='text-2xl font-bold md:text-3xl'>
      Nextjs/ Shadcn/ TS Starter
    </h1>
    <h1 className='italics text-lg text-primary md:text-xl'>
      With Theme Switcher
    </h1>
    <div className='flex w-full gap-2'>
      <Image
        alt='typescript-logo'
        width={24}
        height={24}
        src='/images/ts-logo.png'
      />
      <Image
        alt='typescript-logo'
        width={24}
        height={24}
        src='/images/nextjs-logo.png'
      />
      <Image
        alt='typescript-logo'
        width={24}
        height={24}
        className='rounded-full'
        src='/images/shadcn-logo.png'
      />
    </div>
  </div>
  <div className='flex flex-row items-center gap-2 rounded-2xl bg-muted p-1'>
    <a
      href='https://github.com/oluwadaprof/shadcn-theme-starter'
      className='flex h-8 w-8 items-center justify-center rounded-full p-1 hover:bg-muted hover:underline'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Github size={18} />
    </a>
    <ThemeSwitcher />
  </div>
</div>

<Card className='mx-auto mt-20 w-full max-w-[350px]'>
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>
      Deploy your new project in one-click.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className='grid w-full items-center gap-4'>
        <div className='flex flex-col space-y-1.5'>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' placeholder='Name of your project' />
        </div>
        <div className='flex flex-col space-y-1.5'>
          <Label htmlFor='framework'>Framework</Label>
          <Select>
            <SelectTrigger id='framework'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectItem value='next'>Next.js</SelectItem>
              <SelectItem value='sveltekit'>SvelteKit</SelectItem>
              <SelectItem value='astro'>Astro</SelectItem>
              <SelectItem value='nuxt'>Nuxt.js</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className='flex justify-between'>
    <Button variant='outline'>Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>

<footer className='absolute bottom-0 mx-auto w-[90%] italic text-muted-foreground'>
  <div className='flex flex-col justify-between md:flex-row'>
    <p>Made with 💝 by Israel</p>
    <a
      href='https://github.com/HamedBahram/next-ts'
      className='hover:underline'
      target='_blank'
      rel='noopener noreferrer'
    >
      Reference template
    </a>
    <p>Twitter: @oluwadaprof</p>
  </div>
</footer>
</section> */}
