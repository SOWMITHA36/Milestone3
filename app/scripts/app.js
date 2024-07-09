document.addEventListener('DOMContentLoaded', () => {
  var client;

  init();

  async function init() {
      client = await app.initialized();
      client.events.on('app.activated', renderGravatar);
  }

  async function renderGravatar() {
      const contactData = await client.data.get('contact');
      const { contact: { email } } = contactData;

      const hashedEmail = CryptoJS.MD5(email.trim().toLowerCase()).toString();
      const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}`;

      document.getElementById('gravatar-image').src = gravatarUrl;
  }
});
