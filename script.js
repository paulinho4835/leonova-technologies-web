const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const progressBar = document.querySelector(".scroll-progress span");
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
      mainNav.classList.remove("is-open");
    }
  });
}

const dentiaPreview = document.querySelector(".dentia-app-preview");
if (dentiaPreview) {
  const screenButtons = dentiaPreview.querySelectorAll("[data-dentia-screen]");
  const screenPanels = dentiaPreview.querySelectorAll("[data-dentia-screen-panel]");
  const patientListView = dentiaPreview.querySelector(".dentia-patient-list-view");
  const patientDetailView = dentiaPreview.querySelector(".dentia-patient-detail-view");
  const patientRows = dentiaPreview.querySelectorAll("[data-dentia-patient]");
  const detailTabs = dentiaPreview.querySelectorAll("[data-dentia-detail-tab]");
  const detailPanels = dentiaPreview.querySelectorAll("[data-dentia-detail-panel]");
  const odontogramTabs = dentiaPreview.querySelectorAll("[data-dentia-odontogram]");
  const adultOdontogram = dentiaPreview.querySelector(".dentia-teeth-adult");
  const childOdontogram = dentiaPreview.querySelector(".dentia-teeth-child");

  const setDentiaScreen = (screen) => {
    screenButtons.forEach((button) => button.classList.toggle("is-current", button.dataset.dentiaScreen === screen));
    screenPanels.forEach((panel) => { panel.hidden = panel.dataset.dentiaScreenPanel !== screen; });
  };

  screenButtons.forEach((button) => {
    button.addEventListener("click", () => setDentiaScreen(button.dataset.dentiaScreen));
  });

  patientRows.forEach((row) => {
    row.addEventListener("click", () => {
      const patientName = row.dataset.dentiaPatient;
      const title = patientDetailView?.querySelector(".dentia-patient-detail-heading strong");
      if (title?.firstChild) title.firstChild.nodeValue = `${patientName} `;
      if (patientListView) patientListView.hidden = true;
      if (patientDetailView) patientDetailView.hidden = false;
    });
  });

  dentiaPreview.querySelector("[data-dentia-back]")?.addEventListener("click", () => {
    if (patientDetailView) patientDetailView.hidden = true;
    if (patientListView) patientListView.hidden = false;
  });

  const setDetailPanel = (panelName) => {
    detailTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.dentiaDetailTab === panelName));
    detailPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.dentiaDetailPanel === panelName));
  };

  detailTabs.forEach((tab) => {
    tab.addEventListener("click", () => setDetailPanel(tab.dataset.dentiaDetailTab));
  });

  odontogramTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const isAdult = tab.dataset.dentiaOdontogram === "adult";
      odontogramTabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      if (adultOdontogram) adultOdontogram.hidden = !isAdult;
      if (childOdontogram) childOdontogram.hidden = isAdult;
    });
  });

}

const paguPreview = document.querySelector(".pagu-app-preview");
if (paguPreview) {
  const paguScreenButtons = paguPreview.querySelectorAll("[data-pagu-screen]");
  const paguScreenPanels = paguPreview.querySelectorAll("[data-pagu-screen-panel]");

  const setPaguScreen = (screen) => {
    paguScreenButtons.forEach((button) => button.classList.toggle("is-current", button.dataset.paguScreen === screen));
    paguScreenPanels.forEach((panel) => { panel.hidden = panel.dataset.paguScreenPanel !== screen; });
  };

  paguScreenButtons.forEach((button) => {
    button.addEventListener("click", () => setPaguScreen(button.dataset.paguScreen));
  });
}

const productSystem = document.querySelector("[data-product-system]");
if (productSystem) {
  const systemShell = productSystem.closest(".product-system");
  const planets = Array.from(productSystem.querySelectorAll("[data-product-key]"));
  const title = systemShell?.querySelector("[data-product-title]");
  const description = systemShell?.querySelector("[data-product-description]");
  const index = systemShell?.querySelector("[data-product-index]");
  const features = systemShell?.querySelector("[data-product-features]");
  const metrics = systemShell?.querySelector("[data-product-metrics]");
  const cta = systemShell?.querySelector("[data-product-cta]");
  const ctaLabel = systemShell?.querySelector("[data-product-cta-label]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const productDetails = {
    pagu: {
      number: "01",
      name: "PaGu",
      title: "Todo el restaurante, en sintonía.",
      description: "Coordina la atención desde el mostrador y conecta pedidos, cocina, caja y ventas.",
      href: "#caso-pagu",
      features: ["Restaurantes", "Punto de venta", "Operación diaria"],
      metrics: [["Atención", "Mostrador · venta rápida"], ["Servicio", "Pedidos · cocina"], ["Control", "Caja · ventas"]],
    },
    dentia: {
      number: "02",
      name: "Dentia",
      title: "El expediente clínico conectado.",
      description: "Organiza la agenda, la historia clínica, el odontograma y el seguimiento de cada paciente.",
      href: "#caso-dentia",
      features: ["Clínicas dentales", "Pacientes", "Atención clínica"],
      metrics: [["Agenda", "Citas · disponibilidad"], ["Expediente", "Historia · odontograma"], ["Tratamientos", "Planes · seguimiento"]],
    },
    ambar: {
      number: "03",
      name: "Ámbar",
      title: "Cada sesión, mejor documentada.",
      description: "Reúne evaluación estética, evolución clínica y mapa facial de aplicación en un solo flujo.",
      href: "#caso-ambar",
      features: ["Medicina estética", "Evaluación clínica", "Mapa facial"],
      metrics: [["Evaluación", "Historia dermatológica"], ["Aplicación", "Producto · dosis · puntos"], ["Evolución", "Notas · seguimiento"]],
    },
    inventia: {
      number: "04",
      name: "Inventia",
      title: "Inventario que acompaña las ventas.",
      description: "Da visibilidad a ventas, existencias, movimientos y productos que necesitan reposición.",
      href: "#caso-inventia",
      features: ["Inventario", "Ventas", "Reposición"],
      metrics: [["Ventas", "Resumen · reportes"], ["Existencias", "Productos · movimientos"], ["Compras", "Conteo · reposición"]],
    },
  };

  let elapsed = 0;
  let lastTimestamp = null;
  let animationFrame = null;
  let focusPaused = false;
  let isVisible = !("IntersectionObserver" in window);

  const canAnimate = () => !reducedMotion.matches && isVisible && !focusPaused && !document.hidden;
  const positionPlanets = () => {
    const { width, height } = productSystem.getBoundingClientRect();
    if (!width || !height) return;

    planets.forEach((planet) => {
      const xRatio = Number(planet.dataset.orbitX) || 0.36;
      const yRatio = Number(planet.dataset.orbitY) || 0.36;
      const maxX = Math.max(0, (width - planet.offsetWidth) / 2 - 14);
      const maxY = Math.max(0, (height - planet.offsetHeight) / 2 - 18);
      const radiusX = Math.min(width * xRatio, maxX);
      const radiusY = Math.min(height * yRatio, maxY);
      const initialAngle = (Number(planet.dataset.orbitAngle) || 0) * Math.PI / 180;
      const angle = initialAngle + elapsed * (Number(planet.dataset.orbitSpeed) || 0.1);
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      planet.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px), 0)`;
    });
  };

  const stopOrbit = () => {
    if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    animationFrame = null;
    lastTimestamp = null;
  };

  const animateOrbit = (timestamp) => {
    animationFrame = null;
    if (!canAnimate()) {
      lastTimestamp = null;
      return;
    }

    if (lastTimestamp !== null) elapsed += Math.min((timestamp - lastTimestamp) / 1000, 0.06);
    lastTimestamp = timestamp;
    positionPlanets();
    animationFrame = window.requestAnimationFrame(animateOrbit);
  };

  const syncOrbit = () => {
    if (canAnimate()) {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(animateOrbit);
      return;
    }
    stopOrbit();
    positionPlanets();
  };

  const syncPauseState = () => {
    systemShell?.classList.toggle("is-paused", focusPaused);
    syncOrbit();
  };

  const selectProduct = (planet) => {
    const product = productDetails[planet.dataset.productKey];
    if (!product || !systemShell) return;

    planets.forEach((item) => {
      const isSelected = item === planet;
      item.classList.toggle("is-selected", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });
    systemShell.classList.remove("is-selected");
    window.requestAnimationFrame(() => systemShell.classList.add("is-selected"));
    if (title) title.textContent = product.title;
    if (description) description.textContent = product.description;
    if (index) index.textContent = `${product.number} / 04 · ${product.name.toUpperCase()}`;
    if (cta) cta.href = product.href;
    if (ctaLabel) ctaLabel.textContent = `Ver ${product.name}`;
    if (features) {
      features.replaceChildren(...product.features.map((feature) => {
        const chip = document.createElement("span");
        chip.textContent = feature;
        return chip;
      }));
    }
    if (metrics) {
      metrics.replaceChildren(...product.metrics.map(([label, value]) => {
        const item = document.createElement("div");
        const metricLabel = document.createElement("small");
        const metricValue = document.createElement("strong");
        metricLabel.textContent = label;
        metricValue.textContent = value;
        item.append(metricLabel, metricValue);
        return item;
      }));
    }
  };

  planets.forEach((planet, planetIndex) => {
    planet.addEventListener("click", () => selectProduct(planet));
    planet.addEventListener("keydown", (event) => {
      const nextKeys = ["ArrowRight", "ArrowDown"];
      const previousKeys = ["ArrowLeft", "ArrowUp"];
      if (!nextKeys.includes(event.key) && !previousKeys.includes(event.key)) return;
      event.preventDefault();
      const direction = nextKeys.includes(event.key) ? 1 : -1;
      const nextPlanet = planets[(planetIndex + direction + planets.length) % planets.length];
      nextPlanet.focus();
      selectProduct(nextPlanet);
    });
  });

  systemShell?.addEventListener("focusin", (event) => {
    focusPaused = event.target.matches(":focus-visible");
    syncPauseState();
  });
  systemShell?.addEventListener("focusout", (event) => {
    if (systemShell.contains(event.relatedTarget)) return;
    focusPaused = false;
    syncPauseState();
  });
  document.addEventListener("visibilitychange", syncOrbit);
  reducedMotion.addEventListener?.("change", syncOrbit);
  window.addEventListener("resize", positionPlanets, { passive: true });

  if ("ResizeObserver" in window) {
    const systemResizeObserver = new ResizeObserver(positionPlanets);
    systemResizeObserver.observe(productSystem);
  }
  if ("IntersectionObserver" in window) {
    const systemVisibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      syncOrbit();
    }, { threshold: 0.08 });
    systemVisibilityObserver.observe(systemShell || productSystem);
  }

  positionPlanets();
  syncOrbit();
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -30px 0px" });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

let scrollScheduled = false;
window.addEventListener("scroll", () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  window.requestAnimationFrame(() => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${Math.min(progress, 100)}%`;
    scrollScheduled = false;
  });
}, { passive: true });

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const subject = `Proyecto Leonova — ${formData.get("name")}`;
    const body = [
      `Hola Leonova Technologies, soy ${formData.get("name")}.`,
      `Mi correo: ${formData.get("email")}`,
      "",
      "Quiero conversar sobre:",
      formData.get("project"),
    ].join("\n");
    const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    formNote.textContent = "Tu correo quedó preparado. Completa el destinatario y envíalo desde tu aplicación de correo.";
  });
}
