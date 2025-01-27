// @ts-nocheck

'use client'

import { PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'
import { CSSProvider, RootStyle, ResetStyle, darken, css } from 'csscomp'
import { useConfig } from './hooks/useConfig'

const DynamicWrapper = dynamic(() => Promise.resolve(({ children }: PropsWithChildren) => <>{ children }</>), {
  ssr: false
})

const SApp = css.div({
  d: 'flex',
  fxd: 'column',
  w: '100%',
  h: '100%',
  mih: '100vh',
  bgc: 'black',
  c: 'white',
  ff: 'base',
  fs: '16px',
  ai: 'center',
  jc: 'center'
})

const App = ({ children }: PropsWithChildren) => {
  const { config } = useConfig(null, 1)

  const theme = {
    colors: {
      primary: darken(config.color, 5),
      primaryDark: darken(config.color, 25)
    }
  }

  return (
    <html lang="en">
      <body>
        <CSSProvider theme={theme}>
          <DynamicWrapper>
            <ResetStyle />
            <RootStyle />
            <SApp>
              { children }
            </SApp>
          </DynamicWrapper>
        </CSSProvider>
      </body>
    </html>
  )
}

export default App
