import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "All",
        };
    }

    handleSearch = (event) => {
        this.setState({ search: event.target.value });
    };

    handleFilterChange = (event) => {
        this.setState({ type: event.target.value });
    };

    filterItems() {
        let items = this.props.items;

        items = items.filter((item) => 
          item.name.toLowerCase().includes(this.state.search.toLowerCase())
        );

        if (this.state.type !== "All") {
            items = items.filter((item) => item.type === this.state.type);
        }

        return items;
    }

    render() {
        return (
            <div className="filtered-list-box">
                <h2>Product Search</h2>

                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.handleSearch}
                />

                <label className="dropdown-label">Filter by type:</label>
                <select
                    className="form-control"
                    style={{ width: "200px", display: "inline-block" }}
                    onChange={this.handleFilterChange}
                    value={this.state.type}
                >
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>

                <List items={this.filterItems()} />
            </div>
        );
    }
}

export default FilteredList;