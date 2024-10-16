import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const FiltersDrawer = ({ open, onClose, onApplyFilters }) => {
  const [bank, setBank] = useState('');
  const [branch, setBranch] = useState('');
  const [status, setStatus] = useState(''); // State to store selected status
  const [banks, setBanks] = useState([]);
  const [statusOptions] = useState(['Completed', 'Pending', 'Processing']); // Array of status options

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/bank');
        setBanks(response.data);
        console.log(response.data); // Log the fetched data for debugging
      } catch (error) {
        console.error('Error fetching banks:', error);
      }
    };

    fetchBanks();
  }, []);

  const handleBankChange = (event) => {
    setBank(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleApplyFilters = () => {
    onApplyFilters({ bank, branch, status });
    onClose();
  };

  const handleClearFilters = () => {
    setBank('');
    setBranch('');
    setStatus('');
    onApplyFilters({ bank: '', branch: '', status: '' });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
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
            onClick={onClose}
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
            {banks.map((bank) => (
              <MenuItem key={bank.id} value={bank.bankName}>
                {bank.bankName}
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
            {banks.map((bank) => (
              <MenuItem key={bank.id} value={bank.branch}>
                {bank.branch}
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

        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
          <Button variant="contained" color="success" onClick={handleApplyFilters}>
            Apply Filters
          </Button>
          <Button variant="contained" color="error" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FiltersDrawer;
