import { useState, useEffect } from 'react';
import { generateData } from './mockData';

const LegacyTable = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    const rawData = generateData();
    setData(rawData);
    setFilteredData(rawData);
  }, []);

  useEffect(() => {
    const result = data.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(result);
  }, [search, data]);

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
          Słowa Kluczowe ({filteredData.length} z {data.length})
        </h2>
        
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Wyszukaj słowo kluczowe..."
          style={{ 
            padding: '10px', 
            width: '100%', 
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 120px 80px',
        padding: '12px',
        background: '#f9fafb',
        fontWeight: '600',
        fontSize: '12px',
        color: '#6b7280',
        borderBottom: '2px solid #e5e7eb'
      }}>
        <div>SŁOWO KLUCZOWE</div>
        <div style={{ textAlign: 'right' }}>WARTOŚĆ</div>
        <div style={{ textAlign: 'center' }}>STATUS</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {filteredData.map((item, index) => (
          <div 
            key={index}
            style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 120px 80px',
              padding: '12px', 
              background: index % 2 === 0 ? '#ffffff' : '#f9fafb',
              borderBottom: '1px solid #e5e7eb',
              alignItems: 'center'
            }}
          >
            <div style={{ fontSize: '14px', color: '#111827' }}>
              {item.name}
            </div>
            <div style={{ 
              textAlign: 'right', 
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151'
            }}>
              {item.value.toFixed(2)}
            </div>
            <div style={{ 
              display: 'flex',
              justifyContent: 'center'
            }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
                background: item.status === 'active' ? '#d1fae5' : '#fee2e2',
                color: item.status === 'active' ? '#065f46' : '#991b1b'
              }}>
                {item.status === 'active' ? 'Aktywny' : 'Wstrzymany'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegacyTable;

