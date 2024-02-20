import { Route, Routes } from 'react-router-dom'

import Landing from '@/pages/landing/Landing'

export const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Landing />} />
    </Routes>
  )
}
