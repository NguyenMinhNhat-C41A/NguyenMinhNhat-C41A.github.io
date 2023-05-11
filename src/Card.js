import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
      const {item} = props;

  return (
    <Card style={{marginBottom:"30px"}} sx={{ maxWidth: 345 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.content}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
