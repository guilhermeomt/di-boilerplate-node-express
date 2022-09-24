import server from './app';

const PORT = process.env.PORT || 3001;

try {
  server.listen(PORT, (): void => {
    console.log(`Server running successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}

process.on('unhandledRejection', (err: Error) => {
  console.error(`Unhandled Rejection Error: ${err.message}`);
});
