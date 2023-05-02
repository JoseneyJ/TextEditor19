import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Added a logic to a method that accepts some content and adds it to the database
// Export a function we will use to PUT to the database.
export const putDb = async (content) => {
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  await store.put({ id: 1, value: content });
  await tx.complete;
  console.log("Content added to jate database");
};

// Added a logic for a method that gets all the content from the database
// Export a function we will use to GET to the database.
export const getDb = async () => {
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const content = await store.get(1);
  await tx.complete;
  console.log("Content retrieved from jate database");
  return content;
};

// Start the database.
initdb();
