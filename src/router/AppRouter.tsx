import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { PerfumeriaRouter } from '../perfumeria/router/PerfumeriaRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRouter } from './PublicRouter'

type Props = {}

export const AppRouter = (props: Props) => {
  return (
    <div>
      <Routes>

        <Route path='/login' element={<PublicRouter><LoginPage/></PublicRouter>} />


        <Route path='/*' element={<PrivateRoute><PerfumeriaRouter/> </PrivateRoute>} />

       
      </Routes>
    </div>
  )
}

