import Workspace from '@/components/workspace/Workspace'
import { mockProblemsData } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <>
        <Workspace problems={mockProblemsData} />
    </>
  )
}

export default page