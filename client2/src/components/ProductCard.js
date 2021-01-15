import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import '../index.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    minHeight: 600,
    maxHeight: 600,
    margin: "3px",
  },
});

export default function ProductCard({ title = "", image = "", price = 0.0, money = "pesos", stock = 0, permalink, condition }) {
  const classes = useStyles();
  if (condition === "new") {
    condition = "Nuevo";
  } else {
    condition = "Usado";
  }
  return (
    <div className='card'>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="imagenes"
          height="300"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <br></br>

          <div>
            $ {price} {money}
          </div>
          <div className="condition">
            {condition} 
          </div>
          <div className="stock">
            {stock === 0 ? "SIN STOCK" : stock === 1 ? "1 Disponible" : stock + " Disponibles"}
          </div>
          <Button variant="contained">
            <Link href={permalink} color="inherit" target="_blank">
              Ver producto
            </Link>
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}