import React, {useState, useEffect} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {Link} from 'react-router-dom'

const columns = [
  {
    field: 'date',
    width: 150,
    type: 'date',
    renderHeader: () => (
      <strong>
        {'發佈日期 '}
      </strong>
    ),
  },
  {
    field: 'title',
    width: 850,
    type: 'title',
    renderHeader: () => (
      <strong>
        {'Title '}
      </strong>
    ),
    renderCell: (params) => (
      <strong>
        <Link to='/'
              style={{textDecoration: 'none'}}
        >
          {params.value}
        </Link>
      </strong>
    ),
  },
];



export default function LatestNews() {

  const [rows, setRows] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])


  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/store/get')

    const results = await data.json()
    // console.log(results.data[0].item);
    setRows(results.data)
  }

  return (
    <div className='newsListContainer'>
      {rows&&rows.length>0&&rows.map((x)=>(<div className='newsItem' key={x.itemId}><Link to={`/latest-news/${x.itemId}`}>{x.item.name}</Link></div>))}
    </div>
  );
}
