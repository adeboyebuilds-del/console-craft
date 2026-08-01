// Console Craft — light scroll-reveal, no dependencies.
(function () {
  var targets = document.querySelectorAll(
    ".feature-row, .problem-card, .validate-inner, .stack, .get-it-inner"
  );

  if (!("IntersectionObserver" in window) || !targets.length) return;

  targets.forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) { observer.observe(el); });
})();
