import React from 'react'
import { Grid, Paper } from '@material-ui/core';

export default function GridComponent() {
  return (
    <div>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={8}>
          <Paper>
          <Grid container>
            <Grid item xs={6}>
             xs=6
            </Grid>
            <Grid item xs={6}>
              xs=6
            </Grid>
          </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
