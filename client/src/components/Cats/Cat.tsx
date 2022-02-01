import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { Cat as ICat } from '../../api/catsApi'

interface IProps {
    cat: ICat;
    extra?: string;
}

export default function Cat(props: IProps) {
    return (
<Card >
      <CardContent>
        <Typography variant="h3">
          Name: {props.cat.name}
        </Typography>
        <Typography variant="h5" component="div">
          Age: {props.cat.age}
        </Typography>
        <Typography variant="body2">
          Extra info:
          <br />
          {props.extra}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
}
