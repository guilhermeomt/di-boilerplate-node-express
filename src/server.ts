import { AppBootstrap } from './app';

const app = new AppBootstrap();

try {
  app.server.build().listen(app.port, () => {
    console.log(`Server is running on port ${app.port}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}

process.on('unhandledRejection', (err: Error) => {
  console.error(`Unhandled Rejection Error: ${err.message}`);
});
