const express = require('express');
const app = express();
const port = 5000;
const cors = require("cors")
app.use(express.json());

app.use(cors())

const courseData=[
  {
    title: 'Spring Angular',
    price: '350dt',
    image: 'https://blog.eduonix.com/wp-content/uploads/2018/06/Spring-MVC-AngularJS.jpg',
  },
  {
    title: 'react-node',
    price: '350dt',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Z8v53FpG5MiKbLhuX5E4Yw.jpeg'

  },
  {
    title: 'fullter-FireBase',
    price: '350dt',
    image:'https://media.licdn.com/dms/image/D4D12AQHcQte_UgMySg/article-cover_image-shrink_720_1280/0/1666006523374?e=1710979200&v=beta&t=spupPxIBX95JrNxi2CUvg8Ybau4T3jELskpKo_lfzfQ'

  },
  {
    title: 'AI',
    price: '350dt',
    image: 'https://www.josh-digital.com/wp-content/uploads/2023/04/8800992_855f-940x603.jpg'
  },

  {
    title: 'Bussiess Intelligente',
    price: '350dt',
    image:'https://www.cio.com/wp-content/uploads/2023/05/bi-business-intelligence-ts-100646689-orig-4.jpg?resize=1536%2C1024&quality=50&strip=all'  
  },
  {
    title: 'Devops',
    price: '350dt',
    image: 'https://www.weodeo.com/wp-content/uploads/2023/02/DevOps-2048x1229.webp'
  },
  
];



app.get('/', (_, res) => {
  res.json(courseData);
});

app.post('/Add', (req, res) => {
  const newCourse = req.body; 
  courseData.push(newCourse); 

  res.json(courseData);
});

app.delete('/delete/:index', (req, res) => {
  const indexToDelete = req.params.index;
  courseData.splice(indexToDelete, 1); 
  res.json(courseData);
});
app.put('/update/:index', (req, res) => {
  const indexToUpdate = req.params.index;
  const updatedData = req.body;
  console.log (updatedData);
  courseData[indexToUpdate] = updatedData;
  res.json(courseData);  
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
