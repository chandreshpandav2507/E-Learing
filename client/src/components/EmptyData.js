import React from 'react'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import WarningIcon from '@material-ui/icons/Warning'
import Typography from "@material-ui/core/Typography";

const styles = ({ colors }) => ({
    root: {
        height: '70vh'
    },
    fullHeight: {
        height: '100%'
    },
    icon: {
        color: "primary"
    }
})

const EmptyPlaceholder = ({
                              classes,
                              text,
                              requestText,
                          }) => {
    return (
        <div>
            <WarningIcon className={classes.icon} />
                <Typography variant="big" weight="bold" component="h2" color="primary">
                    {text}
                </Typography>
            <Typography color="primary">{requestText}</Typography>
        </div>
    )
}

export default withStyles(styles)(EmptyPlaceholder)
