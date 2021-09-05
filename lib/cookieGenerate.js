const cookieGenerate = (cookies) => Object.entries(cookies).map(([key, value]) => `${key}=${value}; `).join('');
module.exports = cookieGenerate;
