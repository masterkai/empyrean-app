import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import LatestNewsTabs from "../../src/components/LatestNewsTabs";
import Breadcrumb from "../../src/components/Breadcrumb";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom'

const LatestNewsPage = ({match}) => {
  const [item, setItem] = useState({
    images: {}
  })

  useEffect(() => {
    fetchItem()
    // console.log(match);
  }, [])


  const fetchItem = async () => {
    const fetchedItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)

    const results = await fetchedItem.json()
    // console.log(results.data.item);
    setItem(results.data.item)
  }
  return (
    <>
      <Container maxWidth="md">

        <Breadcrumb/>
        <Link to='/latest-news/'>反回列表</Link>
        <h1>{item.name}</h1>
        {item.images.icon && (
          <div style={{backgroundColor: '#cdcdcd'}}>
            <img alt={item.name} src={item.images.icon}/>
          </div>)
        }
      </Container>
    </>
  );
};

export default LatestNewsPage;