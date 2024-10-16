import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import DscTable from './DscTable';
import BankTable from './BankTable';
import ClientTable from './ClientTable';  // Import ClientTable
import FiltersDrawer from './FiltersDrawer';
import Typography from '@mui/material/Typography';

function App() {
  const [showDsc, setShowDsc] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [showClient, setShowClient] = useState(false);  // State for ClientTable
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(null);

  const handleShowDsc = () => {
    setShowDsc(true);
    setShowBank(false);
    setShowClient(false);  // Hide ClientTable
    setFiltersOpen(false);
  };

  const handleShowBank = () => {
    setShowDsc(false);
    setShowBank(true);
    setShowClient(false);  // Hide ClientTable
    setFiltersOpen(false);
  };

  const handleShowClient = () => {
    setShowDsc(false);
    setShowBank(false);
    setShowClient(true);  // Show ClientTable
    setFiltersOpen(false);
  };

  const handleOpenFilters = () => {
    setFiltersOpen(true);
  };

  const handleCloseFilters = () => {
    setFiltersOpen(false);
  };

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setShowBank(true);
    setFiltersOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', marginTop: '100px' }}>
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar 
          onDscClick={handleShowDsc} 
          onBankClick={handleShowBank} 
          onClientClick={handleShowClient}  // Pass the handler for ClientTable
          onOpenFilters={handleOpenFilters} 
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginLeft: '240px',
            padding: 2,
            height: 'calc(100vh - 64px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
          }}
        >
          <Box>
            <Typography variant="h4" color={'#4a148c'}>
              Welcome to the Report Generation System
            </Typography>
            <Typography variant="body1" color={'black'}>
              Select a report type from the left menu to begin.
            </Typography>
          </Box>
          {showDsc && <DscTable />}
          {showBank && <BankTable filters={filters} />}
          {showClient && <ClientTable />}  {/* Render ClientTable */}
        </Box>
        <FiltersDrawer
          open={filtersOpen}
          onClose={handleCloseFilters}
          onApplyFilters={handleApplyFilters}
        />
      </Box>
    </Box>
  );
}

export default App;
