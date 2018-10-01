# html-to-pdf-using-node

1. Install all node dependencies

`npm install`

2. Run Server

'start nodemon server.js'
#Nodemon is to live reload the changes done in code.

3. Send HTML string via POST request to generate PDF.

- `api-endpoint: localhost:8001/api/getPDF`

- post body should contain HTML string in `{ "html": "<h1>Manoj Shukla</h1>" }` JSON format.

4. PDF file will be created with name as `businesscard.pdf` inside `app` folder.

#Thank You.


---------------

# To get HTML String from React Component

    import { renderToString } from 'react-dom/server';
        
    renderString()  { // This function will return HTML String
        renderToString(<About/>)
    }
