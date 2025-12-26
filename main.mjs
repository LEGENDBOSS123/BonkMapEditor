import { FileImporter } from "./FileImporter.mjs";
import { Map } from "./Map.mjs";

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight - 50;
canvas.width = window.innerWidth - 50;

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight - 50;
    canvas.width = window.innerWidth - 50;
});

let map = Map.fromJSON(await fetch('mapExample.json').then(res => res.json()));
top.map = map; // For debugging in console
let isDragging = false;
let lastMouseX, lastMouseY;

canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
        offsetX += e.clientX - lastMouseX;
        offsetY += e.clientY - lastMouseY;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const zoomFactor = Math.exp(0.003 * e.deltaY);
    const oldScale = scale;
    scale *= zoomFactor;
    scale = Math.min(Math.max(scale, 0.1), 100000);
    const worldX = (mouseX - offsetX) / oldScale;
    const worldY = (mouseY - offsetY) / oldScale;
    offsetX = mouseX - worldX * scale;
    offsetY = mouseY - worldY * scale;
});

let scale = 1;
let offsetX = 0;
let offsetY = 0;
let old = {
    scale: scale,
    offsetX: offsetX,
    offsetY: offsetY,
    mapJSON: JSON.stringify(map.toJSON()),
    screenWidth: canvas.width,
    screenHeight: canvas.height,
    firstTime: true
}

function hasChanged() {
    return old.scale !== scale ||
        old.offsetX !== offsetX ||
        old.offsetY !== offsetY ||
        old.mapJSON !== JSON.stringify(map.toJSON()) ||
        old.screenWidth !== canvas.width ||
        old.screenHeight !== canvas.height ||
        (notifications.length > 0) ||
        old.firstTime;
}

function updateOld() {
    old.scale = scale;
    old.offsetX = offsetX;
    old.offsetY = offsetY;
    old.mapJSON = JSON.stringify(map.toJSON());
    old.screenWidth = canvas.width;
    old.screenHeight = canvas.height;
    old.firstTime = false;
}

let notifications = [];

function addNotification(message, duration = 2000, color) {
    const notification = { message, time: Date.now(), duration, color };
    notifications.push(notification);
    setTimeout(() => {
        notifications = notifications.filter(n => n !== notification);
    }, duration);
}

async function animate() {


    if (hasChanged()) {
        ctx.fillStyle = '#1E3246';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await map.draw(ctx, canvas.height * 0.4, offsetX, offsetY, scale);
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.fillText(`Drag to move, Scroll to zoom, Press Shift+D to download map, Press Shift+F to import text file`, 10, 20);
        ctx.fillText(`Press Shift+T to enter JSON text, Press Shift+S to enter map string, Press Shift+C to copy map string`, 10, 40);
        let notifY = 80;
        for (const notif of notifications) {
            const elapsed = Date.now() - notif.time;
            if (elapsed < notif.duration) {
                ctx.globalAlpha = Math.pow(1 - (elapsed / notif.duration), 0.33);
                ctx.fillStyle = notif.color || 'yellow';
                ctx.fillText(notif.message, 10, notifY);
                ctx.globalAlpha = 1.0;
                notifY += 20;
            }
        }
    }
    updateOld();
    requestAnimationFrame(animate);
}

animate();

function loadMapFromTxt(txt) {
    try {
        const json = JSON.parse(txt);
        try {
            map = Map.fromJSON(json);
        }
        catch (err) {
            addNotification(err.message, 3000, "red");
            return;
        }
        addNotification("Map imported successfully", 3000, "lightgreen");
    }
    catch (err) {
        addNotification("Invalid JSON: " + err.message, 3000, "red");
    }
}

document.addEventListener('keydown', async (e) => {
    if (!e.shiftKey) {
        return;
    }
    let txt;
    switch (e.code) {
        case 'KeyD':
            map.download(1024, 'map.png');
            break;
        case "KeyF":
            txt = await FileImporter.text();
            loadMapFromTxt(txt);
            break;
        case "KeyT":
            txt = prompt("Enter map JSON:");
            loadMapFromTxt(txt);
            break;
        case "KeyS":
            txt = prompt("Enter map string:");
            try {
                map = Map.fromString(txt);
                addNotification("Map imported successfully", 3000, "lightgreen");
            }
            catch (err) {
                addNotification("Error importing map: " + err.message, 3000, "red");
            }
            break;
        case "KeyC":
            const mapString = map.toString();
            navigator.clipboard.writeText(mapString);
            addNotification("Map string copied to clipboard", 3000, "lightgreen");
            addNotification(mapString, 3000);
            break;
    }
});