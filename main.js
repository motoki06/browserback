// window.addEventListener("popstate", (e) => {
//     alert('back');
//   })
// history.replaceState(null, null, null);
history.pushState(null, null, null);
window.addEventListener('popstate', function(e) {
  alert('ブラウザバックを検知しました。');
});