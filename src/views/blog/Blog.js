import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import {
  Page,
} from '../../styles/layout'

const classes = makeStyles({
  fix: {
  }
})

const Blog = () => {
  const styles = classes()

  return (
    <Page>
      <div className={styles.fix}>
        <Typography 
          variant="h3" 
          component="h1"
        >
          Blog
        </Typography>
        <hr/>
      </div>
    </Page>
  )
}

export default Blog