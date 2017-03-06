To fully enjoy this demo, you should either:
- Run `webpack` ahead of time so that it generates `wwwroot/dist/app.js`, which is statically served (for Production).
- Define `set ASPNETCORE_ENVIRONMENT=Development` and then run `dotnet watch run`, so that the Webpack middleware is running and generates `app.js` on the fly (for Development).