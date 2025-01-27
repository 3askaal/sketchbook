'use client'

import Link from 'next/link'
import { Button } from './components/Button'
import { Box } from './components/Box'

const Home = () => {
  const PROJECTS = [
    { label: "Valentines '24", path: 'valentines-24' },
    { label: 'Polygon Terrain', path: 'polygon-terrain' }
  ]

  const getCurrentColor = (path: string) => {
    return JSON.parse(localStorage.getItem(`project-${path}-config`) || '{}')?.color || '#ff0000'
  }

  return (
    <Box css={{ d: 'flex', fxd: 'column', h: '100%', mih: '100vh', jc: 'center', ai: 'center', '> * + *': { mt: 'm' } }}>
      { PROJECTS.map((project, index) => (
        <Link href={`/projects/${project.path}`} key={index}>
          <Button css={{ bgc: getCurrentColor(project.path) }}>
            { project.label }
          </Button>
        </Link>
      ))}
    </Box>
  )
}

export default Home
