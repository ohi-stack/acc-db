export const initDB = () => {
  console.log('ACC DB initialized');
};

if (require.main === module) {
  initDB();
}