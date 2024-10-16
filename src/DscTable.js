// import React, { useEffect, useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, TextField } from '@mui/material';

// const DscTable = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [page, setPage] = useState(1);
//   const [rowsPerPage] = useState(10);

//   useEffect(() => {
//     fetch('http://localhost:8080/api/dsc')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const filteredData = data.filter(row =>
//     Object.values(row).some(value =>
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

//   const handlePreviousPage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (page < totalPages) {
//       setPage(page + 1);
//     }
//   };

//   return (
//     <Box sx={{ width: '100%', marginTop: 4 }}>
//       <Box sx={{ marginBottom: 2, boxShadow: "2px 2px 10px lightgrey", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", height:"80px" }}>
//         <h2 style={{marginLeft:"30px", color:'#4a148c'}}>DSC Channel</h2>
//         <TextField
//           label="Search"
//           variant="outlined"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           sx={{ marginRight: "30px" }}
//         />
//       </Box>
//       <TableContainer component={Paper} sx={{ marginTop: 2 }}>
//         <Table aria-label="dsc table">
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Name of the DSC</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>State</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>City</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Area</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Name of the Authorised Person</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Registration Date</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Email</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Contact Number</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Status</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedData.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell>{row.nameOfDsc}</TableCell>
//                 <TableCell>{row.state}</TableCell>
//                 <TableCell>{row.city}</TableCell>
//                 <TableCell>{row.area}</TableCell>
//                 <TableCell>{row.nameOfAuthorizedPerson}</TableCell>
//                 <TableCell>{row.registrationDate}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//                 <TableCell>{row.contactNumber}</TableCell>
//                 <TableCell>{row.status}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 2 }}>
//         <Button
//           onClick={handlePreviousPage}
//           sx={{ color: '#0E3B64', backgroundColor: 'whitesmoke', marginRight: '8px', textTransform: 'capitalize' }}
//           disabled={page === 1}
//         >
//           Previous
//         </Button>
//         <Box sx={{ marginX: 1, backgroundColor:'#c62828', width:'50px', height:'30px', textAlign:'center', color:'white'}}>
//            {page}
//         </Box>
//         <Button
//           onClick={handleNextPage}
//           sx={{ color: '#0E3B64', backgroundColor: 'whitesmoke', marginRight: '8px', textTransform: 'capitalize' }}
//           disabled={page === totalPages}
//         >
//           Next
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default DscTable;



import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, TextField } from '@mui/material';
import dscData from './dscData.json'; // Importing the JSON data

const DscTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    // Set the JSON data on component mount
    setData(dscData);
  }, []);

  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Box sx={{ width: '100%', marginTop: 4 }}>
      <Box sx={{ marginBottom: 2, boxShadow: "2px 2px 10px lightgrey", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", height:"80px" }}>
        <h2 style={{marginLeft:"30px", color:'#4a148c'}}>DSC Channel</h2>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ marginRight: "30px" }}
        />
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table aria-label="dsc table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Name of the DSC</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>State</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>City</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Area</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Name of the Authorised Person</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Registration Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Contact Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.nameOfDsc}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.area}</TableCell>
                <TableCell>{row.nameOfAuthorizedPerson}</TableCell>
                <TableCell>{row.registrationDate}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.contactNumber}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 2 }}>
        <Button
          onClick={handlePreviousPage}
          sx={{ color: '#0E3B64', backgroundColor: 'whitesmoke', marginRight: '8px', textTransform: 'capitalize' }}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Box sx={{ marginX: 1, backgroundColor:'#c62828', width:'50px', height:'30px', textAlign:'center', color:'white'}}>
           {page}
        </Box>
        <Button
          onClick={handleNextPage}
          sx={{ color: '#0E3B64', backgroundColor: 'whitesmoke', textTransform: 'capitalize' }}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default DscTable;
