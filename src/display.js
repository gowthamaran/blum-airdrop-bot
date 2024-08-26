function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=        🌟 Blum Airdrop Bot 🌟        ='.cyan);
  console.log('=        Created by Maranscrypto       ='.cyan);
  console.log('=       https://t.me/Maranscrypto      ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = { displayHeader };
