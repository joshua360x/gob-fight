export function renderGoblin(data) {
    const div = document.createElement('div');
    let pName = document.createElement('p');
    let img = document.createElement('img');
    img.src = './assets/dragons-head-310697.svg';
    let pHP = document.createElement('p');
    img.classList.add('evil-Goblin');
    div.classList.add('evil-Goblinn');
    if (data.hp <= 0) {
        div.classList.add('false');
    }
  // console.log("🚀 ~ file: app.js ~ line 49 ~ displayGodblins ~ goblin", data)
    pName.textContent = data.name;
    pHP.textContent = data.hp;
    div.append(pName, img, pHP);
    return div;
}