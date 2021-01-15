import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import ProductCard from './ProductCard';
import Grid from '@material-ui/core/Grid';
import Paginas from './Paginas';
import '../App.css';

export default function Catalogo({ products }) {
  const [list, setList] = useState("");
  const [value, setValue] = useState("notOrdered");
  const [page, setPage] = useState(0);

  const lowHigh = [...products].sort((a, b) => a.price - b.price);
  const highLow = [...lowHigh].reverse();
  const newProd = [...products].filter((e) => e.condition === "new");
  const usedProd = [...products].filter((e) => e.condition === "used");

  useEffect(() => {
    setList(products);
  }, [products]);

  function handleChange(e) {
    setValue(e.target.value);
    if (e.target.value === "highLow") {
      setList(highLow);
    } else if (e.target.value === "lowHigh") {
      setList(lowHigh);
    } else if (e.target.value === "newProd") {
      setList(newProd);
    } else {
      setList(usedProd);
    }
  }

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="Ordenar por"
          name="position"
          defaultValue="top"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="highLow"
            control={<Radio color="primary" />}
            label="Precio mayor a menor"
            labelPlacement="top"
          />
          <FormControlLabel
            value="lowHigh"
            control={<Radio color="primary" />}
            label="Precio menor a mayor"
            labelPlacement="top"
          />
          <FormControlLabel
            value="newProd"
            control={<Radio color="primary" />}
            label="Nuevo"
            labelPlacement="top"
          />
          <FormControlLabel
            value="usedProd"
            control={<Radio color="primary" />}
            label="Usado"
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>

      <Grid container spacing={0}>
        <img className="banner" src="https://http2.mlstatic.com/storage/splinter-admin/o:f_jpg,q_auto:best/1603218386858-01-cybermonday_desktop.jpg" />
        {list.length > 0 ? list.map((product, index) => (
          index >= (page) * 30 && index < (page + 1) * 30 ? (
            <Grid item lg={3}>
              <ProductCard
                title={product.title}
                money={product.money}
                price={product.price}
                stock={product.stock}
                image={product.image}
                permalink={product.link}
                condition={product.condition}
              />
            </Grid>
          ) : (
              <React.Fragment> </React.Fragment>
            )
        )) : (
            <React.Fragment>
              <Grid item xs={12}>
                <div className="catalogo">
                  Comience a buscar sus productos!
                </div>
              </Grid>
            </React.Fragment>
          )
        }
      </Grid>
      {
        list.length > 0 ? (
          <Paginas setPage={setPage} />
        ) : (
            <React.Fragment></React.Fragment>
          )
      }
    </div>
  );
}