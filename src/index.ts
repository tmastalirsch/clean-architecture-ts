import Application from './core/Application';

(async () => {
  const app = await Application.init();
  app.resolve();
  app.listen();
})();
