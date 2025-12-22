import React from 'react'

export default function AppRoutes
() {
  return (
<BrowserRoute>
    <Routes>
        <Route path="/" element={<home/> }/>
        <Route path="/about" element={<about/> }/>
        <Route path="/contact" element={<contact/> }/>
    </Routes>
</BrowserRoute>
  )
}
