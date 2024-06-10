import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Oops! The page you looking for does not exist.</p>
            Go back to Home
      </div>
    </div>
  )
}

export default NotFound
