import React from 'react'
import Route from 'react-router-dom/Route';
import Table from './table';

export default (
    <div>
        
        <Route exact path="/api/getPDF" component={Table} />
    </div>
);