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

// let map = Map.fromJSON(await fetch('mapExample.json').then(res => res.json()));
let map = Map.fromString('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-RIFgoABEW2Pae89l7r1xzvQ+p9f7-2ftJP+19v6CTIa8EBkDyB6gnrPdgC9V6b0wcfc+tDCHdBfuQ6h5D2RAPAdxI0MDeGCNQdvfekj8Hv2IZo9R9DdGsNayPbhiDhHoPsbg2RrjFGkNUc4++jD9Hwx0CYyJ1jxGJM0e47JyT8n+PShw+B-DkGiPidI5p6TPG5NvoUwJqAjHhNGdE2x2DZn0MWe05pvTKB6Yqcc2p0zVmP3uf-bxhDXmFTKYcyxkzLnAvAMgJRkLcWbOvgM8x4zYnYs6es8F79oWuPhaQGMIThnouZY49loLCWZNJcq7RzDOIcggF82V5zFXzPVcs3VlL6FIulYy21jTbnOseb4w19CaXVMxfa8NxLeXkuFYgBrEr6WnPqdc+RkbtXPPjdvi1gb63ku5Z-Qt3bDI+urf81ljrc2TvdcWy6SbfnptDc27dt9+XdNnckPZ-ra2AvdeOx907immHNaiwdgHN2avzfu99-dF2pvlde1JrbsOdug7UE91rh3Ado7uxj2zhhfuXZext1H72UMg6J1CFbSPBvk-k0DqncPMcQAXvt-713Zsw4J2NtnIAmDY8h9zt7vPges5pyT+nuPoddcJziElnOrszbF-L-nRP9iI+e8jxnOX8cS4VygfYwuueq4p+LlnRvkCHDpzrhnR2DdW41ziBEyuyeO8p5kT71mHvAFoHbnHUOefq7C-D-3puVco6Z07731PXfS-t7LkPo3yP0FUBCKW9V3e6895buPgP6D7Ez8geROeHd469z7gD4eTaB5F+bmPVf48oHwInoPouLeh4K+H5p5fk9q9Tz3gXCxtcd8b-r5vkucTjEjx7yv+fq-1ZH5MevZvo+T8Xy35ASb+-B8H9tl3KAH5r6j3rqrU-rdIBlXvzvTet-T+P+3hvG+L8P6vxAVht+J9v+719kfPQp+8+cuQ+-+RO6YQBueC+f+vu4e9Az+6+5+8Wl+R+yA9o3+r+yB7+qBSAdQY+L+SBWmh+YeI+dQc+UBIBxBw+RODQkBFelB6OOBEAhUGBhBzOBeH+IAdIdBA+XeoBsBI+lQPB++fBVBYBOIxkwhd+m+MBNeI+asUhP+WBshy+ROpYrBeeKhPWyAr0Gh0B-BchahCBZ+mhBhqhbE4Of2Jh+hYhAhRO0A+BiBphthhhbE5B9BKeLh5hWIxhwBnhjBJBROfKehDBfOgROI9gjh1hoRhuTBIAPKIR-hYR1BERvhFBSRsR4RKAZSiRB+ARUm5g4wKQJ0yA04uRoh+RTOsAUImAUsYQ7hvB9+Whfu9kihmBRBlRdhOI-gbRbBseS+2hSAzivRzhnRrhKAzgDRIhTRZhgxEArgIxNhYx3hyATI5RMxXhcx0IURfheRyR4hKAtgixMRzuWRqxaRHhexmRUm6eJeSAvU6xMhsx-uUgtRyApgxxGRpxBRdM8AUsRYnxVx3xTORedxEA5AjQ9wjQK0VhEgkAgo5qmATASCboJUeIX0bYaImJ2JEohQLA9AhyhJBJY6eypJcosIcJiIlJSI9IqgGSfIL8bYVQ6AxAwo5Asw0A+wvc6Ev4Wo1YaMzIbgswRJhylAmAmQ3gIpxJwSZJspt8J0aACpgm3wKKug8KWoxAbYqgQwaIwojgsAJKyA9AkAwQdybono6JXgWJ1p2JPImQzgxJIpcpzpzIdAip1JPY3w4IsA0JEOV6cJ94gaIASJCA2YaJuI1g4aNpWJZc+JUphyLpiZ9cXg7pipC4cIhg9JjJzJrJ7J88BoPJ5AO4q6bIgpFg8ZEMkpjp0pSZtZFqVJqZgm4gqp8J5AGpWpOpepBM5qxpHx2YFpuITWTADpIpAQGEI51ZGSdZiZbpDZVJ0swEUJwAMJl2cJwQF0mAKQ5qLI4ZOI1gaIyGeQeJk5xJ05iZFJjZNJwAtOdJIADJmpOZbJHJTAU56kzS2qpZeIbgOq-6eQEp8Z8BZ5Lp3wSpSpUAIAKILZ6pmp2pupjgrJe5kAtO-ZZpyAQ5VQ2J1psw45J5r5QFZJs5oFnpewugPpy5fpaIcJmAKJEAtRta6JmQKaDABMmF2J0Ax5AF+FcpF5c5V59Ut5wA95TJLJT5885sSATW5Ah6JoApX5kAhAJ50A-5J5MpXF7kIFHptUsIyEUFbZMFnZ+pGqIAxp8ATFeIA5jWhgbAUplAOFFZalBFZERF0sxWS5K5qmcJlAhimAqgfI1Yu5KA1g5ArFWJwoHFJ5DlpJPFoF6ZrCAlQlj5eZWMll9gQZcoslDGkAP536f5VZUpqlkVFEGljZ4FwArEul7ZsFXZsAeagVwASo-YFlPJ+APIk5LV9puFhVeyhFHp0s50pFvpsJkAPAyMW5-ljFeIjI0ZmJtY4VUpXVjC0V1J6ZCh8V2ZIlSVCx9c5AqF8oGVOIbgTA01SEyl+VC1s8xVc54FtUFV+lcFwAsARCB4HgjVu1S2XgAFdpE5Tp51lsPV7p0sEgbpZF7lfmVFJJiIqgPA41TF1gYQx1bYc11Zv14MS1aZ0g4Q+6WZD5G1z5vioU9R-Jn5mVz6-64peV1ZBVKN1Yl1YFZEOiYa1grZlVBlwAaIRlKZ9gVNIcb1IATWqgQ4yGdlk51N7k-185rssoblFFcJWgbEB6MNeI1gzgyGbISNRJotEkaNC6GNvUa1ONuZz5S69c16RNZZ9gIVbYSlFNRJ3Nmt8otNlJ11FYt1HZ91xAxNDIkAWA1YTVaFhgqtX1nV9tFE4tJRktkJINMtkA3gfc88QuYZE1EZsQJ53g6tp5IdIE2tV5FY+twlhtnJCd9cEo75JZZZxAJ58Ap1lNmdIEjtWlugrkrtVVjgfIiiz1swZluIftElXgNGQd9ltdR4YdxFCd0tQ1goNF0gTASKJoAVRpwA+AltfI6dCZQ9S42d6ZykediVHJ+wfK9cxApie1ntKAbgsANluVAFdt69KEvFTt9NuozdrNxAb1cJUwaVLIPd71qgGF0ZtYwtP1t91YI90sWuA15FQ1fIF088kAXdgSsNiI8Z7gq9ENwDLIm9GNIUO9uN88hp6kH8H5ZZuI1A1dtt6D2Y9dWskAokz991syRMfJvtvNcIEguFA9ItFDkYoDrsCI49q5OtWIPgityd2Ax18AqDXDbomDC6iiODBdOQBaJg0lJ9ZZ0SUpV9KlUjJoVD4FY1jNapelbtXZxAfccJK6SA39fNGZvYgDjp2jJoPDFq1Akdg1q5kA945qIYHYidiDvSOhcZEVDjGDLol56Zrk8jT5tR5qaA3JRDcl1l1ZlAwQZDNZwTzIujZEKQTIdDXZ0Ab9kAsw25zIVjcITAJ594HDQD6ThoTlvVrsde-Dqm1gEKTAChkY89SA1gswJ5wQkjNTuIMjdAywmZd561CjKCWsEokzqjclFt011t19AzuImTaAwIIAuTYQocKzkAGgN9EApT-NiTRJtlHVg9yzYgdTANrsm8TTfmxpRxWITAGg8DaFSde5v44j-TFz6kKZvF6ZQYkTSVtB9c2Ax96Vp9yAbgEg8ZizWjPzqC99DdKQt4uT-gUcb03txT5lLDQ5xzxJ94djhJCLlzl5xFSadzLGxpZkbETAcDvjStwAhIJ5H4gT81JLpVmlgjdAIwozgl4zUTTAJuPJQh8TmV31xJKTNtaTHLqzowASaLYaU9zFkL8ohz15R1rF2ARLBJHL6ZZL0sAQrjkDl2xp7dULTAyFqJ7zdVwV01YVbLyNerQzwAuoQLswPlVr71hcYrB1kAvqIVlZSzercr8SBjzNd1wo-g5gs9xlkAtYr1lpqgltvIZznDerTjUgEBlLkGUgtVZ9w5IjHzKKUpWo3zJLLrGS7rXYUs1juAxZMlqrtF9wl9qThy+zFDobzZTN0Fxjjg5gfcxpoozDSb+LopOreFCLmbR6wNbjHlkASaZ92oRbdVYjIVEjjrGtzroT-zGNLQfLCVuDUNT48avrZ98lilbbgFIb0gXL4FtoGzPbRjLdwAwob11gTDKFlpw5k5Y5ab1TJL07hUOb-p28b1tRn9zInTn+Ng8ZJYm7GdHLLroM1bTAw7-tB9IaTbwZDgltcLZ1N7SLWsOQOlT7LN91aIPZkAToI7g5fdyGVT9jerC6BrrskhIHlF+oycrzbzTFUgKQx1Gg5bCLLrok7rPljS6kmpZteIaMltJ10r7bzHob5VZHkb-gFdmL2CtH3dSoCNjHxLzH07r0HHxpvLTzLDDFTFGJ01uJCHa9SHO7MVGNwC4nTAs+oUxAyrLI+1QErVUpsAV7Hb6DcrPYirK9mLn7kY6rL5k54wBnurRnVzEtFqDhEDoNVLkATQyMqg-jc9NrC95gcHwnPzQzkA9M4n+wpY9c5gtbELajJ5mjBHsrt7JVZEbDj7hj5HUbgl6HXtQw2L3dLDaAJE3R-7THGbyX4dFqfKpnWXG5a4K7C9wo8Z1AJXFzZXsolXbwPJ5gkHsn2HrrkA6j1ZTXNdhHRFDdEgLtanxj-gsA5iZr+3Q3Sbgd43hnk3rHM3xrGXkGxpwg4HCtDLyd0AyD63yzZXCIbn2kPJuAsb9XB38nUrwbLXRH4FEgTdt3VV-gaIkn0sDbJo6rEgmrNpEoE7zHLH990shNc3XCbEEgyi+XiDRXcX4PAzZXSabnQ4pEaAupMnmV25QXynrXV17XT9WPnZ93dXcJ9FOLlptkDH73iXn3VPrswxc3PAcdEgh3g5BXXTr7q3bPNTZXhUqgrkh7htSJlAPPNgg3OIvnOhbISPQvF3d77XtDEvFHdXxpXNOnOIyo+nSvk7Pz07TIc3wQXjTAvUHTev0shQJ5VQRv6TZXfKbn5n6kwosv9vh3cnx1yP8LqPl3ZiCIir5A3vcDlnL35lenltCXwfFzofP3FFWwDGTAZBwPjWmQGgltdnuFaD7PTny10gFgWNYzBtolEgfX71BPszuIufIV+fzXJLcrqgOTnvPXaIgUXTkAScfvIcNf01dfFP07AJMA+9zoTWxARKWtznIA5Azg1RqgpAm4JF6AOQXi8AwobYLAvqlg3nXgokOgLQCaAPpqAa4PgG2GeBTxew4gHsAAF44BQAA');
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
        await map.draw(ctx, canvas.height, offsetX, offsetY, scale);
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