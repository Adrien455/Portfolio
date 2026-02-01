let dark = false;

function setColors(primary, bg, text, footer) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--bg-color', bg);
    document.documentElement.style.setProperty('--text-color', text);
    document.documentElement.style.setProperty('--footer-bg', footer);
}

let darkButton = document.getElementById("darkMode");

function toggleDarkMode() 
{
    if (!dark) 
    {
        setColors('#1f6262', '#3d3d3d', '#bbbbbb', '#585858');
        darkButton.textContent = '☀️';
    } else 
    {
        setColors('#0f8b8d', '#f7f9fb', '#333', '#eaeaea');
        darkButton.textContent = '🌙';
    }
    dark = !dark;
}