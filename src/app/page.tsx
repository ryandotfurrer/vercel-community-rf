'use client';

import {
  ClockIcon,
  EyeIcon,
  Flame,
  HeartIcon,
  MenuIcon,
  MessageCircleIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { cn } from '~/lib/utils';
import { useIsMobile } from '~/hooks/use-mobile';
const categories = [
  {
    id: 'announcements',
    name: 'Announcements',
    backgroundColor: 'bg-green-50',
    hoverBackgroundColor: 'hover:bg-green-50/80',
    textColor: 'text-green-900',
    borderColor: 'border-green-300',
  },
  {
    id: 'events',
    name: 'Events',
    backgroundColor: 'bg-teal-50',
    hoverBackgroundColor: 'hover:bg-teal-50/80',
    textColor: 'text-teal-900',
    borderColor: 'border-teal-300',
  },
  {
    id: 'discussions',
    name: 'Discussions',
    backgroundColor: 'bg-rose-50',
    hoverBackgroundColor: 'hover:bg-rose-50/80',
    textColor: 'text-rose-900',
    borderColor: 'border-rose-300',
  },
  {
    id: 'showcase',
    name: 'Showcase',
    backgroundColor: 'bg-violet-50',
    hoverBackgroundColor: 'hover:bg-violet-50/80',
    textColor: 'text-violet-900',
    borderColor: 'border-violet-300',
  },
  {
    id: 'help',
    name: 'Help',
    backgroundColor: 'bg-blue-50',
    hoverBackgroundColor: 'hover:bg-blue-50/80',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-300',
  },
  {
    id: 'feedback',
    name: 'Feedback',
    backgroundColor: 'bg-amber-50',
    hoverBackgroundColor: 'hover:bg-amber-50/80',
    textColor: 'text-amber-900',
    borderColor: 'border-amber-300',
  },
];

const topPosts = [
  {
    id: '1',
    title: 'Top Post 1',
    description: 'Top Post 1 Description',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'Announcements',
    backgroundColor: 'bg-green-50',
    hoverBackgroundColor: 'hover:bg-green-50/80',
    textColor: 'text-green-900',
    borderColor: 'border-green-300',
    author: 'John Doe',
    date: new Date('2021-01-01'),
    comments: 10,
    likes: 20,
    views: 30,
  },
  {
    id: '2',
    title: 'Top Post 2',
    description: 'Top Post 2 Description',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: 'Events',
    author: 'Jane Smith',
    date: new Date('2021-01-02'),
    comments: 5,
    likes: 15,
    views: 25,
    backgroundColor: 'bg-teal-50',
    hoverBackgroundColor: 'hover:bg-teal-50/80',
    textColor: 'text-teal-900',
    borderColor: 'border-teal-300',
  },
  {
    id: '3',
    title: 'Top Post 3',
    description: 'Top Post 3 Description',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    category: 'Discussions',
    author: 'John Doe',
    date: new Date('2021-01-03'),
    comments: 3,
    likes: 10,
    views: 20,
    backgroundColor: 'bg-rose-50',
    hoverBackgroundColor: 'hover:bg-rose-50/80',
    textColor: 'text-rose-900',
    borderColor: 'border-rose-300',
  },
];

const allPosts = [
  ...topPosts,
  {
    id: '4',
    title: 'Another Post 1',
    description: 'Description for Another Post 1',
    content: 'Content for Another Post 1',
    category: 'Announcements',
    author: 'Alice Brown',
    date: new Date('2021-01-04'),
    comments: 7,
    likes: 12,
    views: 18,
    backgroundColor: 'bg-green-50',
    hoverBackgroundColor: 'hover:bg-green-50/80',
    textColor: 'text-green-900',
    borderColor: 'border-green-300',
  },
  {
    id: '5',
    title: 'Yet Another Post 2',
    description: 'Description for Yet Another Post 2',
    content: 'Content for Yet Another Post 2',
    category: 'Events',
    author: 'Bob Green',
    date: new Date('2021-01-05'),
    comments: 9,
    likes: 14,
    views: 22,
    backgroundColor: 'bg-teal-50',
    hoverBackgroundColor: 'hover:bg-teal-50/80',
    textColor: 'text-teal-900',
    borderColor: 'border-teal-300',
  },
  {
    id: '6',
    title: 'Post Number 6',
    description: 'Description for Post Number 6',
    content: 'Content for Post Number 6',
    category: 'Discussions',
    author: 'Charlie Blue',
    date: new Date('2021-01-06'),
    comments: 2,
    likes: 8,
    views: 15,
    backgroundColor: 'bg-rose-50',
    hoverBackgroundColor: 'hover:bg-rose-50/80',
    textColor: 'text-rose-900',
    borderColor: 'border-rose-300',
  },
  {
    id: '7',
    title: 'Informative Post 7',
    description: 'Description for Informative Post 7',
    content: 'Content for Informative Post 7',
    category: 'Announcements',
    author: 'Diana White',
    date: new Date('2021-01-07'),
    comments: 6,
    likes: 11,
    views: 19,
    backgroundColor: 'bg-green-50',
    hoverBackgroundColor: 'hover:bg-green-50/80',
    textColor: 'text-green-900',
    borderColor: 'border-green-300',
  },
  {
    id: '8',
    title: 'Eighth Post Here',
    description: 'Description for Eighth Post Here',
    content: 'Content for Eighth Post Here',
    category: 'Help',
    author: 'Ethan Black',
    date: new Date('2021-01-08'),
    comments: 4,
    likes: 9,
    views: 16,
    backgroundColor: 'bg-blue-50',
    hoverBackgroundColor: 'hover:bg-blue-50/80',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-300',
  },
  {
    id: '9',
    title: 'Ninth Article',
    description: 'Description for Ninth Article',
    content: 'Content for Ninth Article',
    category: 'Feedback',
    author: 'Fiona Gray',
    date: new Date('2021-01-09'),
    comments: 8,
    likes: 13,
    views: 21,
    backgroundColor: 'bg-amber-50',
    hoverBackgroundColor: 'hover:bg-amber-50/80',
    textColor: 'text-amber-900',
    borderColor: 'border-amber-300',
  },
  {
    id: '10',
    title: 'Tenth Entry',
    description: 'Description for Tenth Entry',
    content: 'Content for Tenth Entry',
    category: 'Help',
    author: 'George Silver',
    date: new Date('2021-01-10'),
    comments: 1,
    likes: 7,
    views: 14,
    backgroundColor: 'bg-blue-50',
    hoverBackgroundColor: 'hover:bg-blue-50/80',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-300',
  },
  {
    id: '11',
    title: 'Eleventh Post',
    description: 'Description for Eleventh Post',
    content: 'Content for Eleventh Post',
    category: 'Discussions',
    author: 'Hannah Gold',
    date: new Date('2021-01-11'),
    comments: 5,
    likes: 10,
    views: 17,
    backgroundColor: 'bg-rose-50',
    hoverBackgroundColor: 'hover:bg-rose-50/80',
    textColor: 'text-rose-900',
    borderColor: 'border-rose-300',
  },
  {
    id: '12',
    title: 'Twelfth Submission',
    description: 'Description for Twelfth Submission',
    content: 'Content for Twelfth Submission',
    category: 'Discussions',
    author: 'Isaac Bronze',
    date: new Date('2021-01-12'),
    comments: 3,
    likes: 8,
    views: 13,
    backgroundColor: 'bg-rose-50',
    hoverBackgroundColor: 'hover:bg-rose-50/80',
    textColor: 'text-rose-900',
    borderColor: 'border-rose-300',
  },
  {
    id: '13',
    title: 'Thirteenth Article',
    description: 'Description for Thirteenth Article',
    content: 'Content for Thirteenth Article',
    category: 'Feedback',
    author: 'Jack Copper',
    date: new Date('2021-01-13'),
    comments: 7,
    likes: 12,
    views: 20,
    backgroundColor: 'bg-amber-50',
    hoverBackgroundColor: 'hover:bg-amber-50/80',
    textColor: 'text-amber-900',
    borderColor: 'border-amber-300',
  },
  {
    id: '14',
    title: 'Fourteenth Piece',
    description: 'Description for Fourteenth Piece',
    content: 'Content for Fourteenth Piece',
    category: 'Showcase',
    author: 'Kelly Lead',
    date: new Date('2021-01-14'),
    comments: 9,
    likes: 14,
    views: 23,
    backgroundColor: 'bg-violet-50',
    hoverBackgroundColor: 'hover:bg-violet-50/80',
    textColor: 'text-violet-900',
    borderColor: 'border-violet-300',
  },
  {
    id: '15',
    title: 'Fifteenth Post',
    description: 'Description for Fifteenth Post',
    content: 'Content for Fifteenth Post',
    category: 'Showcase',
    author: 'Liam Tin',
    date: new Date('2021-01-15'),
    comments: 2,
    likes: 6,
    views: 11,
    backgroundColor: 'bg-violet-50',
    hoverBackgroundColor: 'hover:bg-violet-50/80',
    textColor: 'text-violet-900',
    borderColor: 'border-violet-300',
  },
  {
    id: '16',
    title: 'Sixteenth Entry',
    description: 'Description for Sixteenth Entry',
    content: 'Content for Sixteenth Entry',
    category: 'Help',
    author: 'Mia Iron',
    date: new Date('2021-01-16'),
    comments: 6,
    likes: 11,
    views: 18,
    backgroundColor: 'bg-blue-50',
    hoverBackgroundColor: 'hover:bg-blue-50/80',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-300',
  },
  {
    id: '17',
    title: 'Seventeenth Post',
    description: 'Description for Seventeenth Post',
    content: 'Content for Seventeenth Post',
    category: 'Events',
    author: 'Noah Steel',
    date: new Date('2021-01-17'),
    comments: 4,
    likes: 9,
    views: 15,
    backgroundColor: 'bg-teal-50',
    hoverBackgroundColor: 'hover:bg-teal-50/80',
    textColor: 'text-teal-900',
    borderColor: 'border-teal-300',
  },
  {
    id: '18',
    title: 'Eighteenth Article',
    description: 'Description for Eighteenth Article',
    content: 'Content for Eighteenth Article',
    category: 'Announcements',
    author: 'Olivia Nickel',
    date: new Date('2021-01-18'),
    comments: 8,
    likes: 13,
    views: 22,
    backgroundColor: 'bg-green-50',
    hoverBackgroundColor: 'hover:bg-green-50/80',
    textColor: 'text-green-900',
    borderColor: 'border-green-300',
  },
  {
    id: '19',
    title: 'Nineteenth Entry',
    description: 'Description for Nineteenth Entry',
    content: 'Content for Nineteenth Entry',
    category: 'Events',
    author: 'Peter Chrome',
    date: new Date('2021-01-19'),
    comments: 1,
    likes: 5,
    views: 10,
    backgroundColor: 'bg-teal-50',
    hoverBackgroundColor: 'hover:bg-teal-50/80',
    textColor: 'text-teal-900',
    borderColor: 'border-teal-300',
  },
  {
    id: '20',
    title: 'Twentieth Post',
    description: 'Description for Twentieth Post',
    content: 'Content for Twentieth Post',
    category: 'Help',
    author: 'Quinn Silver',
    date: new Date('2021-01-20'),
    comments: 5,
    likes: 10,
    views: 17,
    backgroundColor: 'bg-blue-50',
    hoverBackgroundColor: 'hover:bg-blue-50/80',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-300',
  },
  {
    id: '21',
    title: 'Extra Post 1',
    description: 'Description for Extra Post 1',
    content: 'Content for Extra Post 1',
    category: 'Discussions',
    author: 'Ryan Platinum',
    date: new Date('2021-01-21'),
    comments: 3,
    likes: 7,
    views: 12,
    backgroundColor: 'bg-rose-50',
    hoverBackgroundColor: 'hover:bg-rose-50/80',
    textColor: 'text-rose-900',
    borderColor: 'border-rose-300',
  },
  {
    id: '22',
    title: 'Bonus Post 2',
    description: 'Description for Bonus Post 2',
    content: 'Content for Bonus Post 2',
    category: 'Showcase',
    author: 'Sophia Titanium',
    date: new Date('2021-01-22'),
    comments: 7,
    likes: 12,
    views: 19,
    backgroundColor: 'bg-violet-50',
    hoverBackgroundColor: 'hover:bg-violet-50/80',
    textColor: 'text-violet-900',
    borderColor: 'border-violet-300',
  },
];

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <div>
      <nav className='flex items-center gap-4 border-b border-border pt-2 pb-6 lg:justify-between'>
        <ul>
          <li>
            <Link href='/'>
              <Image
                src={isMobile ? '/vercel-icon.svg' : '/vercel-logotype.svg'}
                alt='Logo'
                width={64}
                height={64}
                className='dark:invert w-14 md:w-40 lg:w-32 h-auto'
              />
            </Link>
          </li>
        </ul>
        <Input
          type='search'
          placeholder='Search...'
          className='w-full lg:max-w-1/2'
        />
        <div className='flex items-center gap-2'>
          <Button
            variant='outline'
            size='icon'
            shape='round'
          >
            <MessageCircleIcon className='size-4' />
          </Button>
          <Button
            variant='outline'
            size='icon'
            shape='round'
          >
            <MenuIcon className='size-4' />
          </Button>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <main className='space-y-12 py-12'>
        <section
          id='top-posts'
          className='space-y-6'
        >
          <h2 className='text-2xl font-semibold'>Top Posts</h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {topPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader className='flex items-center justify-between gap-4'>
                  <div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      {post.date.toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <div>
                    <Avatar className='size-10'>
                      <AvatarImage src='https://github.com/shadcn.png' />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='line-clamp-2'>{post.content}</p>
                </CardContent>
                <CardFooter className='flex items-center justify-between'>
                  <Button
                    variant='outline'
                    size='sm'
                    shape='round'
                    className={cn(
                      post.category,
                      post.backgroundColor,
                      post.hoverBackgroundColor,
                      post.textColor,
                      post.borderColor,
                      'text-xs hover:text-category.textColor',
                    )}
                  >
                    {post.category}
                  </Button>
                  <div className='flex items-center gap-3 text-sm'>
                    <p className='flex items-center gap-1'>
                      <MessageCircleIcon className='size-4 text-zinc-400' />{' '}
                      {post.comments}
                    </p>
                    <p className='flex items-center gap-1'>
                      <HeartIcon className='size-4 text-zinc-400' />{' '}
                      {post.likes}
                    </p>
                    <p className='flex items-center gap-1'>
                      <EyeIcon className='size-4 text-zinc-400' /> {post.views}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <section
          id='list'
          className='max-w-screen-sm mx-auto '
        >
          <h2 className='text-2xl font-semibold'>All Posts</h2>
          <div
            id='list-filters'
            className='flex items-center gap-2 py-4 flex-wrap'
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant='outline'
                size='sm'
                shape='round'
                className={cn(
                  category.backgroundColor,
                  category.hoverBackgroundColor,
                  category.textColor,
                  category.borderColor,
                  'text-sm hover:text-category.textColor',
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>
          <Tabs defaultValue='hot'>
            <TabsList>
              <TabsTrigger value='hot'>
                <Flame /> Hot
              </TabsTrigger>
              <TabsTrigger value='latest'>
                <ClockIcon /> Latest
              </TabsTrigger>
            </TabsList>
            <TabsContent value='hot'>
              <div
                id='hot-posts'
                className='*:shadow-none *:border-0 *:rounded-none *:not-last:border-b'
              >
                {allPosts
                  .slice()
                  .sort((a, b) => b.comments - a.comments)
                  .map((post) => (
                    <Card
                      key={post.id}
                      className='*:px-0'
                    >
                      <CardHeader className='flex items-center gap-4'>
                        <div>
                          <Avatar className='size-10'>
                            <AvatarImage src='https://github.com/shadcn.png' />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <CardTitle>{post.title}</CardTitle>
                          <CardDescription>
                            {post.date.toLocaleDateString()}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      {/* <CardContent></CardContent> */}
                      <CardFooter className='flex items-center justify-between'>
                        <Button
                          variant='outline'
                          size='sm'
                          shape='round'
                          className={cn(
                            post.category,
                            post.backgroundColor,
                            post.hoverBackgroundColor,
                            post.textColor,
                            post.borderColor,
                            'text-xs hover:text-category.textColor',
                          )}
                        >
                          {post.category}
                        </Button>
                        <div className='flex items-center gap-3 text-sm'>
                          <p className='flex items-center gap-1'>
                            <MessageCircleIcon className='size-4 text-zinc-400' />{' '}
                            {post.comments}
                          </p>
                          <p className='flex items-center gap-1'>
                            <HeartIcon className='size-4 text-zinc-400' />{' '}
                            {post.likes}
                          </p>
                          <p className='flex items-center gap-1'>
                            <EyeIcon className='size-4 text-zinc-400' />{' '}
                            {post.views}
                          </p>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value='latest'>
              <div
                id='latest-posts'
                className='*:shadow-none *:border-0 *:rounded-none *:not-last:border-b'
              >
                {allPosts
                  .slice()
                  .sort((a, b) => b.date.getTime() - a.date.getTime())
                  .map((post) => (
                    <Card
                      key={post.id}
                      className='*:px-0'
                    >
                      <CardHeader className='flex items-center gap-4'>
                        <div>
                          <Avatar className='size-10'>
                            <AvatarImage src='https://github.com/shadcn.png' />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <CardTitle>{post.title}</CardTitle>
                          <CardDescription>
                            {post.date.toLocaleDateString()}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      {/* <CardContent></CardContent> */}
                      <CardFooter className='flex items-center justify-between'>
                        <Button
                          variant='outline'
                          size='sm'
                          shape='round'
                          className={cn(
                            post.category,
                            post.backgroundColor,
                            post.hoverBackgroundColor,
                            post.textColor,
                            post.borderColor,
                            'text-xs hover:text-category.textColor',
                          )}
                        >
                          {post.category}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}
