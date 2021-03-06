import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../lib/theme'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Layout
