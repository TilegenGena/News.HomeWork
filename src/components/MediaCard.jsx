import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard(item) {
    // console.log(item);
  return (
    <Card sx={{ minWidth: 275 }} className="card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
         {item.item.name}
        </Typography>
        <Typography variant="h5" component="div">
        {/* {item.} */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.item.email}
        </Typography>
        <Typography variant="body2">
          {item.item.body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
