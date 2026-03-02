'use client'

import { useEffect } from 'react'

export function VersionLogger() {
  useEffect(() => {
    console.log(`Version: ${process.env.NEXT_PUBLIC_VERSION}`)
  }, [])

  return null
}
