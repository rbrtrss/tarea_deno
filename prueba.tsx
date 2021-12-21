// @deno-types="https://deno.land/x/servest/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest/mod.ts";

const app = createApp();
let colores = ['red', 'blue', 'green'];
app.handle("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>
          {colorForm()}
          {renderList()}
        </body>
      </html>,
    ),
  });

  function colorForm() {
    return <form>
        <fieldset>
        <legend>Title:</legend>
        <select>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="white">White</option>
        </select><br />
        <button type="submit">Submit</button>
        </fieldset>
    </form>;
  }

    function renderList() {
      let rendered = [];
      for (let i=0; i < colores.length; ++i) {
        rendered.push(<li><p>{colores[i]}</p></li>)
      }
      return <ul>
        {rendered}
      </ul>
    }      
      
  
});
app.listen({ port: 8888 });


