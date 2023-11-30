import Link from 'next/link'
import Image from 'next/image'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import { useContext } from 'react';
import UserContext from './UserContext'

export default function Header(){
  const {user} = useContext(UserContext)
  return (
    <header className="flex bg-slate-200 px-10 py-2">
      <Link href={`/`} className="flex-grow flex items-center">
        <Image src="/adaltas.svg" className='cursor-pointer h-6 mr-5' alt="Adaltas Logo" width={25} height={25} />
        <span className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          Web technologies
        </span>
      </Link>
      <ul className="flex gap-5">
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/articles">
            Articles
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/about">
            About us
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/contacts">
            Contact us
          </Link>
        </li>
        {user && (
          <li className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            <Link href="/profile" className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              username
              <OutlineUserCircleIcon />
            </Link>
          </li>
        )}
        <li className="py-1 px-2 text-slate-800 hover:text-slate-500">
          {user ?
            <button className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              Sing out
            </button>
            :
            <button className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              Sing in
            </button>
          }
        </li>
      </ul>
    </header>
  )
}
