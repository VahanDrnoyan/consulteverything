import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
export default function AdminDashboard() {
  const { data: session } = useSession()
  // session is always non-null inside this page, all the way down the React tree.
  return "Some super secret admin dashboard"
}

AdminDashboard.auth = {
  role: 'ADMIN'
}