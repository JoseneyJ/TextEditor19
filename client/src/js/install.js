// Complete
const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Added an event handler to the `beforeinstallprompt` event

window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered events
  deferredPrompt = event;
  // Remove the hidden class from the button.
  butInstall.classList.toggle("hidden", false);
});

// Implemented a click event handler on the `butInstall` element

butInstall.addEventListener("click", async () => {
  // Show the install prompt
  const promptEvent = deferredPrompt;
  if (!promptEvent) return;
  // Show prompt
  promptEvent.prompt();
  // Reset the deferred prompt variable, it can only be used once.
  deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// Added a handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("PWA installed successfully");
  // clear prompt
  deferredPrompt = null;
});
