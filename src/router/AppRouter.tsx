import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalPage } from "../journal/pages/JournalPage"

export const AppRouter = () => {
  return (
    <Routes>

      {/* authAPP */}
      <Route path="/auth/*" element={ <AuthRoutes/>}/>
      
      {/* journalAPP */}
      <Route path="/*" element={ <JournalPage/>}/>
    </Routes>
  )
}