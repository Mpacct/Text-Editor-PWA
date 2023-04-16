const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    // Stores the triggered events
    window.deferredPrompt = event;

    // Removes the hidden class
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    // Reset the deferred prompt variable
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {

    window.deferredPrompt = null;
});
