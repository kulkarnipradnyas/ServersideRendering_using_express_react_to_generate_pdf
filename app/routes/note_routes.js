const pdf = require('html-pdf');
import ReactDOMServer,{ renderToString } from 'react-dom/server';
import React from 'react';
import template from '../react/template.js'
import routes from '../react/routes.js'
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux'
import store from '../react/store'

var config = {
    "format": "Letter",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "orientation": "portrait", // portrait or landscape
    paginationOffset: 1,       // Override the initial pagination number
    "header": {
      "height": "15mm",
      "contents": '<div style="text-align: center;" color="red";>Page Header</div>'
    },
    "footer": {
      "height": "15mm",
      "contents": {
        // first: 'Cover page',
        // 2: 'Second page', // Any page number is working. 1-based index
        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        last: 'Last Page'
      }
    }
  }

module.exports = function(app) {
    app.post('/api/getPDF', (req,res) => {
      let context = {};
      let appString = ReactDOMServer.renderToString(
        <Provider store={store} >
        <StaticRouter
            location={req.url}
            context={context}
        >
            {routes}
        </StaticRouter>
        </Provider>
    );

        var html =template({
          body:appString ,
          title: 'Hello World from the server'
        })
        console.log(html)
        pdf.create( html, config).toFile('./sampleReport.pdf', function(err, res) {
            if (err) return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
        });
        res.status(200);
        res.send({'msg': template({
          body: 'appString',
          title: 'Hello World from the server'
        })});
    });
};
