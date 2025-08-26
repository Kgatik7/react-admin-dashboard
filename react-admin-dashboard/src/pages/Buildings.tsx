import React, { useState, useEffect, ChangeEvent } from 'react';
import { FaPlus, FaTrash, FaSearch } from 'react-icons/fa';

type Building = {
  id: string;
  name: string;
  type: string;
  locations: number;
  privis: number;
  lastUpdate: string;
};

type FormData = {
  buildingName: string;
  subIdentification: string;
  description: string;
  category: string[];
  facilities: string[];
};

const BuildingsPage = () => {
  const [currentPage, setCurrentPage] = useState<'table' | 'form'>('table');
  const [buildings, setBuildings] = useState<Building[]>([
    { id: '01', name: 'Building 10', type: 'General Enquiries', locations: 3, privis: 12, lastUpdate: '12-04-2025 15:24' },
    { id: '02', name: 'Building 7', type: 'Multipurpose Hall', locations: 6, privis: 9, lastUpdate: '12-04-2025 15:24' },
    { id: '03', name: 'Building 6', type: 'Lecture Hall', locations: 4, privis: 23, lastUpdate: '12-04-2025 15:24' },
    { id: '04', name: 'Old Gate', type: 'Entrance', locations: 1, privis: 16, lastUpdate: '12-04-2025 15:24' }
  ]);
  const [formData, setFormData] = useState<FormData>({
    buildingName: '',
    subIdentification: '',
    description: '',
    category: [],
    facilities: []
  });

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(savedPage as 'table' | 'form');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const handleCategoryChange = (category: string) => {
    setFormData(prev => {
      const newCategory = prev.category.includes(category)
        ? prev.category.filter(item => item !== category)
        : [...prev.category, category];
      return { ...prev, category: newCategory };
    });
  };

  const handleFacilityChange = (facility: string) => {
    setFormData(prev => {
      const newFacilities = prev.facilities.includes(facility)
        ? prev.facilities.filter(item => item !== facility)
        : [...prev.facilities, facility];
      return { ...prev, facilities: newFacilities };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Building added successfully!');
    setCurrentPage('table');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderTablePage = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Buildings</h1>
      </div>
      <div style={styles.subHeader}>
        <h2 style={styles.subTitle}>Buildings</h2>
        <p style={styles.notice}>- 2 new buildings this month</p>
      </div>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeaderRow}>
              <th style={styles.tableHeader}>#</th>
              <th style={styles.tableHeader}>BUILDING</th>
              <th style={styles.tableHeader}>BUILDING TYPE</th>
              <th style={styles.tableHeader}># OF LOCATIONS</th>
              <th style={styles.tableHeader}># OF PATHS CONNECTED</th>
              <th style={styles.tableHeader}>LAST UPDATE</th>
              <th style={styles.tableHeader}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {buildings.map(building => (
              <tr key={building.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{building.id}</td>
                <td style={styles.tableCell}>{building.name}</td>
                <td style={styles.tableCell}>{building.type}</td>
                <td style={styles.tableCell}>{building.locations}</td>
                <td style={styles.tableCell}>{building.privis}</td>
                <td style={styles.tableCell}>{building.lastUpdate}</td>
                <td style={styles.tableCell}>
                  <div style={styles.actionButtons}>
                    <button style={styles.iconButton}><FaPlus style={styles.icon} /></button>
                    <button style={styles.iconButton}><FaSearch style={styles.icon} /></button>
                    <button style={styles.iconButton}><FaTrash style={styles.icon} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={styles.addButtonContainer}>
        <button
          style={styles.addButton}
          onClick={() => setCurrentPage('form')}
        >
          ADD
        </button>
      </div>
    </div>
  );

  const renderFormPage = () => (
    <div style={styles.container}>
      <div style={styles.adminHeader}>
        <h1 style={styles.mainTitle}>Add Building</h1>
      </div>
      <div style={styles.section}>
        <div style={styles.subSection}>
          <h2 style={styles.subSectionTitle}>Building</h2>
          <div style={styles.inputGroupRow}>
            <input
              type="text"
              name="buildingName"
              value={formData.buildingName}
              onChange={handleInputChange}
              placeholder="Building"
              style={styles.input}
            />
            <input
              type="text"
              name="subIdentification"
              value={formData.subIdentification}
              onChange={handleInputChange}
              placeholder="Sub-identification (optional)"
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.subSection}>
          <h2 style={styles.subSectionTitle}>Describe the building</h2>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe the purpose/function of the building..."
            style={styles.textarea}
          />
        </div>
        <div style={styles.subSection}>
          <h2 style={styles.subSectionTitle}>Category/Building Type</h2>
          <div style={styles.checkboxGroupHorizontal}>
            {['Food', 'General Enquiries', 'Offices', 'Lecture Hall', 'Library'].map(category => (
              <label key={category} style={styles.checkboxLabelHorizontal}>
                <input
                  type="radio"
                  name="category"
                  checked={formData.category.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  style={styles.radio}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        <div style={styles.subSection}>
          <h2 style={styles.subSectionTitle}>Facilities</h2>
          <div style={styles.checkboxGroupHorizontal}>
            {['Toilet', 'Wifi', 'Kitchen'].map(facility => (
              <label key={facility} style={styles.checkboxLabelHorizontal}>
                <input
                  type="checkbox"
                  checked={formData.facilities.includes(facility)}
                  onChange={() => handleFacilityChange(facility)}
                  style={styles.checkbox}
                />
                {facility}
              </label>
            ))}
          </div>
        </div>
        <div style={styles.subSection}>
          <h2 style={styles.subSectionTitle}>Images</h2>
          <button type="button" style={styles.imageButton}>Add</button>
        </div>
      </div>
      <div style={styles.formActionButtons}>
        <button type="button" style={styles.goBackButton} onClick={() => setCurrentPage('table')}>Go Back</button>
        <button type="submit" style={styles.submitButton} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );

  return currentPage === 'table' ? renderTablePage() : renderFormPage();
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: '20px',
    backgroundColor: '#fff',
    color: '#000',
    minHeight: '100vh',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '10px',
    padding: '10px',
    border: '2px solid #002366',
    borderRadius: '20px',
    backgroundColor: '#0B4D57',
    textAlign: 'center' as const,
  },
  adminHeader: {
    marginBottom: '10px',
    padding: '10px',
    border: '2px solid #002366',
    borderRadius: '20px',
    backgroundColor: '#0B4D57',
    textAlign: 'center' as const,
  },
  mainTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
    color: '#FFFFFF',
  },
  appTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '5px 0',
    color: '#000',
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '5px 10px',
    backgroundColor: '#fff', // Removed border, kept background
  },
  subTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 10px 0 0',
    color: '#000',
  },
  notice: {
    fontSize: '14px',
    margin: '0',
    color: '#000',
  },
  tableContainer: {
    marginBottom: '20px',
    overflowX: 'auto' as const,
    backgroundColor: '#fff', // Removed border
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '14px',
    backgroundColor: '#fff', // Removed border
  },
  tableHeaderRow: {
    backgroundColor: '#e6e6e6',
  },
  tableHeader: {
    padding: '12px',
    textAlign: 'left' as const,
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#000',
    borderBottom: '1px solid #ddd', // Simplified border
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '12px',
    fontSize: '14px',
    color: '#000',
  },
  actionButtons: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '14px',
    color: '#000',
  },
  addButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#fff', // Removed border
  },
  addButton: {
    backgroundColor: '#0b5aafff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
  },
  section: {
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#f0f8ff', // Removed border
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 15px 0',
    color: '#000',
    paddingBottom: '5px',
    borderBottom: '2px solid #000',
  },
  subSection: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff', // Removed border
  },
  subSectionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    color: '#000',
  },
  inputGroupRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
    backgroundColor: '#fff', // Removed border
  },
  input: {
    width: '50%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    fontSize: '14px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
    fontSize: '14px',
  },
  checkboxGroupHorizontal: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap' as const,
    backgroundColor: '#fff', // Removed border
  },
  checkboxLabelHorizontal: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  checkbox: {
    cursor: 'pointer',
  },
  radio: {
    cursor: 'pointer',
  },
  imageButton: {
    backgroundColor: '#9681f3ff',
    color: '#fff',
    border: 'none',
    padding: '8px 15px',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius: '4px',
  },
  formActionButtons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'flex-end',
    backgroundColor: '#fff', // Removed border
  },
  goBackButton: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    padding: '10px 25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
  },
  submitButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
  },
};

export default BuildingsPage;