import { useSession } from "next-auth/react"
 const ConsultancyDashboard = ()=> {
  const { data: session } = useSession()
  // session is always non-null inside this page, all the way down the React tree.
  return "Some super secret dashboard"
}

ConsultancyDashboard.auth = {
  role: 'USER'
}
export default ConsultancyDashboard;