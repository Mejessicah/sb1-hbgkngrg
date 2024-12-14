import React from 'react'
import { getGreeting } from '../utils/greetings'

export function Welcome() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {getGreeting()}
      </h1>
      <p className="text-lg text-gray-600">
        Welcome to my React application
      </p>
    </div>
  )
}