import React from 'react';
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div className="row">
            <hr/>
            <div className="col-md-12">
                <div className="search-field">
                    <input className="form-control"
                           value={filter.query}
                           onChange={e=> setFilter({...filter, query: e.target.value})}
                           placeholder="Search..."
                    ></input>
                </div>
                <div className="sort-block">
                    <MySelect
                        value={filter.sort}
                        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                        defaltValue="Sort by:"
                        options={[
                            {value: 'title', name: 'name'},
                            {value: 'body', name: 'content'}
                        ]}
                    />
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default PostFilter;