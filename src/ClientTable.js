// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, TextField } from '@mui/material';

// const ClientTable = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [page, setPage] = useState(1);
//   const [rowsPerPage] = useState(10);

//   useEffect(() => {
//     fetch('http://localhost:8080/api/clients')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setData(data);
//         } else {
//           console.error("API returned data that is not an array");
//         }
//       })
//       .catch((error) => {
//         console.error('Failed to fetch data:', error);
//       });
//   }, []);

//   const handlePreviousPage = () => {
//     setPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const filteredData = data.filter((client) =>
//     Object.values(client).some(value =>
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   const paginatedData = filteredData.slice(
//     (page - 1) * rowsPerPage,
//     page * rowsPerPage
//   );

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   return (
//     <Box sx={{ width: '100%', marginTop: 4 }}>
//       <Box sx={{ marginBottom: 2, boxShadow: "2px 2px 10px lightgrey", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", height: "80px" }}>
//         <h2 style={{ marginLeft: "30px", color: '#4a148c' }}>Client Reports</h2>
//         <TextField
//           label="Search"
//           variant="outlined"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           sx={{ marginRight: "30px" }}
//         />
//       </Box>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Source</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Name</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Father Name</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Mother Name</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Gender</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Mobile Number</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Email</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Address</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Date of Birth</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Total Amount</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Status</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedData.map((client, index) => (
//               <TableRow key={index}>
//                 <TableCell>{client.source}</TableCell>
//                 <TableCell>{client.name}</TableCell>
//                 <TableCell>{client.fatherName}</TableCell>
//                 <TableCell>{client.motherName}</TableCell>
//                 <TableCell>{client.gender}</TableCell>
//                 <TableCell>{client.mobileNumber}</TableCell>
//                 <TableCell>{client.email}</TableCell>
//                 <TableCell>{client.address}</TableCell>
//                 <TableCell>{client.dateOfBirth}</TableCell>
//                 <TableCell>{client.totalAmount}</TableCell>
//                 <TableCell>{client.status}</TableCell>
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
//         <Box sx={{ marginX: 1, backgroundColor: '#c62828', width: '50px', height: '30px', textAlign: 'center', color: 'white' }}>
//           {page}
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

// export default ClientTable;


import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, TextField } from '@mui/material';
import Client from './Client.json'; // Import the JSON file

const ClientTable = () => {
  const [data] = useState(Client); // Use the imported data
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const filteredData = data.filter((client) =>
    Object.values(client).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <Box sx={{ width: '100%', marginTop: 4 }}>
      <Box sx={{ marginBottom: 2, boxShadow: "2px 2px 10px lightgrey", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", height: "80px" }}>
        <h2 style={{ marginLeft: "30px", color: '#4a148c' }}>Client Reports</h2>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ marginRight: "30px" }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Source</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Father Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Mother Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Gender</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Mobile Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Address</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Date of Birth</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Total Amount</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4a148c' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((client, index) => (
              <TableRow key={index}>
                <TableCell>{client.source}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.fatherName}</TableCell>
                <TableCell>{client.motherName}</TableCell>
                <TableCell>{client.gender}</TableCell>
                <TableCell>{client.mobileNumber}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.address}</TableCell>
                <TableCell>{client.dateOfBirth}</TableCell>
                <TableCell>{client.totalAmount}</TableCell>
                <TableCell>{client.status}</TableCell>
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
        <Box sx={{ marginX: 1, backgroundColor: '#c62828', width: '50px', height: '30px', textAlign: 'center', color: 'white' }}>
          {page}
        </Box>
        <Button
          onClick={handleNextPage}
          sx={{ color: '#0E3B64', backgroundColor: 'whitesmoke', marginRight: '8px', textTransform: 'capitalize' }}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ClientTable;
