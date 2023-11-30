import {createContext, useState, useEffect} from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

const Context = createContext()

export default Context

export const ContextProvider = ({
  children
}) => {
  const supabase = useSupabaseClient()
  const supabaseUser = useUser()
  const [user, setUser] = useState()
  useEffect(function () {
    if (supabaseUser) setUser(supabaseUser)
  }, [supabaseUser])

  return (
    <Context.Provider
      value={{
        user: user,
        logout: async () => {
          await supabase.auth.signOut()
          setUser(null)
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}
