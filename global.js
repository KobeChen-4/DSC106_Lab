console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// let navLinks = $$('nav a');

// let currentLink = navLinks.find(
//   (a) => a.host === location.host && a.pathname === location.pathname,
// );

// currentLink?.classList.add('current');

const BASE_PATH =
  location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    ? '/'            // 本地
    : '/DSC106_Lab/';       // GitHub Pages 的仓库名，改成你实际的 repo 名

let pages = [
  { url: '', title: 'Home' },
  { url: 'projects/', title: 'Projects' },
  { url: 'contact/', title: 'Contact' },
  { url: 'CV/', title: 'CV' },
  { url: 'https://github.com/KobeChen-4', title: 'GitHub' },
];

let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;
  let title = p.title;

  // 相对路径加上 BASE_PATH，外链不动
  url = !url.startsWith('http') ? BASE_PATH + url : url;

  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;

  // 当前页加 current
  a.classList.toggle(
    'current',
    a.host === location.host && a.pathname === location.pathname,
  );

  // 外链新标签页打开
  a.toggleAttribute('target', a.host !== location.host);
  if (a.host !== location.host) a.target = '_blank';

  nav.append(a);
}