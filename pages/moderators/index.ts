import { useSession } from "next-auth/react"
const  ModeratorDashboard = ()=>{
  const { data: session } = useSession()
  // session is always non-null inside this page, all the way down the React tree.
  return "Some super secret dashboard for Moderators"
}

ModeratorDashboard.auth = {
  role: 'MODERATOR'
}
export default ModeratorDashboard