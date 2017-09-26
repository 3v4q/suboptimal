// Saves options to chrome.storage.sync.
function save_options() {
  var fileNaming = document.getElementById('fileNaming').value;
  chrome.storage.sync.set({
    fileNaming: fileNaming
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    fileNaming: 'random'
  }, function(items) {
    document.getElementById('fileNaming').value = items.fileNaming;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

