// Saves options to chrome.storage
function save_options(){

    const domain_dev = document.getElementById('domain_dev').value;
    const domain_sta = document.getElementById('domain_sta').value;
    const domain_pro = document.getElementById('domain_pro').value;

    const https_dev = document.getElementById('https_dev').checked;
    const https_sta = document.getElementById('https_sta').checked;
    const https_pro = document.getElementById('https_pro').checked;
    
    chrome.storage.sync.set({
        domain_dev,
        domain_sta,
        domain_pro,
        https_dev,
        https_sta,
        https_pro
    }, () => {

        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved!';
        status.style.display = 'block';
        setTimeout(() => {
            status.style.display = 'none';
            status.textContent = '';
        }, 1200);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        domain_dev,
        domain_sta,
        domain_pro,
        https_dev,
        https_sta,
        https_pro
    }, items => {

        // document.write(JSON.stringify(items));
        
        document.getElementById('domain_dev').value = items.domain_dev;
        document.getElementById('domain_sta').value = items.domain_sta;
        document.getElementById('domain_pro').value = items.domain_pro;

        document.getElementById('https_dev').checked = items.https_dev;
        document.getElementById('https_sta').checked = items.https_sta;
        document.getElementById('https_pro').checked = items.https_pro;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);