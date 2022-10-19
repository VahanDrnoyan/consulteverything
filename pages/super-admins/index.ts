import { useSession } from "next-auth/react"
const  SuperAdminDashboard = ()=>{
  const { data: session } = useSession()
  // session is always non-null inside this page, all the way down the React tree.
  return "Some super secret dashboard for Super Admins"
}

SuperAdminDashboard.auth = {
  role: 'SUPERADMIN'
}
export default SuperAdminDashboard;