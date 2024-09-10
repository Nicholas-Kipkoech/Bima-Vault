import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error: string | any = useRouteError()
  return (
    <div className="text-red-600 flex flex-col justify-center items-center h-screen text-[30px]">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
