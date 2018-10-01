
export default ({ body,title,initialState = {} }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      <script>
      window.__STATE__ = ${JSON.stringify(initialState)}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="../../app/public/index.css" />
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      
      <script type="text/babel" src="/assets/bundle.js"></script>
    </html>
  `;
};