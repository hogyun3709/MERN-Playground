module.exports = (survey) => {
 return `
  <html>
    <body>
      <div style="text-align: center";>
        <h2>Hello!</h2>
        <p>${survey.body}</p>
        <div>
          <a href="http://localhost:3000">Yes</a>
        </div>
        <div>
          <a href="http://localhost:3000">No</a>
        </div>
      </div>
    </body>
  </html>
 `;
}
