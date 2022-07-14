export const storageService = {
  query,
  save,
};

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  return new Promise((resolve) => {
    resolve(entities);
  });
}

function save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
