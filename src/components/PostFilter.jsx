import React from 'react';
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div className="row">
            <hr/>
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="search-field">
                    <input className="form-control"
                           value={filter.query}
                           onChange={e=> setFilter({...filter, query: e.target.value})}
                           placeholder="Search..."
                    ></input>
                </div>
                <div className="sort-block">
                    <div>Sort:</div>
                    <MySelect
                        value={filter.sort}
                        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                        defaltValue="Open this select menu"
                        options={[
                            {value: 'title', name: 'By name'},
                            {value: 'content', name: 'By content'}
                        ]}
                    />
                </div>
            </div>
            <div className="col-md-1"></div>
            <hr/>
        </div>
    );
};

export default PostFilter;