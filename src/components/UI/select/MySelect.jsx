import React from 'react';

const MySelect = ({options, defaltValue, value, onChange}) => {

    return (
        <select
            className="form-select"
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option value="">{defaltValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;