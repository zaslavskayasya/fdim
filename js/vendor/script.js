function detectDeviceAndBrowser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Проверка Android
  const androidMatch = userAgent.match(/Android\s([0-9.]*)/);
  const androidVersion = androidMatch ? androidMatch[1] : false;

  if (androidVersion) {
    console.log(`Устройство на Android, версия: ${androidVersion}`);
    if (parseFloat(androidVersion) < 8) {
      return true;
    }
  }

  // Проверка Opera Mini
  if (userAgent.includes("Opera Mini")) {
    return true;
  }

  // Проверка iPhone или iPad
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  if (isIOS) {
    return true;
  }

  return false;
}

detectDeviceAndBrowser();
