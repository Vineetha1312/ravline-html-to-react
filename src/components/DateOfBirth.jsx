import React, { useState, useEffect } from 'react';

const DateOfBirthPicker = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [days, setDays] = useState([]);
    const [months] = useState([
        { value: 1, label: "January" },
        { value: 2, label: "February" },
        { value: 3, label: "March" },
        { value: 4, label: "April" },
        { value: 5, label: "May" },
        { value: 6, label: "June" },
        { value: 7, label: "July" },
        { value: 8, label: "August" },
        { value: 9, label: "September" },
        { value: 10, label: "October" },
        { value: 11, label: "November" },
        { value: 12, label: "December" },
    ]);
    const [years, setYears] = useState([]);

    useEffect(() => {
        // Populate days (1-31)
        setDays(Array.from({ length: 31 }, (_, i) => i + 1));

        // Populate years (current year to 1900)
        const currentYear = new Date().getFullYear();
        setYears(Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i));
    }, []);

    return (
        <div className="single-box" style={{ maxWidth: '400px',textAlign:'left' }}>
            <div className="inner-title pt-3">
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Date of Birth</h3>
            </div>
            <div className="date-box d-flex align-items-center" style={{ gap: '5px' }}>
                {/* Day Dropdown */}
                <div className="calander-data">
                    <select 
                        className="form-select"
                        style={{ width: '80px', padding: '5px', fontSize: '14px' }}
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    >
                        <option value="">Day</option>
                        {days.map((d) => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                </div>
                
                {/* Month Dropdown */}
                <div className="calander-data">
                    <select 
                        className="form-select"
                        style={{ width: '100px', padding: '5px', fontSize: '14px' }}
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    >
                        <option value="">Month</option>
                        {months.map((m) => (
                            <option key={m.value} value={m.value}>{m.label}</option>
                        ))}
                    </select>
                </div>
                
                {/* Year Dropdown */}
                <div className="calander-data">
                    <select 
                        className="form-select"
                        style={{ width: '100px', padding: '5px', fontSize: '14px' }}
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="">Year</option>
                        {years.map((y) => (
                            <option key={y} value={y}>{y}</option>
                        ))}
                    </select>
                </div>

                {/* Calendar Icon */}
                <div className="icon">
                    <img 
                        src="assets/images/icons/icon-204.png" 
                        alt="Calendar Icon" 
                        style={{ width: '20px', height: '20px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DateOfBirthPicker;
