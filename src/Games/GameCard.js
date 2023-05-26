import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../Styles/Card.css"

export default function GameCard(props) {
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
        <Button classname = "linkButton" variant='solid' colorScheme='blue' size="small" href = {item.link}>Link</Button>
      </CardActions>
    </Card>
  );
}
