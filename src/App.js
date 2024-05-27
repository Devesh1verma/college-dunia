import React, { useState, useEffect, useCallback } from 'react';
import collegesData from './colleges.json';
import CollegeTable from './components/CollegeTable';
import SearchAndSort from './components/SearchAndSort';
import './App.css';

const App = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'ranking', direction: 'ascending' });
  const [hasMore, setHasMore] = useState(true);

  const loadMoreColleges = useCallback(() => {
    setTimeout(() => {
      setColleges(prev => {
        const startIndex = prev.length;
        const newColleges = collegesData.slice(startIndex, startIndex + 10);
        setHasMore(newColleges.length === 10); // Update hasMore state
        return [...prev, ...newColleges];
      });
    }, 500);
  }, [collegesData]);
  

  useEffect(() => {
    loadMoreColleges();
  }, [loadMoreColleges]);

  const handleSearch = (term) => setSearchTerm(term.toLowerCase());

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedColleges = [...colleges]
    .filter(college => college.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

  return (
    <div>
      <SearchAndSort onSearch={handleSearch} onSort={handleSort} />
      <CollegeTable colleges={sortedColleges} loadMore={loadMoreColleges} hasMore={hasMore} />
    </div>
  );
};

export default App;
