/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {
    
  const [readPage,setReadPage] = useState ([]);


  useEffect (() => {
    fetch ('/public/books.json')
    .then (res => res.json ())
    .then (data =>  {
       const readData = data
       const readPageData = readData.map (page => {
        const obj = {
          bookName: page.bookName,
          totalPages: page.totalPages
        }
       
        return obj;
       })
       console.log (readPageData)
       setReadPage (readPageData)
    } )
  } , []) 
   
    
    return (
        <div>
       <ResponsiveContainer width="100%" height={400}>
       <BarChart
      
      data={readPage}
      margin={{
        top: 20,
        right: 30,
        left: 10,
        bottom: 5,
        
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" textAnchor={'inherit'} />
      <YAxis dataKey="totalPages" />
      <Bar dataKey="totalPages"  fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {readPage.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
       </ResponsiveContainer>
         
              </div>
    );
};

export default PageToRead;