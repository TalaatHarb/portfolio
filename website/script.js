const certificates = [
  // Prestigious / formal certifications
  { file: "mohamed-talaat-harb-elsayed-mahmoud-c00e8f72-17b1-43e9-a625-22e71a1349f6-CKAD certificate.pdf", title: "Certified Kubernetes Application Developer (CKAD)" },
  { file: "ICP-Certification.pdf", title: "ICP Certification" },
  { file: "Stanford QMSE 2015.pdf", title: "Stanford QMSE (2015)" },
  { file: "Graduation-Certificate.jpg", title: "Graduation Certificate" },

  // Cloud / platform and infra certifications
  { file: "mohamed-talaat-harb-elsayed-mahmoud-afa24188-4503-4ae5-a56a-10fa6dd0ce71-k8s for developers certificate.pdf", title: "Kubernetes for Developers" },
  { file: "Kubernetes_for_the_absolute_beginners.pdf", title: "Kubernetes for the Absolute Beginners" },
  { file: "GCP_crach_course.pdf", title: "Google Cloud Platform Crash Course" },
  { file: "Docker_for_java_developers.pdf", title: "Docker for Java Developers" },
  { file: "devops_cicd_jenkins_maven_gradle.pdf", title: "CI/CD with Jenkins, Maven, and Gradle" },
  { file: "Maven_crash_course_certificate.pdf", title: "Maven Crash Course" },
  { file: "spring_devops_aws.pdf", title: "Spring Framework DevOps on AWS" },

  // Core software architecture & engineering courses
  { file: "Software-architecture-UC-1e5d107a-ffd8-4354-8e22-a4abb4cc9bb4.pdf", title: "Software Architecture" },
  { file: "microservices_patterns_techniques.pdf", title: "Microservices Architecture: Patterns and Techniques" },
  { file: "software_architecture_case_studies.pdf", title: "Software Architecture Case Studies" },
  { file: "Mohamed Talaat Harb_Mastering system design certificate.pdf", title: "Mastering System Design" },
  { file: "Refactoring_pyramid_explained_in_simple_steps.pdf", title: "Refactoring Pyramid Explained in Simple Steps" },
  { file: "clean_code_with_java.pdf", title: "Clean Code with Java" },

  // Testing, TDD & quality engineering
  { file: "PracticalJavaUnitTesting.pdf", title: "Practical Java Unit Testing" },
  { file: "Mockito_next_level_java_unit_testing.pdf", title: "Mockito: Next Level Java Unit Testing" },
  { file: "PracticalTestDrivenDevelopmentForJavaProgrammers.pdf", title: "Practical Test-Driven Development for Java Programmers" },
  { file: "React_Mastering_TDD.pdf", title: "React: Mastering TDD" },
  { file: "Testing-angular-apps_certificate.pdf", title: "Testing Angular Applications" },

  // Algorithms, ML and programming fundamentals
  { file: "CompleteAlgorithmsComplexityAndBigONotation.pdf", title: "Algorithms, Complexity, and Big-O Notation" },
  { file: "Coursera ML 2014.pdf", title: "Machine Learning (Coursera, 2014)" },
  { file: "Coursera ML 2015.pdf", title: "Machine Learning (Coursera, 2015)" },
  { file: "Coursera pythonlearn 2015.pdf", title: "Programming for Everyone - Python (Coursera, 2015)" },
  { file: "RUST_course_UC-342e96be-f837-4611-82bc-cd779da337ec.pdf", title: "Rust Course" },
  { file: "Styled-components-c7f735d6-97fe-484b-8ba6-1ab4ac224134.pdf", title: "Styled Components" },

  // Software methodology and process
  { file: "ModernExtremeProgramming.pdf", title: "Modern Extreme Programming" },
  { file: "Scrum_certification_prep.pdf", title: "Scrum Certification Preparation" },
  { file: "Agile_project_management_UC-70e4193b-d230-4aa0-94d4-77d60a616b33.pdf", title: "Agile Project Management" },
  { file: "agile-crach-course_certificate.pdf", title: "Agile Crash Course" },
  { file: "BDD_UC-7ecf799b-b344-4977-b889-6c8e68baac6f.pdf", title: "Behavior-Driven Development (BDD)" },
  { file: "DDD_event_storming.pdf", title: "Domain-Driven Design Event Storming" },

  // Publishing, teaching, and misc professional items
  { file: "Publish_courses_certificate.pdf", title: "Publishing Courses Certificate" },
  { file: "Elsevier Author_workshop_certificate.pdf", title: "Elsevier Author Workshop" },
  { file: "Mr. Harb Lecture certificate.pdf", title: "Lecture Certificate" },

  // Personal / non-software and other documents
  { file: "How_to_edit_your_videos_certificate.pdf", title: "How to Edit Your Videos" },
  { file: "How_to_film_your_videos_certificate.pdf", title: "How to Film Your Videos" },
  { file: "How-to-write-proofs-set-theory-8b250f83-e55d-439e-9697-a260b5272c96.pdf", title: "How to Write Proofs in Set Theory" },
  { file: "SteerByWire-Graduation-project.pdf", title: "Steer-By-Wire Graduation Project" },
  { file: "Certificate_of_Completion_zad.pdf", title: "Certificate of Completion (Zad)" },
  { file: "nahamcon2022_CTF.png", title: "NahamCon 2022 CTF" }
];

const THEME_KEY = "portfolio-theme";
const INITIAL_CERTIFICATES = 6;
const CERTIFICATES_STEP = 6;
let visibleCertificates = INITIAL_CERTIFICATES;

function renderCertificates() {
  const certList = document.getElementById("cert-list");
  const certCount = document.getElementById("cert-count");
  const certLoadMore = document.getElementById("cert-load-more");

  if (!certList || !certCount || !certLoadMore) {
    return;
  }

  certCount.textContent = String(certificates.length);
  const currentlyVisible = certificates.slice(0, visibleCertificates);
  certList.innerHTML = currentlyVisible
    .map(
      (certificate) => `
        <li>
          <span>${certificate.title}</span>
          <a href="assets/${encodeURIComponent(certificate.file).replace(/%2F/g, "/")}" target="_blank" rel="noopener noreferrer">Open</a>
        </li>
      `
    )
    .join("");

  const remaining = certificates.length - currentlyVisible.length;
  if (remaining > 0) {
    certLoadMore.hidden = false;
    certLoadMore.textContent = `Load more (${remaining} remaining)`;
  } else {
    certLoadMore.hidden = true;
  }
}

function setupCertificateLoadMore() {
  const certLoadMore = document.getElementById("cert-load-more");
  if (!certLoadMore) {
    return;
  }

  certLoadMore.addEventListener("click", () => {
    visibleCertificates += CERTIFICATES_STEP;
    renderCertificates();
  });
}

function setupExperienceToggles() {
  const toggles = document.querySelectorAll(".exp-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const card = toggle.closest(".exp-card");
      const content = card ? card.querySelector(".exp-content") : null;
      const indicator = toggle.querySelector(".toggle-indicator");

      if (!content || !indicator) {
        return;
      }

      const isOpen = content.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      indicator.textContent = isOpen ? "−" : "+";
    });
  });
}

function setupRevealAnimation() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  root.setAttribute("data-theme", theme);

  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  }
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setupTheme() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const themeToggle = document.getElementById("theme-toggle");

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const nextTheme = isDark ? "light" : "dark";
      localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  }

  mediaQuery.addEventListener("change", (event) => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === "dark" || savedTheme === "light") {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  });
}

renderCertificates();
setupCertificateLoadMore();
setupExperienceToggles();
setupRevealAnimation();
setupYear();
setupTheme();