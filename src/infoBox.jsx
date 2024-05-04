import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';
export default function InfoBox({printableInfo}){
  let image="https://images.unsplash.com/photo-1575307814512-b64ecf33d8e5?dpr=2&h=147&w=126&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8VU0zQmNGRy0yUWN8fGVufDB8fHx8fA%3D%3D"

  
    return (<div>
     
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {printableInfo.name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>weather={printableInfo.weather}</p>
          <p>temperature={printableInfo.temperature}&deg;C</p>
          <p>feelslike={printableInfo.feelslike}&deg;C</p>
          <p>humidity={printableInfo.humidity}%</p>
          
        </Typography>
      </CardContent>
     
    </Card>
    </div>)
}