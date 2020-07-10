import { Application, HttpError, Status } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

//Static serving
app.use(async (ctx) => {
    await ctx.send({
        root: `${Deno.cwd()}`,
        index: 'index.html',
    });
});
  
app.addEventListener('listen', ({hostname, port}) => {
    console.log(`Serving ${Deno.cwd()}`);
    console.log(`Start listening on ${hostname}:${port}`);
});

await app.listen({hostname: "0.0.0.0", port: 8000 });