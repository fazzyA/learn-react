import React from 'react'
import Animate from './Animate'
import SlideText from './SlideText'
import Grid from '@material-ui/core/Grid';
import Basic from './Basic';
import Skills from './Skills';
function Skeleton() {
    return (
        <div>
            <Grid container spacing={3}>
                {/* <Grid item xs={4}>
                </Grid>
                <Grid item xs={8}>
                    <Animate />
                </Grid> */}
                <Grid item xs={12}>
                    <Basic/>
                </Grid>
                <Grid item xs={12}>
                    <Skills/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skeleton
