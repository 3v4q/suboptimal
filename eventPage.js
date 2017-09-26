chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    "type": "normal",
    "id": "suboptimal-add",
    "title": "Add image to queue",
    "contexts": ["image"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
  if (info.menuItemId === "suboptimal-add") {
    chrome.storage.local.get({'image_urls': []}, function(items){
      items.image_urls.push(info.srcUrl);
      chrome.storage.local.set({'image_urls': items.image_urls});
    });
  }
});

