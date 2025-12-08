(function() {
  'use strict';
  
  // Get script attributes
  var script = document.currentScript || document.querySelector('script[data-form-id]');
  if (!script) {
    console.error('FastSubmit: Could not find embed script');
    return;
  }
  
  var formId = script.getAttribute('data-form-id');
  var theme = script.getAttribute('data-theme') || 'light';
  var width = script.getAttribute('data-width') || '100%';
  var redirectUrl = script.getAttribute('data-redirect');
  
  if (!formId) {
    console.error('FastSubmit: data-form-id attribute is required');
    return;
  }
  
  // Find container
  var container = document.getElementById('fastsubmit-form');
  if (!container) {
    console.error('FastSubmit: Could not find element with id="fastsubmit-form"');
    return;
  }
  
  // Create iframe
  var iframe = document.createElement('iframe');
  var baseUrl = script.src.replace('/embed.js', '');
  var iframeSrc = baseUrl + '/f/' + formId + '?embedded=true&theme=' + theme;
  
  if (redirectUrl) {
    iframeSrc += '&redirect=' + encodeURIComponent(redirectUrl);
  }
  
  iframe.src = iframeSrc;
  iframe.style.width = width;
  iframe.style.border = 'none';
  iframe.style.minHeight = '400px';
  iframe.style.display = 'block';
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('title', 'FastSubmit Form');
  
  // Auto-resize iframe based on content
  window.addEventListener('message', function(event) {
    // Verify origin for security
    if (event.origin !== baseUrl) return;
    
    if (event.data && event.data.type === 'fastsubmit-resize') {
      iframe.style.height = event.data.height + 'px';
    }
    
    if (event.data && event.data.type === 'fastsubmit-redirect' && redirectUrl) {
      window.location.href = redirectUrl;
    }
  });
  
  // Insert iframe
  container.appendChild(iframe);
  
  // Add loading state
  container.style.minHeight = '400px';
  container.style.position = 'relative';
  
  var loader = document.createElement('div');
  loader.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:#666;';
  loader.innerHTML = '<div style="width:40px;height:40px;border:3px solid #f3f3f3;border-top:3px solid #3498db;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 10px;"></div><style>@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>Loading form...';
  container.appendChild(loader);
  
  iframe.onload = function() {
    if (loader && loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
  };
})();
