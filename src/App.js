import React from 'react'

import { ThemeProvider } from 'emotion-theming'
import FormikContainer from './commen/FormikContainer'
import { theme } from '@chakra-ui/core'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <FormikForm /> */}
        {/* <RegistrationFormikYup /> */}
        <FormikContainer />
      </div>
    </ThemeProvider>
  )
}

export default App
