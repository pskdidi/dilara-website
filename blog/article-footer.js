
(() => {
  const articles = [
    {
      title: "Online Psikoterapi Nasıl Yapılır?",
      url: "/blog/online-psikoterapi-nasil-yapilir",
      image: "/assets/georges-de-la-tour-penitent-magdalen.jpg",
      tags: ["terapi", "online"]
    },
    {
      title: "Psikoterapiye Ne Zaman Başvurmalı?",
      url: "/blog/psikoterapiye-ne-zaman-basvurmali",
      image: "/assets/van-gogh-irises.jpg",
      tags: ["terapi", "online"]
    },
    {
      title: "Kendimize Anlattığımız Hikâyeler",
      url: "/blog/kendimize-anlattigimiz-hikayeler",
      image: "/blog/images/kendimize-hikayeler.webp",
      tags: ["benlik", "psikanaliz"]
    },
    {
      title: "Belirsizlikle Yaşayabilmek",
      url: "/blog/belirsizlikle-yasayabilmek",
      image: "/blog/images/belirsizlik.webp",
      tags: ["gundelik", "psikanaliz"]
    },
    {
      title: "Lacan ve Arzu: Ne İstiyoruz?",
      url: "/blog/lacan-ve-arzu-ne-istiyoruz",
      image: "/blog/images/lakana-arzu.webp",
      tags: ["arzu", "psikanaliz"]
    },
    {
      title: "Savunma Mekanizmaları Bizi Neden Korur?",
      url: "/blog/savunma-mekanizmalari-bizi-neden-korur",
      image: "/blog/images/savunmalar.webp",
      tags: ["benlik", "psikanaliz"]
    },
    {
      title: "Kendi Arzumuzu Nasıl Tanırız?",
      url: "/blog/kendi-arzumuzu-nasil-taniriz",
      image: "/blog/images/arzu-yolculugu.webp",
      tags: ["arzu", "psikanaliz"]
    }
  ];

  const target = document.getElementById("shared-article-footer");
  if (!target) return;

  const normalize = url =>
    url.replace(/\/index\.html$/, "")
       .replace(/\/$/, "");

  const current = normalize(window.location.pathname);
  const active = articles.find(a => normalize(a.url) === current);

  const related = articles
    .filter(a => normalize(a.url) !== current)
    .map(a => ({
      ...a,
      score: active
        ? a.tags.filter(tag => active.tags.includes(tag)).length
        : 0
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

  const section = document.createElement("section");
  section.className = "shared-article-footer";

  const author = document.createElement("p");
  author.className = "shared-article-author";
  author.textContent = "Klinik Psikolog Dilara Saçal";
  section.appendChild(author);

  const appointment = document.createElement("div");
  appointment.className = "shared-appointment";

  const appointmentTitle = document.createElement("h2");
  appointmentTitle.textContent = "Online Psikoterapi ve Randevu";

  const description = document.createElement("p");
  description.textContent =
    "Yetişkinlerle psikanalitik yönelimli online bireysel psikoterapi görüşmeleri gerçekleştiriyorum. Görüşme süreci ve randevu hakkında bilgi alabilirsiniz.";

  const appointmentLink = document.createElement("a");
  appointmentLink.href = "/randevu";
  appointmentLink.textContent = "Randevu ve İletişim →";

  appointment.append(
    appointmentTitle,
    description,
    appointmentLink
  );

  section.appendChild(appointment);

  const relatedSection = document.createElement("div");
  relatedSection.className = "shared-related";

  const relatedTitle = document.createElement("h2");
  relatedTitle.textContent = "Diğer Yazılar";

  const grid = document.createElement("div");
  grid.className = "shared-related-grid";

  related.forEach(article => {
    const link = document.createElement("a");
    link.href = article.url;
    link.className = "shared-related-card";

    const image = document.createElement("img");
    image.src = article.image;
    image.alt = "";
    image.loading = "lazy";

    const title = document.createElement("strong");
    title.textContent = article.title;

    link.append(image, title);
    grid.appendChild(link);
  });

  const allPosts = document.createElement("a");
  allPosts.href = "/blog/";
  allPosts.className = "shared-all-posts";
  allPosts.textContent = "Tüm Yazıları Gör →";

  relatedSection.append(relatedTitle, grid, allPosts);
  section.appendChild(relatedSection);

  target.replaceChildren(section);
})();
