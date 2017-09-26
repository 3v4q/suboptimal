chrome.storage.local.get({'image_urls': 0}, function(items){
  document.getElementById('image-count').innerHTML = items.image_urls.length + " images queued for download.";
});

document.getElementById('download').addEventListener('click', function(){
  chrome.storage.local.get({'image_urls': []}, function(items){
    var basename = "suboptimal/";
    for (i = 0; i < items.image_urls.length; i++) {
      var filename = Math.random().toString(16).substring(2, 10);
      var split = items.image_urls[i].split(".");
      filename += "." + split[split.length - 1];
      chrome.downloads.download({
        url: items.image_urls[i],
        filename: [basename, filename].join("/")});
    }
    document.getElementById('image-count').innerHTML = "0 images queued for download.";
    chrome.storage.local.set({'image_urls': []});
  });
});

