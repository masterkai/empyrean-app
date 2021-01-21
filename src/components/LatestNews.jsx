import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

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
  },
];

const rows = [
  {
    id: 1,
    date: new Date(1979, 0, 1),
    title: 'Suunto 7石墨灰 禮盒限量版 新品上市活動'
  },
  {
    id: 2,
    date: new Date(1984, 1, 1),
    title: 'Suunto 7石墨灰 禮盒限量版 新品上市活動'
  },
  {
    id: 3,
    date: new Date(1992, 2, 1),
    title: 'Suunto 7石墨灰 禮盒限量版 新品上市活動'
  },
];

export default function LatestNews() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
