// import React, { useEffect, useState } from 'react';
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
//   Box, Button, TextField, Drawer, Typography, MenuItem, Select, InputLabel, FormControl
// } from '@mui/material';
// import axios from 'axios';

// const BankTable = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({});
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [page, setPage] = useState(1);
//   const [rowsPerPage] = useState(10); // Set rows per page
//   const [bank, setBank] = useState('');
//   const [branch, setBranch] = useState('');
//   const [status, setStatus] = useState(''); // State to store selected status
//   const [banks, setBanks] = useState([]);
//   const [statusOptions] = useState(['Completed', 'Pending', 'Processing']); // Array of status options

//   useEffect(() => {
//     fetch('http://localhost:8080/api/bank')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     const fetchBanks = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/bank');
//         setBanks(response.data);
//         console.log(response.data); // Log the fetched data for debugging
//       } catch (error) {
//         console.error('Error fetching banks:', error);
//       }
//     };

//     fetchBanks();
//   }, []);

//   const handleOpenDrawer = () => {
//     setDrawerOpen(true);
//   };

//   const handleCloseDrawer = () => {
//     setDrawerOpen(false);
//   };

//   const handleApplyFilters = (newFilters) => {
//     setFilters(newFilters);
//     handleCloseDrawer();
//   };

//   const handleBankChange = (event) => {
//     setBank(event.target.value);
//   };

//   const handleBranchChange = (event) => {
//     setBranch(event.target.value);
//   };

//   const handleStatusChange = (event) => {
//     setStatus(event.target.value);
//   };

//   const handleApplyFiltersInternal = () => {
//     handleApplyFilters({ bank, branch, status });
//   };

//   const handleClearFilters = () => {
//     setBank('');
//     setBranch('');
//     setStatus('');
//     handleApplyFilters({ bank: '', branch: '', status: '' });
//   };

//   const filteredData = data.filter(row => {
//     const matchesSearch = Object.values(row).some(value =>
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const matchesBank = filters.bank ? row.bankName === filters.bank : true;
//     const matchesBranch = filters.branch ? row.branch === filters.branch : true;
//     const matchesStatus = filters.status ? row.status === filters.status : true;

//     return matchesSearch && matchesBank && matchesBranch && matchesStatus;
//   });

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   // Slice data based on current page and rows per page
//   const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

//   // Handle previous page
//   const handlePreviousPage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   // Handle next page
//   const handleNextPage = () => {
//     if (page < totalPages) {
//       setPage(page + 1);
//     }
//   };

//   return (
//     <Box sx={{ width: '100%', marginTop: 4 }}>
//       <Box sx={{ marginBottom: 2, boxShadow: "2px 2px 10px lightgrey", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", height:"80px" }}>
//         <h2 style={{ marginLeft: "30px", color: '#4a148c' }}>Bank Channel</h2>
//         <TextField
//           label="Search"
//           variant="outlined"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           sx={{ marginRight: "30px" }}
//         />
//       </Box>
//       <Button variant="contained" color="error" onClick={handleOpenDrawer} sx={{ marginTop: 2 }}>
//         Open Filters
//       </Button>
//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleCloseDrawer}
//         sx={{ '& .MuiDrawer-paper': { width: 400, padding: 2, marginTop: '70px' }}}
//       >
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button
//               sx={{
//                 height: '40px',
//                 width: '60px',
//                 borderTopLeftRadius: '40%',
//                 borderBottomLeftRadius: '40%',
//               }}
//               variant="contained"
//               color="error"
//               onClick={handleCloseDrawer}
//             >
//               Close
//             </Button>
//             <Typography variant="h4" sx={{ marginLeft: 2, color: '#4a148c' }}>
//               Filters
//             </Typography>
//           </Box>

//           <FormControl variant="outlined" fullWidth>
//             <InputLabel id="bank-label">Bank</InputLabel>
//             <Select
//               labelId="bank-label"
//               value={bank}
//               onChange={handleBankChange}
//               label="Bank"
//             >
//               {banks.map((bank) => (
//                 <MenuItem key={bank.id} value={bank.bankName}>
//                   {bank.bankName}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <FormControl variant="outlined" fullWidth>
//             <InputLabel id="branch-label">Branches</InputLabel>
//             <Select
//               labelId="branch-label"
//               value={branch}
//               onChange={handleBranchChange}
//               label="Branches"
//             >
//               {banks.map((bank) => (
//                 <MenuItem key={bank.id} value={bank.branch}>
//                   {bank.branch}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <FormControl variant="outlined" fullWidth>
//             <InputLabel id="status-label">Status</InputLabel>
//             <Select
//               labelId="status-label"
//               value={status}
//               onChange={handleStatusChange}
//               label="Status"
//             >
//               {statusOptions.map((status) => (
//                 <MenuItem key={status} value={status}>
//                   {status}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
//             <TextField
//               label="From Date"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               variant="outlined"
//               fullWidth
//             />
//             <TextField
//               label="To Date"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               variant="outlined"
//               fullWidth
//             />
//           </Box>

//           <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
//             <Button variant="contained" color="success" onClick={handleApplyFiltersInternal}>
//               Apply Filters
//             </Button>
//             <Button variant="contained" color="error" onClick={handleClearFilters}>
//               Clear Filters
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>

//       <TableContainer component={Paper} sx={{ marginTop: 2 }}>
//         <Table aria-label="bank table">
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Bank Name</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>State</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>City</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Branch</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Branch Manager Name</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Registration Date</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Email ID</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Contact Number</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Status</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedData.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell>{row.bankName}</TableCell>
//                 <TableCell>{row.state}</TableCell>
//                 <TableCell>{row.city}</TableCell>
//                 <TableCell>{row.branch}</TableCell>
//                 <TableCell>{row.branchManagerName}</TableCell>
//                 <TableCell>{row.registrationDate}</TableCell>
//                 <TableCell>{row.emailId}</TableCell>
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

// export default BankTable;

import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Box, Button, TextField, Drawer, Typography, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import bankData from './bankData.json'; // Importing the JSON data

const BankTable = () => {
  const [data, setData] = useState(bankData); // Using JSON data
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [bank, setBank] = useState('');
  const [branch, setBranch] = useState('');
  const [status, setStatus] = useState('');
  const [statusOptions] = useState(['Completed', 'Pending', 'Processing']);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    handleCloseDrawer();
  };

  const handleBankChange = (event) => {
    setBank(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleApplyFiltersInternal = () => {
    handleApplyFilters({ bank, branch, status });
  };

  const handleClearFilters = () => {
    setBank('');
    setBranch('');
    setStatus('');
    handleApplyFilters({ bank: '', branch: '', status: '' });
  };

  const filteredData = data.filter(row => {
    const matchesSearch = Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    const matchesBank = filters.bank ? row["Bank Name"] === filters.bank : true;
    const matchesBranch = filters.branch ? row.Branch === filters.branch : true;
    const matchesStatus = filters.status ? row.status === filters.status : true;

    return matchesSearch && matchesBank && matchesBranch && matchesStatus;
  });

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
        <h2 style={{ marginLeft: "30px", color: '#4a148c' }}>Bank Channel</h2>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ marginRight: "30px" }}
        />
      </Box>
      <Button variant="contained" color="error" onClick={handleOpenDrawer} sx={{ marginTop: 2 }}>
        Open Filters
      </Button>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        sx={{ '& .MuiDrawer-paper': { width: 400, padding: 2, marginTop: '70px' }}}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              sx={{
                height: '40px',
                width: '60px',
                borderTopLeftRadius: '40%',
                borderBottomLeftRadius: '40%',
              }}
              variant="contained"
              color="error"
              onClick={handleCloseDrawer}
            >
              Close
            </Button>
            <Typography variant="h4" sx={{ marginLeft: 2, color: '#4a148c' }}>
              Filters
            </Typography>
          </Box>

          <FormControl variant="outlined" fullWidth>
            <InputLabel id="bank-label">Bank</InputLabel>
            <Select
              labelId="bank-label"
              value={bank}
              onChange={handleBankChange}
              label="Bank"
            >
              {bankData.map((bank, index) => (
                <MenuItem key={index} value={bank["Bank Name"]}>
                  {bank["Bank Name"]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel id="branch-label">Branches</InputLabel>
            <Select
              labelId="branch-label"
              value={branch}
              onChange={handleBranchChange}
              label="Branches"
            >
              {bankData.map((bank, index) => (
                <MenuItem key={index} value={bank.Branch}>
                  {bank.Branch}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={status}
              onChange={handleStatusChange}
              label="Status"
            >
              {statusOptions.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <TextField
              label="From Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="To Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="contained" onClick={handleApplyFiltersInternal}>
              Apply Filters
            </Button>
            <Button variant="outlined" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          </Box>
        </Box>
      </Drawer>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
          <TableRow>
               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Bank Name</TableCell>
               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>State</TableCell>
               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>City</TableCell>
               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Branch</TableCell>
               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Branch Manager Name</TableCell>
               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Registration Date</TableCell>
               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Email ID</TableCell>
               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Contact Number</TableCell>
               <TableCell sx={{ fontWeight: 'bold', color:'#4a148c' }}>Status</TableCell>
             </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row["Bank Name"]}</TableCell>
                <TableCell>{row.State}</TableCell>
                <TableCell>{row.City}</TableCell>
                <TableCell>{row.Branch}</TableCell>
                <TableCell>{row["Branch Manager Name"]}</TableCell>
                <TableCell>{row.RegistrationDate}</TableCell>
                <TableCell>{row["Email ID"]}</TableCell>
                <TableCell>{row["Contact Number"]}</TableCell>
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

export default BankTable;
