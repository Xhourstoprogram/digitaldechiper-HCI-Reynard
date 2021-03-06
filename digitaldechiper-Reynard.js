function getMessageEncoding() {
    const messageBox = document.querySelector(".rsa-oaep #message");
    let message = messageBox.value;
    let enc = new TextEncoder();
    return enc.encode(message);
  }
  
  function encryptMessage(publicKey) {
    let encoded = getMessageEncoding();
    return window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP"
      },
      publicKey,
      encoded
    );
  }