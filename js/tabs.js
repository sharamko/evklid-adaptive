document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tab-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active');
      });
      document.querySelectorAll('.tab-btn').forEach(function (reset) {
        reset.classList.remove('tab-btn-active');
      });
      document
        .querySelector(`[data-path="${path}"]`)
        .classList.add('tab-btn-active');
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add('tab-content-active');
    });
  });
});
