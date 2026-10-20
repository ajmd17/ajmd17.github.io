const EMAIL_ADDRESS = ['mail', 'ajmd.dev'].join('@');

const ICONS = {
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></g></svg>'
};

function isExternal(href) {
    return /^https?:\/\//.test(href);
}

function renderLink(link) {
    const target = isExternal(link.href) ? ' target="_blank" rel="noopener"' : '';
    const arrow = isExternal(link.href) ? '<span class="arrow" aria-hidden="true">&#8599;</span>' : '';

    return `<a href="${link.href}"${target}>${link.name}${arrow}</a>`;
}

function collectMedia(item) {
    const toMedia = (type) => (entry) => ({
        type,
        href: typeof entry === 'string' ? entry : entry.href,
        description: typeof entry === 'string' ? '' : (entry.description || '')
    });

    return [
        ...(item.img || []).map(toMedia('img')),
        ...(item.videos || []).map(toMedia('video'))
    ];
}

function renderMediaItem(media) {
    const src = `img/preview/${media.href}`;
    const label = media.description ? media.description.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;') : 'View full size';
    const inner = media.type === 'video'
        ? `<video src="${src}" muted autoplay loop playsinline preload="metadata"></video>`
        : `<img src="${src}" alt="${label}" loading="lazy">`;

    return `<button type="button" class="media-item" data-type="${media.type}" data-src="${src}" aria-label="${label}">${inner}</button>`;
}

function renderMedia(mediaList, featured) {
    if (!mediaList.length) {
        return '';
    }

    if (!featured) {
        return `<div class="media media-mini">${mediaList.map(renderMediaItem).join('')}</div>`;
    }

    if (mediaList.length === 1) {
        return `<div class="media media-single">${renderMediaItem(mediaList[0])}</div>`;
    }

    if (mediaList.length === 2) {
        return `<div class="media media-pair">${mediaList.map(renderMediaItem).join('')}</div>`;
    }

    const [hero, ...rest] = mediaList;

    return `<div class="media media-hero">${renderMediaItem(hero)}</div>` +
        `<div class="media media-thumbs">${rest.map(renderMediaItem).join('')}</div>`;
}

function renderProject(item) {
    const featured = !!item.featured;
    const links = item.links || [];
    const titleHref = item.titleLink !== false && links[0] ? links[0].href : null;
    const title = titleHref
        ? `<a href="${titleHref}"${isExternal(titleHref) ? ' target="_blank" rel="noopener"' : ''}>${item.title}</a>`
        : item.title;

    const media = collectMedia(item);
    const mediaFirst = featured;

    const body = `
        <div class="project-body">
            <h3 class="project-title">${title}</h3>
            ${item.tags && item.tags.length ? `<ul class="tags">${item.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>` : ''}
            ${item.stat ? `<p class="stat">${item.stat}</p>` : ''}
            <p class="project-description">${item.description}</p>
            ${item.bullets ? `<ul class="bullets">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>` : ''}
            ${item.code ? '<pre class="code"></pre>' : ''}
            ${!mediaFirst ? renderMedia(media, false) : ''}
            ${links.length ? `<div class="project-links">${links.map(renderLink).join('')}</div>` : ''}
        </div>`;

    const article = document.createElement('article');
    article.className = featured ? 'project project-featured' : 'project';
    article.innerHTML = (mediaFirst ? renderMedia(media, true) : '') + body;

    if (item.code) {
        article.querySelector('pre.code').textContent = item.code;
    }

    return article;
}

function renderJob(job) {
    const link = job.links && job.links[0];
    const name = link
        ? `<a href="${link.href}" target="_blank" rel="noopener">${job.name}</a>`
        : job.name;

    const points = (job.description || '')
        .split('\n')
        .map((line) => line.trim().replace(/^[-*]\s*/, ''))
        .filter(Boolean);

    const article = document.createElement('article');
    article.className = 'job';
    article.innerHTML = `
        <div class="job-head">
            <div>
                <h3 class="job-company">${name}</h3>
                <p class="job-role">${job.title}</p>
            </div>
            <p class="job-dates">${job.startDate} &ndash; ${job.endDate}</p>
        </div>
        ${points.length ? `<ul class="bullets">${points.map((point) => `<li>${point}</li>`).join('')}</ul>` : ''}
        ${renderMedia(collectMedia(job), false)}`;

    return article;
}

function renderPortfolio() {
    const featured = document.getElementById('featured-projects');
    const more = document.getElementById('more-projects');
    const jobs = document.getElementById('jobs');
    const skills = document.getElementById('skills-list');

    featured.innerHTML = '';
    more.innerHTML = '';

    PORTFOLIO_DATA.projects.forEach((item) => {
        (item.featured ? featured : more).appendChild(renderProject(item));
    });

    if (!more.children.length) {
        document.querySelector('.subsection-title').remove();
    }

    PORTFOLIO_DATA.jobs.forEach((job) => jobs.appendChild(renderJob(job)));

    skills.innerHTML = PORTFOLIO_DATA.skills.map((skill) => `<li>${skill}</li>`).join('');
}

function initLightbox() {
    const dialog = document.getElementById('lightbox');
    const img = dialog.querySelector('.lightbox-img');
    const video = dialog.querySelector('.lightbox-video');
    const caption = dialog.querySelector('.lightbox-caption');

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.media-item');

        if (!trigger) {
            return;
        }

        const isVideo = trigger.dataset.type === 'video';
        const label = trigger.getAttribute('aria-label');

        dialog.dataset.mode = isVideo ? 'video' : 'img';
        caption.textContent = label === 'View full size' ? '' : label;

        if (isVideo) {
            img.removeAttribute('src');
            video.src = trigger.dataset.src;
            video.play().catch(() => {});
        } else {
            video.removeAttribute('src');
            img.src = trigger.dataset.src;
            img.alt = caption.textContent;
        }

        dialog.showModal();
    });

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog || e.target.closest('.lightbox-close')) {
            dialog.close();
        }
    });

    dialog.addEventListener('close', () => {
        video.pause();
    });
}

function initThemeToggle() {
    const root = document.documentElement;
    const button = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const currentTheme = () => root.getAttribute('data-theme') || (prefersDark.matches ? 'dark' : 'light');
    const updateIcon = () => {
        button.innerHTML = currentTheme() === 'dark' ? ICONS.sun : ICONS.moon;
    };

    button.addEventListener('click', () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', next);

        try {
            localStorage.setItem('theme', next);
        } catch (e) {}

        updateIcon();
    });

    prefersDark.addEventListener('change', updateIcon);
    updateIcon();
}

function initEmailLink() {
    const link = document.getElementById('email-link');
    const label = document.getElementById('email-label');

    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            link.href = `mailto:${EMAIL_ADDRESS}`;
            label.textContent = EMAIL_ADDRESS;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    initLightbox();
    initThemeToggle();
    initEmailLink();

    document.getElementById('year').textContent = new Date().getFullYear();
});
