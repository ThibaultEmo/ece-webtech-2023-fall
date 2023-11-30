import { useRouter } from 'next/router'
import { useContext } from 'react';
import UserContext from '../components/UserContext'
import Layout from '../components/Layout.js'

export default function Page() {
  const router = useRouter()
  const { user, logout } = useContext(UserContext)
  const onClickLogout = () => {
    logout()
    router.push('/login')
  }
  return (
    <Layout
      title="Profile"
      description="User profile page"
      >
      <h1 className='wt-title'>
        Profile
      </h1>
      <div className="mb-8">
        <button
          className="rounded px-3 py-2 text-white bg-slate-500 hover:bg-blue-500"
          onClick={onClickLogout}
        >
          Sign out
        </button>
      </div>
      <pre><code>{JSON.stringify(user, null, 2)}</code></pre>
    </Layout>
  )
}
