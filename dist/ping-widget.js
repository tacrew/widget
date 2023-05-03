(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root,[data-theme]{background-color:hsla(var(--b1) / var(--tw-bg-opacity, 1));color:hsla(var(--bc) / var(--tw-text-opacity, 1))}html{-webkit-tap-highlight-color:transparent}:root{color-scheme:light;--pf: 258.89 94.378% 40.941%;--sf: 314 100% 37.647%;--af: 174 60% 40.784%;--nf: 219 14.085% 22.275%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 258.89 94.378% 51.176%;--pc: 0 0% 100%;--s: 314 100% 47.059%;--sc: 0 0% 100%;--a: 174 60% 50.98%;--ac: 174.71 43.59% 15.294%;--n: 219 14.085% 27.843%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 94.902%;--b3: 180 1.9608% 90%;--bc: 215 27.907% 16.863%}@media (prefers-color-scheme: dark){:root{color-scheme:dark;--pf: 262.35 80.315% 40.157%;--sf: 315.75 70.196% 40%;--af: 174.69 70.335% 32.784%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 262.35 80.315% 50.196%;--pc: 0 0% 100%;--s: 315.75 70.196% 50%;--sc: 0 0% 100%;--a: 174.69 70.335% 40.98%;--ac: 0 0% 100%;--n: 218.18 18.033% 11.961%;--nf: 222.86 17.073% 8.0392%;--nc: 220 13.376% 69.216%;--b1: 220 17.647% 20%;--b2: 220 17.241% 17.059%;--b3: 218.57 17.949% 15.294%;--bc: 220 13.376% 69.216%}}[data-theme=light]{color-scheme:light;--pf: 258.89 94.378% 40.941%;--sf: 314 100% 37.647%;--af: 174 60% 40.784%;--nf: 219 14.085% 22.275%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 258.89 94.378% 51.176%;--pc: 0 0% 100%;--s: 314 100% 47.059%;--sc: 0 0% 100%;--a: 174 60% 50.98%;--ac: 174.71 43.59% 15.294%;--n: 219 14.085% 27.843%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 94.902%;--b3: 180 1.9608% 90%;--bc: 215 27.907% 16.863%}[data-theme=dark]{color-scheme:dark;--pf: 262.35 80.315% 40.157%;--sf: 315.75 70.196% 40%;--af: 174.69 70.335% 32.784%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 262.35 80.315% 50.196%;--pc: 0 0% 100%;--s: 315.75 70.196% 50%;--sc: 0 0% 100%;--a: 174.69 70.335% 40.98%;--ac: 0 0% 100%;--n: 218.18 18.033% 11.961%;--nf: 222.86 17.073% 8.0392%;--nc: 220 13.376% 69.216%;--b1: 220 17.647% 20%;--b2: 220 17.241% 17.059%;--b3: 218.57 17.949% 15.294%;--bc: 220 13.376% 69.216%}[data-theme=cupcake]{color-scheme:light;--pf: 183.03 47.368% 47.216%;--sf: 338.25 71.429% 62.431%;--af: 39 84.112% 46.431%;--nf: 280 46.479% 11.137%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 183.03 100% 11.804%;--sc: 338.25 100% 15.608%;--ac: 39 100% 11.608%;--nc: 280 82.688% 82.784%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--p: 183.03 47.368% 59.02%;--s: 338.25 71.429% 78.039%;--a: 39 84.112% 58.039%;--n: 280 46.479% 13.922%;--b1: 24 33.333% 97.059%;--b2: 26.667 21.951% 91.961%;--b3: 22.5 14.286% 89.02%;--bc: 280 46.479% 13.922%;--rounded-btn: 1.9rem;--tab-border: 2px;--tab-radius: .5rem}[data-theme=bumblebee]{color-scheme:light;--pf: 41.124 74.167% 42.353%;--sf: 49.901 94.393% 46.431%;--af: 240 33.333% 11.294%;--nf: 240 33.333% 11.294%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 0 0% 20%;--ac: 240 60.274% 82.824%;--nc: 240 60.274% 82.824%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 41.124 74.167% 52.941%;--pc: 240 33.333% 14.118%;--s: 49.901 94.393% 58.039%;--sc: 240 33.333% 14.118%;--a: 240 33.333% 14.118%;--n: 240 33.333% 14.118%;--b1: 0 0% 100%}[data-theme=emerald]{color-scheme:light;--pf: 141.18 50% 48%;--sf: 218.88 96.078% 48%;--af: 9.8901 81.25% 44.863%;--nf: 219.23 20.312% 20.078%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 141.18 50% 60%;--pc: 151.11 28.421% 18.627%;--s: 218.88 96.078% 60%;--sc: 210 20% 98.039%;--a: 9.8901 81.25% 56.078%;--ac: 210 20% 98.039%;--n: 219.23 20.312% 25.098%;--nc: 210 20% 98.039%;--b1: 0 0% 100%;--bc: 219.23 20.312% 25.098%;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1}[data-theme=corporate]{color-scheme:light;--pf: 229.09 95.652% 51.137%;--sf: 214.91 26.316% 47.216%;--af: 154.2 49.02% 48%;--nf: 233.33 27.273% 10.353%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 229.09 100% 92.784%;--sc: 214.91 100% 11.804%;--ac: 154.2 100% 12%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 229.09 95.652% 63.922%;--s: 214.91 26.316% 59.02%;--a: 154.2 49.02% 60%;--n: 233.33 27.273% 12.941%;--nc: 210 38.462% 94.902%;--b1: 0 0% 100%;--bc: 233.33 27.273% 12.941%;--rounded-box: .25rem;--rounded-btn: .125rem;--rounded-badge: .125rem;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1}[data-theme=synthwave]{color-scheme:dark;--pf: 320.73 69.62% 55.216%;--sf: 197.03 86.592% 51.922%;--af: 48 89.041% 45.647%;--nf: 253.22 60.825% 15.216%;--b2: 253.85 59.091% 23.294%;--b3: 253.85 59.091% 20.965%;--pc: 320.73 100% 13.804%;--sc: 197.03 100% 12.98%;--ac: 48 100% 11.412%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 320.73 69.62% 69.02%;--s: 197.03 86.592% 64.902%;--a: 48 89.041% 57.059%;--n: 253.22 60.825% 19.02%;--nc: 260 60% 98.039%;--b1: 253.85 59.091% 25.882%;--bc: 260 60% 98.039%;--in: 199.13 86.957% 63.922%;--inc: 257.45 63.218% 17.059%;--su: 168.1 74.233% 68.039%;--suc: 257.45 63.218% 17.059%;--wa: 48 89.041% 57.059%;--wac: 257.45 63.218% 17.059%;--er: 351.85 73.636% 56.863%;--erc: 260 60% 98.039%}[data-theme=retro]{color-scheme:light;--pf: 2.6667 73.77% 60.863%;--sf: 144.62 27.273% 57.569%;--af: 49.024 67.213% 60.863%;--nf: 41.667 16.822% 33.569%;--inc: 221.21 100% 90.667%;--suc: 142.13 100% 87.255%;--wac: 32.133 100% 8.7451%;--erc: 0 100% 90.118%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 2.6667 73.77% 76.078%;--pc: 345 5.2632% 14.902%;--s: 144.62 27.273% 71.961%;--sc: 345 5.2632% 14.902%;--a: 49.024 67.213% 76.078%;--ac: 345 5.2632% 14.902%;--n: 41.667 16.822% 41.961%;--nc: 45 47.059% 80%;--b1: 45 47.059% 80%;--b2: 45.283 37.063% 71.961%;--b3: 42.188 35.955% 65.098%;--bc: 345 5.2632% 14.902%;--in: 221.21 83.193% 53.333%;--su: 142.13 76.216% 36.275%;--wa: 32.133 94.619% 43.725%;--er: 0 72.222% 50.588%;--rounded-box: .4rem;--rounded-btn: .4rem;--rounded-badge: .4rem}[data-theme=cyberpunk]{color-scheme:light;--pf: 344.78 100% 58.353%;--sf: 195.12 80.392% 56%;--af: 276 74.324% 56.784%;--nf: 57.273 100% 10.353%;--b2: 56 100% 45%;--b3: 56 100% 40.5%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 56 100% 10%;--pc: 344.78 100% 14.588%;--sc: 195.12 100% 14%;--ac: 276 100% 14.196%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;--p: 344.78 100% 72.941%;--s: 195.12 80.392% 70%;--a: 276 74.324% 70.98%;--n: 57.273 100% 12.941%;--nc: 56 100% 50%;--b1: 56 100% 50%;--rounded-box: 0;--rounded-btn: 0;--rounded-badge: 0;--tab-radius: 0}[data-theme=valentine]{color-scheme:light;--pf: 353.23 73.81% 53.647%;--sf: 254.12 86.441% 61.49%;--af: 181.41 55.556% 56%;--nf: 336 42.857% 38.431%;--b2: 318.46 46.429% 80.118%;--b3: 318.46 46.429% 72.106%;--pc: 353.23 100% 13.412%;--sc: 254.12 100% 15.373%;--ac: 181.41 100% 14%;--inc: 221.21 100% 90.667%;--suc: 142.13 100% 87.255%;--wac: 32.133 100% 8.7451%;--erc: 0 100% 90.118%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 353.23 73.81% 67.059%;--s: 254.12 86.441% 76.863%;--a: 181.41 55.556% 70%;--n: 336 42.857% 48.039%;--nc: 318.46 46.429% 89.02%;--b1: 318.46 46.429% 89.02%;--bc: 343.64 38.462% 28.039%;--in: 221.21 83.193% 53.333%;--su: 142.13 76.216% 36.275%;--wa: 32.133 94.619% 43.725%;--er: 0 72.222% 50.588%;--rounded-btn: 1.9rem}[data-theme=halloween]{color-scheme:dark;--pf: 31.927 89.344% 41.725%;--sf: 271.22 45.794% 33.569%;--af: 91.071 100% 26.353%;--nf: 180 3.5714% 8.7843%;--b2: 0 0% 11.647%;--b3: 0 0% 10.482%;--bc: 0 0% 82.588%;--sc: 271.22 100% 88.392%;--ac: 91.071 100% 6.5882%;--nc: 180 4.8458% 82.196%;--inc: 221.21 100% 90.667%;--suc: 142.13 100% 87.255%;--wac: 32.133 100% 8.7451%;--erc: 0 100% 90.118%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 31.927 89.344% 52.157%;--pc: 180 7.3171% 8.0392%;--s: 271.22 45.794% 41.961%;--a: 91.071 100% 32.941%;--n: 180 3.5714% 10.98%;--b1: 0 0% 12.941%;--in: 221.21 83.193% 53.333%;--su: 142.13 76.216% 36.275%;--wa: 32.133 94.619% 43.725%;--er: 0 72.222% 50.588%}[data-theme=garden]{color-scheme:light;--pf: 138.86 15.982% 34.353%;--sf: 96.923 37.143% 74.51%;--af: 0 67.742% 75.137%;--nf: 0 3.9106% 28.078%;--b2: 0 4.3478% 81.882%;--b3: 0 4.3478% 73.694%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 138.86 100% 88.588%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 138.86 15.982% 42.941%;--s: 96.923 37.143% 93.137%;--sc: 96 32.468% 15.098%;--a: 0 67.742% 93.922%;--ac: 0 21.951% 16.078%;--n: 0 3.9106% 35.098%;--nc: 0 4.3478% 90.98%;--b1: 0 4.3478% 90.98%;--bc: 0 3.2258% 6.0784%}[data-theme=forest]{color-scheme:dark;--pf: 141.04 71.963% 33.569%;--sf: 140.98 74.694% 38.431%;--af: 35.148 68.98% 41.569%;--nf: 0 9.6774% 4.8627%;--b2: 0 12.195% 7.2353%;--b3: 0 12.195% 6.5118%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 0 11.727% 81.608%;--sc: 140.98 100% 9.6078%;--ac: 35.148 100% 10.392%;--nc: 0 6.8894% 81.216%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 141.04 71.963% 41.961%;--pc: 140.66 100% 88.039%;--s: 140.98 74.694% 48.039%;--a: 35.148 68.98% 51.961%;--n: 0 9.6774% 6.0784%;--b1: 0 12.195% 8.0392%;--rounded-btn: 1.9rem}[data-theme=aqua]{color-scheme:dark;--pf: 181.79 92.857% 39.529%;--sf: 274.41 30.909% 45.49%;--af: 47.059 100% 64%;--nf: 205.4 53.725% 40%;--b2: 218.61 52.511% 38.647%;--b3: 218.61 52.511% 34.782%;--bc: 218.61 100% 88.588%;--sc: 274.41 100% 91.373%;--ac: 47.059 100% 16%;--nc: 205.4 100% 90%;--inc: 221.21 100% 90.667%;--suc: 142.13 100% 87.255%;--wac: 32.133 100% 8.7451%;--erc: 0 100% 90.118%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 181.79 92.857% 49.412%;--pc: 181.41 100% 16.667%;--s: 274.41 30.909% 56.863%;--a: 47.059 100% 80%;--n: 205.4 53.725% 50%;--b1: 218.61 52.511% 42.941%;--in: 221.21 83.193% 53.333%;--su: 142.13 76.216% 36.275%;--wa: 32.133 94.619% 43.725%;--er: 0 72.222% 50.588%}[data-theme=lofi]{color-scheme:light;--pf: 0 0% 4.0784%;--sf: 0 1.9608% 8%;--af: 0 0% 11.922%;--nf: 0 0% 0%;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--p: 0 0% 5.098%;--pc: 0 0% 100%;--s: 0 1.9608% 10%;--sc: 0 0% 100%;--a: 0 0% 14.902%;--ac: 0 0% 100%;--n: 0 0% 0%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 94.902%;--b3: 0 1.9608% 90%;--bc: 0 0% 0%;--in: 212.35 100% 47.647%;--inc: 0 0% 100%;--su: 136.84 72.152% 46.471%;--suc: 0 0% 100%;--wa: 4.5614 100% 66.471%;--wac: 0 0% 100%;--er: 325.05 77.6% 49.02%;--erc: 0 0% 100%;--rounded-box: .25rem;--rounded-btn: .125rem;--rounded-badge: .125rem;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1;--tab-radius: 0}[data-theme=pastel]{color-scheme:light;--pf: 283.64 21.569% 64%;--sf: 351.63 70.492% 70.431%;--af: 158.49 54.639% 64.784%;--nf: 198.62 43.719% 48.784%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 0 0% 20%;--pc: 283.64 59.314% 16%;--sc: 351.63 100% 17.608%;--ac: 158.49 100% 16.196%;--nc: 198.62 100% 12.196%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 283.64 21.569% 80%;--s: 351.63 70.492% 88.039%;--a: 158.49 54.639% 80.98%;--n: 198.62 43.719% 60.98%;--b1: 0 0% 100%;--b2: 210 20% 98.039%;--b3: 216 12.195% 83.922%;--rounded-btn: 1.9rem}[data-theme=fantasy]{color-scheme:light;--pf: 296.04 82.813% 20.078%;--sf: 200 100% 29.647%;--af: 30.894 94.378% 40.941%;--nf: 215 27.907% 13.49%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 296.04 100% 85.02%;--sc: 200 100% 87.412%;--ac: 30.894 100% 10.235%;--nc: 215 62.264% 83.373%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 296.04 82.813% 25.098%;--s: 200 100% 37.059%;--a: 30.894 94.378% 51.176%;--n: 215 27.907% 16.863%;--b1: 0 0% 100%;--bc: 215 27.907% 16.863%}[data-theme=wireframe]{color-scheme:light;--pf: 0 0% 57.725%;--sf: 0 0% 57.725%;--af: 0 0% 57.725%;--nf: 0 0% 73.725%;--bc: 0 0% 20%;--pc: 0 0% 14.431%;--sc: 0 0% 14.431%;--ac: 0 0% 14.431%;--nc: 0 0% 18.431%;--inc: 240 100% 90%;--suc: 120 100% 85.02%;--wac: 60 100% 10%;--erc: 0 100% 90%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;font-family:Chalkboard,comic sans ms,sanssecondaryerif;--p: 0 0% 72.157%;--s: 0 0% 72.157%;--a: 0 0% 72.157%;--n: 0 0% 92.157%;--b1: 0 0% 100%;--b2: 0 0% 93.333%;--b3: 0 0% 86.667%;--in: 240 100% 50%;--su: 120 100% 25.098%;--wa: 60 30.196% 50%;--er: 0 100% 50%;--rounded-box: .2rem;--rounded-btn: .2rem;--rounded-badge: .2rem;--tab-radius: .2rem}[data-theme=black]{color-scheme:dark;--pf: 0 1.9608% 16%;--sf: 0 1.9608% 16%;--af: 0 1.9608% 16%;--bc: 0 0% 80%;--pc: 0 5.3922% 84%;--sc: 0 5.3922% 84%;--ac: 0 5.3922% 84%;--nc: 0 2.5404% 83.02%;--inc: 240 100% 90%;--suc: 120 100% 85.02%;--wac: 60 100% 10%;--erc: 0 100% 90%;--border-btn: 1px;--tab-border: 1px;--p: 0 1.9608% 20%;--s: 0 1.9608% 20%;--a: 0 1.9608% 20%;--b1: 0 0% 0%;--b2: 0 0% 5.098%;--b3: 0 1.9608% 10%;--n: 0 1.2987% 15.098%;--nf: 0 1.9608% 20%;--in: 240 100% 50%;--su: 120 100% 25.098%;--wa: 60 100% 50%;--er: 0 100% 50%;--rounded-box: 0;--rounded-btn: 0;--rounded-badge: 0;--animation-btn: 0;--animation-input: 0;--btn-text-case: lowercase;--btn-focus-scale: 1;--tab-radius: 0}[data-theme=luxury]{color-scheme:dark;--pf: 0 0% 80%;--sf: 218.4 54.348% 14.431%;--af: 318.62 21.805% 20.863%;--nf: 270 4.3478% 7.2157%;--pc: 0 0% 20%;--sc: 218.4 100% 83.608%;--ac: 318.62 84.615% 85.216%;--inc: 202.35 100% 14%;--suc: 89.007 100% 10.392%;--wac: 53.906 100% 12.706%;--erc: 0 100% 14.353%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 0 0% 100%;--s: 218.4 54.348% 18.039%;--a: 318.62 21.805% 26.078%;--n: 270 4.3478% 9.0196%;--nc: 37.083 67.29% 58.039%;--b1: 240 10% 3.9216%;--b2: 270 4.3478% 9.0196%;--b3: 270 2.1739% 18.039%;--bc: 37.083 67.29% 58.039%;--in: 202.35 100% 70%;--su: 89.007 61.633% 51.961%;--wa: 53.906 68.817% 63.529%;--er: 0 100% 71.765%}[data-theme=dracula]{color-scheme:dark;--pf: 325.52 100% 58.98%;--sf: 264.71 89.474% 62.118%;--af: 31.02 100% 56.941%;--nf: 229.57 15.033% 24%;--b2: 231.43 14.894% 16.588%;--b3: 231.43 14.894% 14.929%;--pc: 325.52 100% 14.745%;--sc: 264.71 100% 15.529%;--ac: 31.02 100% 14.235%;--nc: 229.57 70.868% 86%;--inc: 190.53 100% 15.373%;--suc: 135.18 100% 12.941%;--wac: 64.909 100% 15.294%;--erc: 0 100% 93.333%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 325.52 100% 73.725%;--s: 264.71 89.474% 77.647%;--a: 31.02 100% 71.176%;--n: 229.57 15.033% 30%;--b1: 231.43 14.894% 18.431%;--bc: 60 30% 96.078%;--in: 190.53 96.61% 76.863%;--su: 135.18 94.444% 64.706%;--wa: 64.909 91.667% 76.471%;--er: 0 100% 66.667%}[data-theme=cmyk]{color-scheme:light;--pf: 202.72 83.251% 48.157%;--sf: 335.25 77.67% 47.686%;--af: 56.195 100% 47.843%;--nf: 0 0% 8.1569%;--b2: 0 0% 90%;--b3: 0 0% 81%;--bc: 0 0% 20%;--pc: 202.72 100% 12.039%;--sc: 335.25 100% 91.922%;--ac: 56.195 100% 11.961%;--nc: 0 0% 82.039%;--inc: 192.2 100% 10.431%;--suc: 291.06 100% 87.608%;--wac: 25.027 100% 11.333%;--erc: 3.956 100% 91.137%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 202.72 83.251% 60.196%;--s: 335.25 77.67% 59.608%;--a: 56.195 100% 59.804%;--n: 0 0% 10.196%;--b1: 0 0% 100%;--in: 192.2 48.361% 52.157%;--su: 291.06 48.454% 38.039%;--wa: 25.027 84.615% 56.667%;--er: 3.956 80.531% 55.686%}[data-theme=autumn]{color-scheme:light;--pf: 344.23 95.804% 22.431%;--sf: .44444 63.38% 46.588%;--af: 27.477 56.021% 50.039%;--nf: 22.105 17.117% 34.824%;--b2: 0 0% 85.059%;--b3: 0 0% 76.553%;--bc: 0 0% 18.902%;--pc: 344.23 100% 85.608%;--sc: .44444 100% 91.647%;--ac: 27.477 100% 12.51%;--nc: 22.105 100% 88.706%;--inc: 186.94 100% 9.9216%;--suc: 164.59 100% 8.6275%;--wac: 30.141 100% 9.9216%;--erc: 353.6 100% 89.765%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 344.23 95.804% 28.039%;--s: .44444 63.38% 58.235%;--a: 27.477 56.021% 62.549%;--n: 22.105 17.117% 43.529%;--b1: 0 0% 94.51%;--in: 186.94 47.826% 49.608%;--su: 164.59 33.636% 43.137%;--wa: 30.141 84.19% 49.608%;--er: 353.6 79.116% 48.824%}[data-theme=business]{color-scheme:dark;--pf: 210 64.103% 24.471%;--sf: 200 12.931% 43.608%;--af: 12.515 79.512% 47.843%;--nf: 212.73 13.58% 12.706%;--b2: 0 0% 11.294%;--b3: 0 0% 10.165%;--bc: 0 0% 82.51%;--pc: 210 100% 86.118%;--sc: 200 100% 10.902%;--ac: 12.515 100% 11.961%;--nc: 212.73 28.205% 83.176%;--inc: 199.15 100% 88.353%;--suc: 144 100% 11.137%;--wac: 39.231 100% 12.078%;--erc: 6.3415 100% 88.667%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 210 64.103% 30.588%;--s: 200 12.931% 54.51%;--a: 12.515 79.512% 59.804%;--n: 212.73 13.58% 15.882%;--b1: 0 0% 12.549%;--in: 199.15 100% 41.765%;--su: 144 30.973% 55.686%;--wa: 39.231 64.356% 60.392%;--er: 6.3415 55.656% 43.333%;--rounded-box: .25rem;--rounded-btn: .125rem;--rounded-badge: .125rem}[data-theme=acid]{color-scheme:light;--pf: 302.59 100% 40%;--sf: 27.294 100% 40%;--af: 72 98.425% 40.157%;--nf: 238.42 43.182% 13.804%;--b2: 0 0% 88.235%;--b3: 0 0% 79.412%;--bc: 0 0% 19.608%;--pc: 302.59 100% 90%;--sc: 27.294 100% 10%;--ac: 72 100% 10.039%;--nc: 238.42 99.052% 83.451%;--inc: 209.85 100% 11.569%;--suc: 148.87 100% 11.608%;--wac: 52.574 100% 11.451%;--erc: .78261 100% 89.02%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 302.59 100% 50%;--s: 27.294 100% 50%;--a: 72 98.425% 50.196%;--n: 238.42 43.182% 17.255%;--b1: 0 0% 98.039%;--in: 209.85 91.628% 57.843%;--su: 148.87 49.533% 58.039%;--wa: 52.574 92.661% 57.255%;--er: .78261 100% 45.098%;--rounded-box: 1.25rem;--rounded-btn: 1rem;--rounded-badge: 1rem}[data-theme=lemonade]{color-scheme:light;--pf: 88.8 96.154% 24.471%;--sf: 60 80.952% 43.765%;--af: 62.553 79.661% 70.745%;--nf: 238.42 43.182% 13.804%;--b2: 0 0% 90%;--b3: 0 0% 81%;--bc: 0 0% 20%;--pc: 88.8 100% 86.118%;--sc: 60 100% 10.941%;--ac: 62.553 100% 17.686%;--nc: 238.42 99.052% 83.451%;--inc: 191.61 79.118% 16.902%;--suc: 74.458 100% 15.725%;--wac: 50.182 100% 15.059%;--erc: .98361 100% 16.588%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 88.8 96.154% 30.588%;--s: 60 80.952% 54.706%;--a: 62.553 79.661% 88.431%;--n: 238.42 43.182% 17.255%;--b1: 0 0% 100%;--in: 191.61 39.241% 84.51%;--su: 74.458 76.147% 78.627%;--wa: 50.182 87.302% 75.294%;--er: .98361 70.115% 82.941%}[data-theme=night]{color-scheme:dark;--pf: 198.44 93.204% 47.686%;--sf: 234.45 89.474% 59.137%;--af: 328.85 85.621% 56%;--b2: 222.22 47.368% 10.059%;--b3: 222.22 47.368% 9.0529%;--bc: 222.22 65.563% 82.235%;--pc: 198.44 100% 11.922%;--sc: 234.45 100% 14.784%;--ac: 328.85 100% 14%;--nc: 217.24 75.772% 83.49%;--inc: 198.46 100% 9.6078%;--suc: 172.46 100% 10.078%;--wac: 40.61 100% 12.706%;--erc: 350.94 100% 14.235%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 198.44 93.204% 59.608%;--s: 234.45 89.474% 73.922%;--a: 328.85 85.621% 70%;--n: 217.24 32.584% 17.451%;--nf: 217.06 30.357% 21.961%;--b1: 222.22 47.368% 11.176%;--in: 198.46 90.204% 48.039%;--su: 172.46 66.008% 50.392%;--wa: 40.61 88.172% 63.529%;--er: 350.94 94.558% 71.176%}[data-theme=coffee]{color-scheme:dark;--pf: 29.583 66.667% 46.118%;--sf: 182.4 24.752% 15.843%;--af: 194.19 74.4% 19.608%;--nf: 300 20% 4.7059%;--b2: 306 18.519% 9.5294%;--b3: 306 18.519% 8.5765%;--pc: 29.583 100% 11.529%;--sc: 182.4 67.237% 83.961%;--ac: 194.19 100% 84.902%;--nc: 300 13.75% 81.176%;--inc: 171.15 100% 13.451%;--suc: 92.5 100% 12.471%;--wac: 43.125 100% 13.725%;--erc: 9.7561 100% 14.941%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 29.583 66.667% 57.647%;--s: 182.4 24.752% 19.804%;--a: 194.19 74.4% 24.51%;--n: 300 20% 5.8824%;--b1: 306 18.519% 10.588%;--bc: 36.667 8.3333% 42.353%;--in: 171.15 36.527% 67.255%;--su: 92.5 25% 62.353%;--wa: 43.125 100% 68.627%;--er: 9.7561 95.349% 74.706%}[data-theme=winter]{color-scheme:light;--pf: 211.79 100% 40.627%;--sf: 246.92 47.273% 34.51%;--af: 310.41 49.388% 41.569%;--nf: 217.02 92.157% 8%;--pc: 211.79 100% 90.157%;--sc: 246.92 100% 88.627%;--ac: 310.41 100% 90.392%;--nc: 217.02 100% 82%;--inc: 191.54 100% 15.608%;--suc: 181.5 100% 13.255%;--wac: 32.308 100% 16.706%;--erc: 0 100% 14.431%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 211.79 100% 50.784%;--s: 246.92 47.273% 43.137%;--a: 310.41 49.388% 51.961%;--n: 217.02 92.157% 10%;--b1: 0 0% 100%;--b2: 216.92 100% 97.451%;--b3: 218.82 43.59% 92.353%;--bc: 214.29 30.061% 31.961%;--in: 191.54 92.857% 78.039%;--su: 181.5 46.512% 66.275%;--wa: 32.308 61.905% 83.529%;--er: 0 63.38% 72.157%}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.btn{display:inline-flex;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-color:transparent;border-color:hsl(var(--n) / var(--tw-border-opacity));text-align:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);border-radius:var(--rounded-btn, .5rem);height:3rem;padding-left:1rem;padding-right:1rem;font-size:.875rem;line-height:1.25rem;line-height:1em;min-height:3rem;font-weight:600;text-transform:uppercase;text-transform:var(--btn-text-case, uppercase);text-decoration-line:none;border-width:var(--border-btn, 1px);animation:button-pop var(--animation-btn, .25s) ease-out;--tw-border-opacity: 1;--tw-bg-opacity: 1;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}.btn-disabled,.btn[disabled],.btn.loading,.btn.loading:hover{pointer-events:none}.btn.loading:before{margin-right:.5rem;height:1rem;width:1rem;border-radius:9999px;border-width:2px;animation:spin 2s linear infinite;content:"";border-top-color:transparent;border-left-color:transparent;border-bottom-color:currentColor;border-right-color:currentColor}@media (prefers-reduced-motion: reduce){.btn.loading:before{animation:spin 10s linear infinite}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.btn-group>input[type=radio].btn{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-group>input[type=radio].btn:before{content:attr(data-title)}.checkbox{flex-shrink:0;--chkbg: var(--bc);--chkfg: var(--b1);height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity: .2;border-radius:var(--rounded-btn, .5rem)}.label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding:.5rem .25rem}.input{flex-shrink:1;height:3rem;padding-left:1rem;padding-right:1rem;font-size:1rem;line-height:2;line-height:1.5rem;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity: 0;--tw-bg-opacity: 1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));border-radius:var(--rounded-btn, .5rem)}.input-group>.input{isolation:isolate}.input-group>*,.input-group>.input,.input-group>.textarea,.input-group>.select{border-radius:0}.link{cursor:pointer;text-decoration-line:underline}.modal{pointer-events:none;visibility:hidden;position:fixed;inset:0px;display:flex;justify-content:center;opacity:0;z-index:999;background-color:hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));--tw-bg-opacity: .4;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform,opacity,visibility;overflow-y:hidden;overscroll-behavior:contain}:where(.modal){align-items:center}.modal-box{max-height:calc(100vh - 5em);--tw-bg-opacity: 1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));padding:1.5rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);width:91.666667%;max-width:32rem;--tw-scale-x: .9;--tw-scale-y: .9;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-top-left-radius:var(--rounded-box, 1rem);border-top-right-radius:var(--rounded-box, 1rem);border-bottom-left-radius:var(--rounded-box, 1rem);border-bottom-right-radius:var(--rounded-box, 1rem);box-shadow:0 25px 50px -12px #00000040;overflow-y:auto;overscroll-behavior:contain}.modal-open,.modal:target,.modal-toggle:checked+.modal{pointer-events:auto;visibility:visible;opacity:1}.modal-action{display:flex;margin-top:1.5rem;justify-content:flex-end}.modal-toggle{position:fixed;height:0px;width:0px;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0}.btm-nav>* .label{font-size:1rem;line-height:1.5rem}.btn:active:hover,.btn:active:focus{animation:none;transform:scale(var(--btn-focus-scale, .95))}.btn:hover,.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--nf, var(--n)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--nf, var(--n)) / var(--tw-bg-opacity))}.btn:focus-visible{outline:2px solid hsl(var(--nf));outline-offset:2px}.btn.glass:hover,.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn.glass:focus-visible{outline:2px solid currentColor}.btn-disabled,.btn-disabled:hover,.btn[disabled],.btn[disabled]:hover{--tw-border-opacity: 0;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-bg-opacity: .2;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .2}.btn.loading.btn-square:before,.btn.loading.btn-circle:before{margin-right:0}.btn.loading.btn-xl:before,.btn.loading.btn-lg:before{height:1.25rem;width:1.25rem}.btn.loading.btn-sm:before,.btn.loading.btn-xs:before{height:.75rem;width:.75rem}.btn-group>input[type=radio]:checked.btn,.btn-group>.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-group>input[type=radio]:checked.btn:focus-visible,.btn-group>.btn-active:focus-visible{outline:2px solid hsl(var(--p))}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .95))}40%{transform:scale(1.02)}to{transform:scale(1)}}.checkbox:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px}.checkbox:checked,.checkbox[checked=true],.checkbox[aria-checked=true]{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-in-out;background-image:linear-gradient(-45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.checkbox:indeterminate{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-in-out;background-image:linear-gradient(90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(-90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(0deg,hsl(var(--chkbg)) 43%,hsl(var(--chkfg)) 43%,hsl(var(--chkfg)) 57%,hsl(var(--chkbg)) 57%)}.checkbox:disabled{cursor:not-allowed;border-color:transparent;--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));opacity:.2}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}[dir=rtl] .checkbox:checked,[dir=rtl] .checkbox[checked=true],[dir=rtl] .checkbox[aria-checked=true]{background-image:linear-gradient(45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(-45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.label a:hover{--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity))}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input:focus{outline:2px solid hsla(var(--bc) / .2);outline-offset:2px}.input-disabled,.input[disabled]{cursor:not-allowed;--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));--tw-text-opacity: .2}.input-disabled::-moz-placeholder,.input[disabled]::-moz-placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity: .2}.input-disabled::placeholder,.input[disabled]::placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity: .2}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}.modal-open .modal-box,.modal-toggle:checked+.modal .modal-box,.modal:target .modal-box{--tw-translate-y: 0px;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modal-action>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}@keyframes progress-loading{50%{left:107%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.btn-group .btn:not(:first-child):not(:last-child){border-radius:0}.btn-group .btn:first-child:not(:last-child){margin-top:-0px;margin-left:-1px;border-top-left-radius:var(--rounded-btn, .5rem);border-top-right-radius:0;border-bottom-left-radius:var(--rounded-btn, .5rem);border-bottom-right-radius:0}.btn-group .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:var(--rounded-btn, .5rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn, .5rem)}.btn-group-horizontal .btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-horizontal .btn:first-child:not(:last-child){margin-top:-0px;margin-left:-1px;border-top-left-radius:var(--rounded-btn, .5rem);border-top-right-radius:0;border-bottom-left-radius:var(--rounded-btn, .5rem);border-bottom-right-radius:0}.btn-group-horizontal .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:var(--rounded-btn, .5rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn, .5rem)}.btn-group-vertical .btn:first-child:not(:last-child){margin-top:-1px;margin-left:-0px;border-top-left-radius:var(--rounded-btn, .5rem);border-top-right-radius:var(--rounded-btn, .5rem);border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:var(--rounded-btn, .5rem);border-bottom-right-radius:var(--rounded-btn, .5rem)}.modal-bottom :where(.modal-box){width:100%;max-width:none;--tw-translate-y: 2.5rem;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-middle :where(.modal-box){width:91.666667%;max-width:32rem;--tw-translate-y: 0px;--tw-scale-x: .9;--tw-scale-y: .9;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-bottom-left-radius:var(--rounded-box, 1rem);border-bottom-right-radius:var(--rounded-box, 1rem)}.py-4{padding-top:1rem;padding-bottom:1rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-bold{font-weight:700}.text-red-400{--tw-text-opacity: 1;color:rgb(248 113 113 / var(--tw-text-opacity))}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function nt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function to(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = te(o) ? as(o) : to(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (te(e))
      return e;
    if (W(e))
      return e;
  }
}
const ls = /;(?![^(]*\))/g, us = /:([^]+)/, fs = /\/\*.*?\*\//gs;
function as(e) {
  const t = {};
  return e.replace(fs, "").split(ls).forEach((n) => {
    if (n) {
      const o = n.split(us);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function no(e) {
  let t = "";
  if (te(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const o = no(e[n]);
      o && (t += o + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ps = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ds = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", hs = /* @__PURE__ */ nt(ps), ms = /* @__PURE__ */ nt(ds), gs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _s = /* @__PURE__ */ nt(gs);
function rr(e) {
  return !!e || e === "";
}
const Es = (e) => te(e) ? e : e == null ? "" : P(e) || W(e) && (e.toString === lr || !j(e.toString)) ? JSON.stringify(e, sr, 2) : String(e), sr = (e, t) => t && t.__v_isRef ? sr(e, t.value) : ut(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : cr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : W(t) && !P(t) && !ur(t) ? String(t) : t, z = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, xt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ue = () => {
}, ir = () => !1, vs = /^on[^a-z]/, Kt = (e) => vs.test(e), cn = (e) => e.startsWith("onUpdate:"), se = Object.assign, oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, bs = Object.prototype.hasOwnProperty, H = (e, t) => bs.call(e, t), P = Array.isArray, ut = (e) => hn(e) === "[object Map]", cr = (e) => hn(e) === "[object Set]", j = (e) => typeof e == "function", te = (e) => typeof e == "string", ro = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", so = (e) => W(e) && j(e.then) && j(e.catch), lr = Object.prototype.toString, hn = (e) => lr.call(e), io = (e) => hn(e).slice(8, -1), ur = (e) => hn(e) === "[object Object]", co = (e) => te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gt = /* @__PURE__ */ nt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ns = /* @__PURE__ */ nt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ys = /-(\w)/g, Vt = mn((e) => e.replace(ys, (t, n) => n ? n.toUpperCase() : "")), Os = /\B([A-Z])/g, Ge = mn((e) => e.replace(Os, "-$1").toLowerCase()), gn = mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), it = mn((e) => e ? `on${gn(e)}` : ""), ln = (e, t) => !Object.is(e, t), $t = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, un = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, ws = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Co;
const fr = () => Co || (Co = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function An(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ve;
class xs {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ve, !t && Ve && (this.index = (Ve.scopes || (Ve.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ve;
      try {
        return Ve = this, t();
      } finally {
        Ve = n;
      }
    } else
      process.env.NODE_ENV !== "production" && An("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ve = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ve = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ds(e, t = Ve) {
  t && t.active && t.effects.push(e);
}
function Vs() {
  return Ve;
}
const Ft = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, ar = (e) => (e.w & et) > 0, pr = (e) => (e.n & et) > 0, Cs = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= et;
}, Ts = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      ar(r) && !pr(r) ? r.delete(e) : t[n++] = r, r.w &= ~et, r.n &= ~et;
    }
    t.length = n;
  }
}, Rn = /* @__PURE__ */ new WeakMap();
let Mt = 0, et = 1;
const Sn = 30;
let me;
const ft = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Fn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class lo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ds(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = me, n = Qe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = me, me = this, Qe = !0, et = 1 << ++Mt, Mt <= Sn ? Cs(this) : To(this), this.fn();
    } finally {
      Mt <= Sn && Ts(this), et = 1 << --Mt, me = this.parent, Qe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    me === this ? this.deferStop = !0 : this.active && (To(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function To(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Qe = !0;
const dr = [];
function Et() {
  dr.push(Qe), Qe = !1;
}
function vt() {
  const e = dr.pop();
  Qe = e === void 0 ? !0 : e;
}
function ge(e, t, n) {
  if (Qe && me) {
    let o = Rn.get(e);
    o || Rn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Ft());
    const s = process.env.NODE_ENV !== "production" ? { effect: me, target: e, type: t, key: n } : void 0;
    Hn(r, s);
  }
}
function Hn(e, t) {
  let n = !1;
  Mt <= Sn ? pr(e) || (e.n |= et, n = !ar(e)) : n = !e.has(me), n && (e.add(me), me.deps.push(e), process.env.NODE_ENV !== "production" && me.onTrack && me.onTrack(Object.assign({ effect: me }, t)));
}
function qe(e, t, n, o, r, s) {
  const c = Rn.get(e);
  if (!c)
    return;
  let l = [];
  if (t === "clear")
    l = [...c.values()];
  else if (n === "length" && P(e)) {
    const p = Number(o);
    c.forEach((m, a) => {
      (a === "length" || a >= p) && l.push(m);
    });
  } else
    switch (n !== void 0 && l.push(c.get(n)), t) {
      case "add":
        P(e) ? co(n) && l.push(c.get("length")) : (l.push(c.get(ft)), ut(e) && l.push(c.get(Fn)));
        break;
      case "delete":
        P(e) || (l.push(c.get(ft)), ut(e) && l.push(c.get(Fn)));
        break;
      case "set":
        ut(e) && l.push(c.get(ft));
        break;
    }
  const f = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? yt(l[0], f) : yt(l[0]));
  else {
    const p = [];
    for (const m of l)
      m && p.push(...m);
    process.env.NODE_ENV !== "production" ? yt(Ft(p), f) : yt(Ft(p));
  }
}
function yt(e, t) {
  const n = P(e) ? e : [...e];
  for (const o of n)
    o.computed && $o(o, t);
  for (const o of n)
    o.computed || $o(o, t);
}
function $o(e, t) {
  (e !== me || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(se({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const $s = /* @__PURE__ */ nt("__proto__,__v_isRef,__isVue"), hr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ro)
), Is = /* @__PURE__ */ _n(), Ps = /* @__PURE__ */ _n(!1, !0), Ms = /* @__PURE__ */ _n(!0), js = /* @__PURE__ */ _n(!0, !0), Io = /* @__PURE__ */ As();
function As() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = F(this);
      for (let s = 0, c = this.length; s < c; s++)
        ge(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(F)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Et();
      const o = F(this)[t].apply(this, n);
      return vt(), o;
    };
  }), e;
}
function Rs(e) {
  const t = F(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
function _n(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? yr : Nr : t ? br : vr).get(o))
      return o;
    const c = P(o);
    if (!e) {
      if (c && H(Io, r))
        return Reflect.get(Io, r, s);
      if (r === "hasOwnProperty")
        return Rs;
    }
    const l = Reflect.get(o, r, s);
    return (ro(r) ? hr.has(r) : $s(r)) || (e || ge(o, "get", r), t) ? l : le(l) ? c && co(r) ? l : l.value : W(l) ? e ? Or(l) : fo(l) : l;
  };
}
const Ss = /* @__PURE__ */ mr(), Fs = /* @__PURE__ */ mr(!0);
function mr(e = !1) {
  return function(n, o, r, s) {
    let c = n[o];
    if (gt(c) && le(c) && !le(r))
      return !1;
    if (!e && (!Ln(r) && !gt(r) && (c = F(c), r = F(r)), !P(n) && le(c) && !le(r)))
      return c.value = r, !0;
    const l = P(n) && co(o) ? Number(o) < n.length : H(n, o), f = Reflect.set(n, o, r, s);
    return n === F(s) && (l ? ln(r, c) && qe(n, "set", o, r, c) : qe(n, "add", o, r)), f;
  };
}
function Hs(e, t) {
  const n = H(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && qe(e, "delete", t, void 0, o), r;
}
function Ls(e, t) {
  const n = Reflect.has(e, t);
  return (!ro(t) || !hr.has(t)) && ge(e, "has", t), n;
}
function Us(e) {
  return ge(e, "iterate", P(e) ? "length" : ft), Reflect.ownKeys(e);
}
const gr = {
  get: Is,
  set: Ss,
  deleteProperty: Hs,
  has: Ls,
  ownKeys: Us
}, _r = {
  get: Ms,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && An(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && An(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ks = /* @__PURE__ */ se({}, gr, {
  get: Ps,
  set: Fs
}), Bs = /* @__PURE__ */ se({}, _r, {
  get: js
}), uo = (e) => e, En = (e) => Reflect.getPrototypeOf(e);
function zt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = F(e), s = F(t);
  n || (t !== s && ge(r, "get", t), ge(r, "get", s));
  const { has: c } = En(r), l = o ? uo : n ? po : ao;
  if (c.call(r, t))
    return l(e.get(t));
  if (c.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function Jt(e, t = !1) {
  const n = this.__v_raw, o = F(n), r = F(e);
  return t || (e !== r && ge(o, "has", e), ge(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Yt(e, t = !1) {
  return e = e.__v_raw, !t && ge(F(e), "iterate", ft), Reflect.get(e, "size", e);
}
function Po(e) {
  e = F(e);
  const t = F(this);
  return En(t).has.call(t, e) || (t.add(e), qe(t, "add", e, e)), this;
}
function Mo(e, t) {
  t = F(t);
  const n = F(this), { has: o, get: r } = En(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Er(n, o, e) : (e = F(e), s = o.call(n, e));
  const c = r.call(n, e);
  return n.set(e, t), s ? ln(t, c) && qe(n, "set", e, t, c) : qe(n, "add", e, t), this;
}
function jo(e) {
  const t = F(this), { has: n, get: o } = En(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Er(t, n, e) : (e = F(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, c = t.delete(e);
  return r && qe(t, "delete", e, void 0, s), c;
}
function Ao() {
  const e = F(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ut(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && qe(e, "clear", void 0, void 0, n), o;
}
function Zt(e, t) {
  return function(o, r) {
    const s = this, c = s.__v_raw, l = F(c), f = t ? uo : e ? po : ao;
    return !e && ge(l, "iterate", ft), c.forEach((p, m) => o.call(r, f(p), f(m), s));
  };
}
function Xt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = F(r), c = ut(s), l = e === "entries" || e === Symbol.iterator && c, f = e === "keys" && c, p = r[e](...o), m = n ? uo : t ? po : ao;
    return !t && ge(s, "iterate", f ? Fn : ft), {
      // iterator protocol
      next() {
        const { value: a, done: E } = p.next();
        return E ? { value: a, done: E } : {
          value: l ? [m(a[0]), m(a[1])] : m(a),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Je(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${gn(e)} operation ${n}failed: target is readonly.`, F(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Ks() {
  const e = {
    get(s) {
      return zt(this, s);
    },
    get size() {
      return Yt(this);
    },
    has: Jt,
    add: Po,
    set: Mo,
    delete: jo,
    clear: Ao,
    forEach: Zt(!1, !1)
  }, t = {
    get(s) {
      return zt(this, s, !1, !0);
    },
    get size() {
      return Yt(this);
    },
    has: Jt,
    add: Po,
    set: Mo,
    delete: jo,
    clear: Ao,
    forEach: Zt(!1, !0)
  }, n = {
    get(s) {
      return zt(this, s, !0);
    },
    get size() {
      return Yt(this, !0);
    },
    has(s) {
      return Jt.call(this, s, !0);
    },
    add: Je(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Je(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Je(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Je(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Zt(!0, !1)
  }, o = {
    get(s) {
      return zt(this, s, !0, !0);
    },
    get size() {
      return Yt(this, !0);
    },
    has(s) {
      return Jt.call(this, s, !0);
    },
    add: Je(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Je(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Je(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Je(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Zt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Xt(s, !1, !1), n[s] = Xt(s, !0, !1), t[s] = Xt(s, !1, !0), o[s] = Xt(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Ws, qs, zs, Js] = /* @__PURE__ */ Ks();
function vn(e, t) {
  const n = t ? e ? Js : zs : e ? qs : Ws;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(H(n, r) && r in o ? n : o, r, s);
}
const Ys = {
  get: /* @__PURE__ */ vn(!1, !1)
}, Zs = {
  get: /* @__PURE__ */ vn(!1, !0)
}, Xs = {
  get: /* @__PURE__ */ vn(!0, !1)
}, Qs = {
  get: /* @__PURE__ */ vn(!0, !0)
};
function Er(e, t, n) {
  const o = F(n);
  if (o !== n && t.call(e, o)) {
    const r = io(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const vr = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap();
function Gs(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ei(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gs(io(e));
}
function fo(e) {
  return gt(e) ? e : bn(e, !1, gr, Ys, vr);
}
function ti(e) {
  return bn(e, !1, ks, Zs, br);
}
function Or(e) {
  return bn(e, !0, _r, Xs, Nr);
}
function Ot(e) {
  return bn(e, !0, Bs, Qs, yr);
}
function bn(e, t, n, o, r) {
  if (!W(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const c = ei(e);
  if (c === 0)
    return e;
  const l = new Proxy(e, c === 2 ? o : n);
  return r.set(e, l), l;
}
function at(e) {
  return gt(e) ? at(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ln(e) {
  return !!(e && e.__v_isShallow);
}
function Un(e) {
  return at(e) || gt(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function wr(e) {
  return un(e, "__v_skip", !0), e;
}
const ao = (e) => W(e) ? fo(e) : e, po = (e) => W(e) ? Or(e) : e;
function ni(e) {
  Qe && me && (e = F(e), process.env.NODE_ENV !== "production" ? Hn(e.dep || (e.dep = Ft()), {
    target: e,
    type: "get",
    key: "value"
  }) : Hn(e.dep || (e.dep = Ft())));
}
function oi(e, t) {
  e = F(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? yt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : yt(n));
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function ri(e) {
  return le(e) ? e.value : e;
}
const si = {
  get: (e, t, n) => ri(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return le(r) && !le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function xr(e) {
  return at(e) ? e : new Proxy(e, si);
}
var Dr;
class ii {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Dr] = !1, this._dirty = !0, this.effect = new lo(t, () => {
      this._dirty || (this._dirty = !0, oi(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = F(this);
    return ni(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Dr = "__v_isReadonly";
function ci(e, t, n = !1) {
  let o, r;
  const s = j(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ue) : (o = e.get, r = e.set);
  const c = new ii(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (c.effect.onTrack = t.onTrack, c.effect.onTrigger = t.onTrigger), c;
}
const pt = [];
function en(e) {
  pt.push(e);
}
function tn() {
  pt.pop();
}
function N(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Et();
  const n = pt.length ? pt[pt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = li();
  if (o)
    We(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Dn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...ui(r)), console.warn(...s);
  }
  vt();
}
function li() {
  let e = pt[pt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function ui(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...fi(n));
  }), t;
}
function fi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Dn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...ai(e.props), s] : [r + s];
}
function ai(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Vr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Vr(e, t, n) {
  return te(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : le(t) ? (t = Vr(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : j(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
const ho = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function We(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Nn(s, t, n);
  }
  return r;
}
function Ie(e, t, n, o) {
  if (j(e)) {
    const s = We(e, t, n, o);
    return s && so(s) && s.catch((c) => {
      Nn(c, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Ie(e[s], t, n, o));
  return r;
}
function Nn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const c = t.proxy, l = process.env.NODE_ENV !== "production" ? ho[n] : n;
    for (; s; ) {
      const p = s.ec;
      if (p) {
        for (let m = 0; m < p.length; m++)
          if (p[m](e, c, l) === !1)
            return;
      }
      s = s.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      We(f, null, 10, [e, c, l]);
      return;
    }
  }
  pi(e, n, r, o);
}
function pi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = ho[t];
    if (n && en(n), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && tn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ht = !1, kn = !1;
const fe = [];
let He = 0;
const Dt = [];
let Fe = null, Ye = 0;
const Cr = /* @__PURE__ */ Promise.resolve();
let mo = null;
const di = 100;
function hi(e) {
  const t = mo || Cr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mi(e) {
  let t = He + 1, n = fe.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Lt(fe[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function yn(e) {
  (!fe.length || !fe.includes(e, Ht && e.allowRecurse ? He + 1 : He)) && (e.id == null ? fe.push(e) : fe.splice(mi(e.id), 0, e), Tr());
}
function Tr() {
  !Ht && !kn && (kn = !0, mo = Cr.then(Pr));
}
function gi(e) {
  const t = fe.indexOf(e);
  t > He && fe.splice(t, 1);
}
function $r(e) {
  P(e) ? Dt.push(...e) : (!Fe || !Fe.includes(e, e.allowRecurse ? Ye + 1 : Ye)) && Dt.push(e), Tr();
}
function Ro(e, t = Ht ? He + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < fe.length; t++) {
    const n = fe[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && go(e, n))
        continue;
      fe.splice(t, 1), t--, n();
    }
  }
}
function Ir(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)];
    if (Dt.length = 0, Fe) {
      Fe.push(...t);
      return;
    }
    for (Fe = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Fe.sort((n, o) => Lt(n) - Lt(o)), Ye = 0; Ye < Fe.length; Ye++)
      process.env.NODE_ENV !== "production" && go(e, Fe[Ye]) || Fe[Ye]();
    Fe = null, Ye = 0;
  }
}
const Lt = (e) => e.id == null ? 1 / 0 : e.id, _i = (e, t) => {
  const n = Lt(e) - Lt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Pr(e) {
  kn = !1, Ht = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fe.sort(_i);
  const t = process.env.NODE_ENV !== "production" ? (n) => go(e, n) : ue;
  try {
    for (He = 0; He < fe.length; He++) {
      const n = fe[He];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        We(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    He = 0, fe.length = 0, Ir(e), Ht = !1, mo = null, (fe.length || Dt.length) && Pr(e);
  }
}
function go(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > di) {
      const o = t.ownerInstance, r = o && ss(o.type);
      return N(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let dt = !1;
const Nt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (fr().__VUE_HMR_RUNTIME__ = {
  createRecord: Cn(Mr),
  rerender: Cn(bi),
  reload: Cn(Ni)
});
const _t = /* @__PURE__ */ new Map();
function Ei(e) {
  const t = e.type.__hmrId;
  let n = _t.get(t);
  n || (Mr(t, e.type), n = _t.get(t)), n.instances.add(e);
}
function vi(e) {
  _t.get(e.type.__hmrId).instances.delete(e);
}
function Mr(e, t) {
  return _t.has(e) ? !1 : (_t.set(e, {
    initialDef: At(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function At(e) {
  return is(e) ? e.__vccOpts : e;
}
function bi(e, t) {
  const n = _t.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, At(o.type).render = t), o.renderCache = [], dt = !0, o.update(), dt = !1;
  }));
}
function Ni(e, t) {
  const n = _t.get(e);
  if (!n)
    return;
  t = At(t), So(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = At(r.type);
    Nt.has(s) || (s !== n.initialDef && So(s, t), Nt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Nt.add(s), r.ceReload(t.styles), Nt.delete(s)) : r.parent ? yn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  $r(() => {
    for (const r of o)
      Nt.delete(At(r.type));
  });
}
function So(e, t) {
  se(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Cn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Le, jt = [], Bn = !1;
function Wt(e, ...t) {
  Le ? Le.emit(e, ...t) : Bn || jt.push({ event: e, args: t });
}
function jr(e, t) {
  var n, o;
  Le = e, Le ? (Le.enabled = !0, jt.forEach(({ event: r, args: s }) => Le.emit(r, ...s)), jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    jr(s, t);
  }), setTimeout(() => {
    Le || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Bn = !0, jt = []);
  }, 3e3)) : (Bn = !0, jt = []);
}
function yi(e, t) {
  Wt("app:init", e, t, {
    Fragment: Ce,
    Text: qt,
    Comment: Pe,
    Static: Rt
  });
}
function Oi(e) {
  Wt("app:unmount", e);
}
const wi = /* @__PURE__ */ _o(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), Ar = /* @__PURE__ */ _o(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), xi = /* @__PURE__ */ _o(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Di = (e) => {
  Le && typeof Le.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Le.cleanupBuffer(e) && xi(e);
};
function _o(e) {
  return (t) => {
    Wt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Vi = /* @__PURE__ */ Rr(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), Ci = /* @__PURE__ */ Rr(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Rr(e) {
  return (t, n, o) => {
    Wt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ti(e, t, n) {
  Wt("component:emit", e.appContext.app, e, t, n);
}
function $i(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || z;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: m, propsOptions: [a] } = e;
    if (m)
      if (!(t in m))
        (!a || !(it(t) in a)) && N(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${it(t)}" prop.`);
      else {
        const E = m[t];
        j(E) && (E(...n) || N(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), c = s && t.slice(7);
  if (c && c in o) {
    const m = `${c === "modelValue" ? "model" : c}Modifiers`, { number: a, trim: E } = o[m] || z;
    E && (r = n.map((V) => te(V) ? V.trim() : V)), a && (r = n.map(ws));
  }
  if (process.env.NODE_ENV !== "production" && Ti(e, t, r), process.env.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && o[it(m)] && N(`Event "${m}" is emitted in component ${Dn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ge(t)}" instead of "${t}".`);
  }
  let l, f = o[l = it(t)] || // also try camelCase event handler (#2249)
  o[l = it(Vt(t))];
  !f && s && (f = o[l = it(Ge(t))]), f && Ie(f, e, 6, r);
  const p = o[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ie(p, e, 6, r);
  }
}
function Sr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let c = {}, l = !1;
  if (!j(e)) {
    const f = (p) => {
      const m = Sr(p, t, !0);
      m && (l = !0, se(c, m));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !l ? (W(e) && o.set(e, null), null) : (P(s) ? s.forEach((f) => c[f] = null) : se(c, s), W(e) && o.set(e, c), c);
}
function On(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Ge(t)) || H(e, t));
}
let we = null, Fr = null;
function fn(e) {
  const t = we;
  return we = e, Fr = e && e.type.__scopeId || null, t;
}
function Ii(e, t = we, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && zo(-1);
    const s = fn(t);
    let c;
    try {
      c = e(...r);
    } finally {
      fn(s), o._d && zo(1);
    }
    return process.env.NODE_ENV !== "production" && Ar(t), c;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Kn = !1;
function an() {
  Kn = !0;
}
function Tn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [c], slots: l, attrs: f, emit: p, render: m, renderCache: a, data: E, setupState: V, ctx: B, inheritAttrs: R } = e;
  let J, ce;
  const ne = fn(e);
  process.env.NODE_ENV !== "production" && (Kn = !1);
  try {
    if (n.shapeFlag & 4) {
      const Q = r || o;
      J = Te(m.call(Q, Q, a, s, V, E, B)), ce = f;
    } else {
      const Q = t;
      process.env.NODE_ENV !== "production" && f === s && an(), J = Te(Q.length > 1 ? Q(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return an(), f;
        },
        slots: l,
        emit: p
      } : { attrs: f, slots: l, emit: p }) : Q(
        s,
        null
        /* we know it doesn't need it */
      )), ce = t.props ? f : Mi(f);
    }
  } catch (Q) {
    St.length = 0, Nn(
      Q,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), J = xe(Pe);
  }
  let Y = J, L;
  if (process.env.NODE_ENV !== "production" && J.patchFlag > 0 && J.patchFlag & 2048 && ([Y, L] = Pi(J)), ce && R !== !1) {
    const Q = Object.keys(ce), { shapeFlag: Me } = Y;
    if (Q.length) {
      if (Me & 7)
        c && Q.some(cn) && (ce = ji(ce, c)), Y = tt(Y, ce);
      else if (process.env.NODE_ENV !== "production" && !Kn && Y.type !== Pe) {
        const Ne = Object.keys(f), _e = [], ve = [];
        for (let w = 0, C = Ne.length; w < C; w++) {
          const T = Ne[w];
          Kt(T) ? cn(T) || _e.push(T[2].toLowerCase() + T.slice(3)) : ve.push(T);
        }
        ve.length && N(`Extraneous non-props attributes (${ve.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), _e.length && N(`Extraneous non-emits event listeners (${_e.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Fo(Y) && N("Runtime directive used on component with non-element root node. The directives will not function as intended."), Y = tt(Y), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Fo(Y) && N("Component inside <Transition> renders non-element root node that cannot be animated."), Y.transition = n.transition), process.env.NODE_ENV !== "production" && L ? L(Y) : J = Y, fn(ne), J;
}
const Pi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Hr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, c = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Te(o), c];
};
function Hr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (kt(o)) {
      if (o.type !== Pe || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Mi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ji = (e, t) => {
  const n = {};
  for (const o in e)
    (!cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Fo = (e) => e.shapeFlag & 7 || e.type === Pe;
function Ai(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: c, children: l, patchFlag: f } = t, p = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && dt || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Ho(o, c, p) : !!c;
    if (f & 8) {
      const m = t.dynamicProps;
      for (let a = 0; a < m.length; a++) {
        const E = m[a];
        if (c[E] !== o[E] && !On(p, E))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === c ? !1 : o ? c ? Ho(o, c, p) : !0 : !!c;
  return !1;
}
function Ho(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !On(n, s))
      return !0;
  }
  return !1;
}
function Ri({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Si = (e) => e.__isSuspense;
function Fi(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : $r(e);
}
function Hi(e, t) {
  if (!re)
    process.env.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = re.provides;
    const o = re.parent && re.parent.provides;
    o === n && (n = re.provides = Object.create(o)), n[e] = t;
  }
}
function nn(e, t, n = !1) {
  const o = re || we;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && j(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const Qt = {};
function $n(e, t, n) {
  return process.env.NODE_ENV !== "production" && !j(t) && N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Lr(e, t, n);
}
function Lr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: c } = z) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (L) => {
    N("Invalid watch source: ", L, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, f = Vs() === (re == null ? void 0 : re.scope) ? re : null;
  let p, m = !1, a = !1;
  if (le(e) ? (p = () => e.value, m = Ln(e)) : at(e) ? (p = () => e, o = !0) : P(e) ? (a = !0, m = e.some((L) => at(L) || Ln(L)), p = () => e.map((L) => {
    if (le(L))
      return L.value;
    if (at(L))
      return wt(L);
    if (j(L))
      return We(
        L,
        f,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(L);
  })) : j(e) ? t ? p = () => We(
    e,
    f,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : p = () => {
    if (!(f && f.isUnmounted))
      return E && E(), Ie(e, f, 3, [V]);
  } : (p = ue, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const L = p;
    p = () => wt(L());
  }
  let E, V = (L) => {
    E = ne.onStop = () => {
      We(
        L,
        f,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, B;
  if (Bt)
    if (V = ue, t ? n && Ie(t, f, 3, [
      p(),
      a ? [] : void 0,
      V
    ]) : p(), r === "sync") {
      const L = Zc();
      B = L.__watcherHandles || (L.__watcherHandles = []);
    } else
      return ue;
  let R = a ? new Array(e.length).fill(Qt) : Qt;
  const J = () => {
    if (ne.active)
      if (t) {
        const L = ne.run();
        (o || m || (a ? L.some((Q, Me) => ln(Q, R[Me])) : ln(L, R))) && (E && E(), Ie(t, f, 3, [
          L,
          // pass undefined as the old value when it's changed for the first time
          R === Qt ? void 0 : a && R[0] === Qt ? [] : R,
          V
        ]), R = L);
      } else
        ne.run();
  };
  J.allowRecurse = !!t;
  let ce;
  r === "sync" ? ce = J : r === "post" ? ce = () => Ee(J, f && f.suspense) : (J.pre = !0, f && (J.id = f.uid), ce = () => yn(J));
  const ne = new lo(p, ce);
  process.env.NODE_ENV !== "production" && (ne.onTrack = s, ne.onTrigger = c), t ? n ? J() : R = ne.run() : r === "post" ? Ee(ne.run.bind(ne), f && f.suspense) : ne.run();
  const Y = () => {
    ne.stop(), f && f.scope && oo(f.scope.effects, ne);
  };
  return B && B.push(Y), Y;
}
function Li(e, t, n) {
  const o = this.proxy, r = te(e) ? e.includes(".") ? Ur(o, e) : () => o[e] : e.bind(o, o);
  let s;
  j(t) ? s = t : (s = t.handler, n = t);
  const c = re;
  Ct(this);
  const l = Lr(r, s.bind(o), n);
  return c ? Ct(c) : mt(), l;
}
function Ur(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function wt(e, t) {
  if (!W(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), le(e))
    wt(e.value, t);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      wt(e[n], t);
  else if (cr(e) || ut(e))
    e.forEach((n) => {
      wt(n, t);
    });
  else if (ur(e))
    for (const n in e)
      wt(e[n], t);
  return e;
}
function Ui(e) {
  return j(e) ? { setup: e, name: e.name } : e;
}
const on = (e) => !!e.type.__asyncLoader, Eo = (e) => e.type.__isKeepAlive;
function ki(e, t) {
  kr(e, "a", t);
}
function Bi(e, t) {
  kr(e, "da", t);
}
function kr(e, t, n = re) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (wn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Eo(r.parent.vnode) && Ki(o, t, n, r), r = r.parent;
  }
}
function Ki(e, t, n, o) {
  const r = wn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Br(() => {
    oo(o[t], r);
  }, n);
}
function wn(e, t, n = re, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...c) => {
      if (n.isUnmounted)
        return;
      Et(), Ct(n);
      const l = Ie(t, n, e, c);
      return mt(), vt(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = it(ho[e].replace(/ hook$/, ""));
    N(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const ze = (e) => (t, n = re) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Bt || e === "sp") && wn(e, (...o) => t(...o), n)
), Wi = ze(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), qi = ze(
  "m"
  /* LifecycleHooks.MOUNTED */
), zi = ze(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Ji = ze(
  "u"
  /* LifecycleHooks.UPDATED */
), Yi = ze(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Br = ze(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Zi = ze(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Xi = ze(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Qi = ze(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Gi(e, t = re) {
  wn("ec", e, t);
}
function Kr(e) {
  Ns(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function rt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let c = 0; c < r.length; c++) {
    const l = r[c];
    s && (l.oldValue = s[c].value);
    let f = l.dir[o];
    f && (Et(), Ie(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), vt());
  }
}
const ec = Symbol(), Wn = (e) => e ? os(e) ? wo(e) || e.proxy : Wn(e.parent) : null, ht = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ot(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ot(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ot(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ot(e.refs) : e.refs,
    $parent: (e) => Wn(e.parent),
    $root: (e) => Wn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => yn(e.update)),
    $nextTick: (e) => e.n || (e.n = hi.bind(e.proxy)),
    $watch: (e) => Li.bind(e)
  })
), vo = (e) => e === "_" || e === "$", In = (e, t) => e !== z && !e.__isScriptSetup && H(e, t), Wr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: c, type: l, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const V = c[t];
      if (V !== void 0)
        switch (V) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (In(o, t))
          return c[t] = 1, o[t];
        if (r !== z && H(r, t))
          return c[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && H(p, t)
        )
          return c[t] = 3, s[t];
        if (n !== z && H(n, t))
          return c[t] = 4, n[t];
        qn && (c[t] = 0);
      }
    }
    const m = ht[t];
    let a, E;
    if (m)
      return t === "$attrs" && (ge(e, "get", t), process.env.NODE_ENV !== "production" && an()), m(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== z && H(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      E = f.config.globalProperties, H(E, t)
    )
      return E[t];
    process.env.NODE_ENV !== "production" && we && (!te(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== z && vo(t[0]) && H(r, t) ? N(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === we && N(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return In(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && H(r, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== z && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, c) {
    let l;
    return !!n[c] || e !== z && H(e, c) || In(t, c) || (l = s[0]) && H(l, c) || H(o, c) || H(ht, c) || H(r.config.globalProperties, c);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Wr.ownKeys = (e) => (N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function tc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ht).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ht[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ue
    });
  }), t;
}
function nc(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ue
    });
  });
}
function oc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (vo(o[0])) {
        N(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ue
      });
    }
  });
}
function rc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let qn = !0;
function sc(e) {
  const t = bo(e), n = e.proxy, o = e.ctx;
  qn = !1, t.beforeCreate && Lo(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: s,
    methods: c,
    watch: l,
    provide: f,
    inject: p,
    // lifecycle
    created: m,
    beforeMount: a,
    mounted: E,
    beforeUpdate: V,
    updated: B,
    activated: R,
    deactivated: J,
    beforeDestroy: ce,
    beforeUnmount: ne,
    destroyed: Y,
    unmounted: L,
    render: Q,
    renderTracked: Me,
    renderTriggered: Ne,
    errorCaptured: _e,
    serverPrefetch: ve,
    // public API
    expose: w,
    inheritAttrs: C,
    // assets
    components: T,
    directives: Z,
    filters: ae
  } = t, pe = process.env.NODE_ENV !== "production" ? rc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [M] = e.propsOptions;
    if (M)
      for (const S in M)
        pe("Props", S);
  }
  if (p && ic(p, o, pe, e.appContext.config.unwrapInjectedRef), c)
    for (const M in c) {
      const S = c[M];
      j(S) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, M, {
        value: S.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[M] = S.bind(n), process.env.NODE_ENV !== "production" && pe("Methods", M)) : process.env.NODE_ENV !== "production" && N(`Method "${M}" has type "${typeof S}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !j(r) && N("The data option must be a function. Plain object usage is no longer supported.");
    const M = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && so(M) && N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !W(M))
      process.env.NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = fo(M), process.env.NODE_ENV !== "production")
      for (const S in M)
        pe("Data", S), vo(S[0]) || Object.defineProperty(o, S, {
          configurable: !0,
          enumerable: !0,
          get: () => M[S],
          set: ue
        });
  }
  if (qn = !0, s)
    for (const M in s) {
      const S = s[M], ye = j(S) ? S.bind(n, n) : j(S.get) ? S.get.bind(n, n) : ue;
      process.env.NODE_ENV !== "production" && ye === ue && N(`Computed property "${M}" has no getter.`);
      const Ue = !j(S) && j(S.set) ? S.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        N(`Write operation failed: computed property "${M}" is readonly.`);
      } : ue, je = zc({
        get: ye,
        set: Ue
      });
      Object.defineProperty(o, M, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (Oe) => je.value = Oe
      }), process.env.NODE_ENV !== "production" && pe("Computed", M);
    }
  if (l)
    for (const M in l)
      qr(l[M], o, n, M);
  if (f) {
    const M = j(f) ? f.call(n) : f;
    Reflect.ownKeys(M).forEach((S) => {
      Hi(S, M[S]);
    });
  }
  m && Lo(
    m,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function G(M, S) {
    P(S) ? S.forEach((ye) => M(ye.bind(n))) : S && M(S.bind(n));
  }
  if (G(Wi, a), G(qi, E), G(zi, V), G(Ji, B), G(ki, R), G(Bi, J), G(Gi, _e), G(Qi, Me), G(Xi, Ne), G(Yi, ne), G(Br, L), G(Zi, ve), P(w))
    if (w.length) {
      const M = e.exposed || (e.exposed = {});
      w.forEach((S) => {
        Object.defineProperty(M, S, {
          get: () => n[S],
          set: (ye) => n[S] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Q && e.render === ue && (e.render = Q), C != null && (e.inheritAttrs = C), T && (e.components = T), Z && (e.directives = Z);
}
function ic(e, t, n = ue, o = !1) {
  P(e) && (e = zn(e));
  for (const r in e) {
    const s = e[r];
    let c;
    W(s) ? "default" in s ? c = nn(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : c = nn(s.from || r) : c = nn(s), le(c) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (l) => c.value = l
    }) : (process.env.NODE_ENV !== "production" && N(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = c) : t[r] = c, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Lo(e, t, n) {
  Ie(P(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function qr(e, t, n, o) {
  const r = o.includes(".") ? Ur(n, o) : () => n[o];
  if (te(e)) {
    const s = t[e];
    j(s) ? $n(r, s) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, s);
  } else if (j(e))
    $n(r, e.bind(n));
  else if (W(e))
    if (P(e))
      e.forEach((s) => qr(s, t, n, o));
    else {
      const s = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(s) ? $n(r, s, e) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && N(`Invalid watch option: "${o}"`, e);
}
function bo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: c } } = e.appContext, l = s.get(t);
  let f;
  return l ? f = l : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach((p) => pn(f, p, c, !0)), pn(f, t, c)), W(t) && s.set(t, f), f;
}
function pn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && pn(e, s, n, !0), r && r.forEach((c) => pn(e, c, n, !0));
  for (const c in t)
    if (o && c === "expose")
      process.env.NODE_ENV !== "production" && N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = cc[c] || n && n[c];
      e[c] = l ? l(e[c], t[c]) : t[c];
    }
  return e;
}
const cc = {
  data: Uo,
  props: ct,
  emits: ct,
  // objects
  methods: ct,
  computed: ct,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: ct,
  directives: ct,
  // watch
  watch: uc,
  // provide / inject
  provide: Uo,
  inject: lc
};
function Uo(e, t) {
  return t ? e ? function() {
    return se(j(e) ? e.call(this, this) : e, j(t) ? t.call(this, this) : t);
  } : t : e;
}
function lc(e, t) {
  return ct(zn(e), zn(t));
}
function zn(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ct(e, t) {
  return e ? se(se(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function uc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = he(e[o], t[o]);
  return n;
}
function fc(e, t, n, o = !1) {
  const r = {}, s = {};
  un(s, xn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), zr(e, t, r, s);
  for (const c in e.propsOptions[0])
    c in r || (r[c] = void 0);
  process.env.NODE_ENV !== "production" && Yr(t || {}, r, e), n ? e.props = o ? r : ti(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function ac(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function pc(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: c } } = e, l = F(r), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && ac(e)) && (o || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const m = e.vnode.dynamicProps;
      for (let a = 0; a < m.length; a++) {
        let E = m[a];
        if (On(e.emitsOptions, E))
          continue;
        const V = t[E];
        if (f)
          if (H(s, E))
            V !== s[E] && (s[E] = V, p = !0);
          else {
            const B = Vt(E);
            r[B] = Jn(
              f,
              l,
              B,
              V,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          V !== s[E] && (s[E] = V, p = !0);
      }
    }
  } else {
    zr(e, t, r, s) && (p = !0);
    let m;
    for (const a in l)
      (!t || // for camelCase
      !H(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = Ge(a)) === a || !H(t, m))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[m] !== void 0) && (r[a] = Jn(
        f,
        l,
        a,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[a]);
    if (s !== l)
      for (const a in s)
        (!t || !H(t, a)) && (delete s[a], p = !0);
  }
  p && qe(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Yr(t || {}, r, e);
}
function zr(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let c = !1, l;
  if (t)
    for (let f in t) {
      if (Gt(f))
        continue;
      const p = t[f];
      let m;
      r && H(r, m = Vt(f)) ? !s || !s.includes(m) ? n[m] = p : (l || (l = {}))[m] = p : On(e.emitsOptions, f) || (!(f in o) || p !== o[f]) && (o[f] = p, c = !0);
    }
  if (s) {
    const f = F(n), p = l || z;
    for (let m = 0; m < s.length; m++) {
      const a = s[m];
      n[a] = Jn(r, f, a, p[a], e, !H(p, a));
    }
  }
  return c;
}
function Jn(e, t, n, o, r, s) {
  const c = e[n];
  if (c != null) {
    const l = H(c, "default");
    if (l && o === void 0) {
      const f = c.default;
      if (c.type !== Function && j(f)) {
        const { propsDefaults: p } = r;
        n in p ? o = p[n] : (Ct(r), o = p[n] = f.call(null, t), mt());
      } else
        o = f;
    }
    c[
      0
      /* BooleanFlags.shouldCast */
    ] && (s && !l ? o = !1 : c[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === Ge(n)) && (o = !0));
  }
  return o;
}
function Jr(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, c = {}, l = [];
  let f = !1;
  if (!j(e)) {
    const m = (a) => {
      f = !0;
      const [E, V] = Jr(a, t, !0);
      se(c, E), V && l.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!s && !f)
    return W(e) && o.set(e, xt), xt;
  if (P(s))
    for (let m = 0; m < s.length; m++) {
      process.env.NODE_ENV !== "production" && !te(s[m]) && N("props must be strings when using array syntax.", s[m]);
      const a = Vt(s[m]);
      ko(a) && (c[a] = z);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !W(s) && N("invalid props options", s);
    for (const m in s) {
      const a = Vt(m);
      if (ko(a)) {
        const E = s[m], V = c[a] = P(E) || j(E) ? { type: E } : Object.assign({}, E);
        if (V) {
          const B = Ko(Boolean, V.type), R = Ko(String, V.type);
          V[
            0
            /* BooleanFlags.shouldCast */
          ] = B > -1, V[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = R < 0 || B < R, (B > -1 || H(V, "default")) && l.push(a);
        }
      }
    }
  }
  const p = [c, l];
  return W(e) && o.set(e, p), p;
}
function ko(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Yn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Bo(e, t) {
  return Yn(e) === Yn(t);
}
function Ko(e, t) {
  return P(t) ? t.findIndex((n) => Bo(n, e)) : j(t) && Bo(t, e) ? 0 : -1;
}
function Yr(e, t, n) {
  const o = F(t), r = n.propsOptions[0];
  for (const s in r) {
    let c = r[s];
    c != null && dc(s, o[s], c, !H(e, s) && !H(e, Ge(s)));
  }
}
function dc(e, t, n, o) {
  const { type: r, required: s, validator: c } = n;
  if (s && o) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const f = P(r) ? r : [r], p = [];
      for (let m = 0; m < f.length && !l; m++) {
        const { valid: a, expectedType: E } = mc(t, f[m]);
        p.push(E || ""), l = a;
      }
      if (!l) {
        N(gc(e, t, p));
        return;
      }
    }
    c && !c(t) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const hc = /* @__PURE__ */ nt("String,Number,Boolean,Function,Symbol,BigInt");
function mc(e, t) {
  let n;
  const o = Yn(t);
  if (hc(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = W(e) : o === "Array" ? n = P(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function gc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(gn).join(" | ")}`;
  const r = n[0], s = io(t), c = Wo(t, r), l = Wo(t, s);
  return n.length === 1 && qo(r) && !_c(r, s) && (o += ` with value ${c}`), o += `, got ${s} `, qo(s) && (o += `with value ${l}.`), o;
}
function Wo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function qo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function _c(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Zr = (e) => e[0] === "_" || e === "$stable", No = (e) => P(e) ? e.map(Te) : [Te(e)], Ec = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ii((...r) => (process.env.NODE_ENV !== "production" && re && N(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), No(t(...r))), n);
  return o._c = !1, o;
}, Xr = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Zr(r))
      continue;
    const s = e[r];
    if (j(s))
      t[r] = Ec(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && N(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const c = No(s);
      t[r] = () => c;
    }
  }
}, Qr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Eo(e.vnode) && N("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = No(t);
  e.slots.default = () => n;
}, vc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = F(t), un(t, "_", n)) : Xr(t, e.slots = {});
  } else
    e.slots = {}, t && Qr(e, t);
  un(e.slots, xn, 1);
}, bc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, c = z;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && dt ? se(r, t) : n && l === 1 ? s = !1 : (se(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, Xr(t, r)), c = t;
  } else
    t && (Qr(e, t), c = { default: 1 });
  if (s)
    for (const l in r)
      !Zr(l) && !(l in c) && delete r[l];
};
function Gr() {
  return {
    app: null,
    config: {
      isNativeTag: ir,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Nc = 0;
function yc(e, t) {
  return function(o, r = null) {
    j(o) || (o = Object.assign({}, o)), r != null && !W(r) && (process.env.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), r = null);
    const s = Gr(), c = /* @__PURE__ */ new Set();
    let l = !1;
    const f = s.app = {
      _uid: Nc++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Zo,
      get config() {
        return s.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && N("app.config cannot be replaced. Modify individual options instead.");
      },
      use(p, ...m) {
        return c.has(p) ? process.env.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : p && j(p.install) ? (c.add(p), p.install(f, ...m)) : j(p) ? (c.add(p), p(f, ...m)) : process.env.NODE_ENV !== "production" && N('A plugin must either be a function or an object with an "install" function.'), f;
      },
      mixin(p) {
        return s.mixins.includes(p) ? process.env.NODE_ENV !== "production" && N("Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")) : s.mixins.push(p), f;
      },
      component(p, m) {
        return process.env.NODE_ENV !== "production" && Xn(p, s.config), m ? (process.env.NODE_ENV !== "production" && s.components[p] && N(`Component "${p}" has already been registered in target app.`), s.components[p] = m, f) : s.components[p];
      },
      directive(p, m) {
        return process.env.NODE_ENV !== "production" && Kr(p), m ? (process.env.NODE_ENV !== "production" && s.directives[p] && N(`Directive "${p}" has already been registered in target app.`), s.directives[p] = m, f) : s.directives[p];
      },
      mount(p, m, a) {
        if (l)
          process.env.NODE_ENV !== "production" && N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const E = xe(o, r);
          return E.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(tt(E), p, a);
          }), m && t ? t(E, p) : e(E, p, a), l = !0, f._container = p, p.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = E.component, yi(f, Zo)), wo(E.component) || E.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, Oi(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(p, m) {
        return process.env.NODE_ENV !== "production" && p in s.provides && N(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`), s.provides[p] = m, f;
      }
    };
    return f;
  };
}
function Zn(e, t, n, o, r = !1) {
  if (P(e)) {
    e.forEach((E, V) => Zn(E, t && (P(t) ? t[V] : t), n, o, r));
    return;
  }
  if (on(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? wo(o.component) || o.component.proxy : o.el, c = r ? null : s, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const p = t && t.r, m = l.refs === z ? l.refs = {} : l.refs, a = l.setupState;
  if (p != null && p !== f && (te(p) ? (m[p] = null, H(a, p) && (a[p] = null)) : le(p) && (p.value = null)), j(f))
    We(f, l, 12, [c, m]);
  else {
    const E = te(f), V = le(f);
    if (E || V) {
      const B = () => {
        if (e.f) {
          const R = E ? H(a, f) ? a[f] : m[f] : f.value;
          r ? P(R) && oo(R, s) : P(R) ? R.includes(s) || R.push(s) : E ? (m[f] = [s], H(a, f) && (a[f] = m[f])) : (f.value = [s], e.k && (m[e.k] = f.value));
        } else
          E ? (m[f] = c, H(a, f) && (a[f] = c)) : V ? (f.value = c, e.k && (m[e.k] = c)) : process.env.NODE_ENV !== "production" && N("Invalid template ref type:", f, `(${typeof f})`);
      };
      c ? (B.id = -1, Ee(B, n)) : B();
    } else
      process.env.NODE_ENV !== "production" && N("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let It, Xe;
function Be(e, t) {
  e.appContext.config.performance && dn() && Xe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Vi(e, t, dn() ? Xe.now() : Date.now());
}
function Ke(e, t) {
  if (e.appContext.config.performance && dn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Xe.mark(o), Xe.measure(`<${Dn(e, e.type)}> ${t}`, n, o), Xe.clearMarks(n), Xe.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Ci(e, t, dn() ? Xe.now() : Date.now());
}
function dn() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, Xe = window.performance) : It = !1), It;
}
function Oc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ee = Fi;
function wc(e) {
  return xc(e);
}
function xc(e, t) {
  Oc();
  const n = fr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && jr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: c, createText: l, createComment: f, setText: p, setElementText: m, parentNode: a, nextSibling: E, setScopeId: V = ue, insertStaticContent: B } = e, R = (i, u, d, g = null, h = null, b = null, O = !1, v = null, y = process.env.NODE_ENV !== "production" && dt ? !1 : !!u.dynamicChildren) => {
    if (i === u)
      return;
    i && !Pt(i, u) && (g = k(i), be(i, h, b, !0), i = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: _, ref: D, shapeFlag: x } = u;
    switch (_) {
      case qt:
        J(i, u, d, g);
        break;
      case Pe:
        ce(i, u, d, g);
        break;
      case Rt:
        i == null ? ne(u, d, g, O) : process.env.NODE_ENV !== "production" && Y(i, u, d, O);
        break;
      case Ce:
        Z(i, u, d, g, h, b, O, v, y);
        break;
      default:
        x & 1 ? Me(i, u, d, g, h, b, O, v, y) : x & 6 ? ae(i, u, d, g, h, b, O, v, y) : x & 64 || x & 128 ? _.process(i, u, d, g, h, b, O, v, y, ee) : process.env.NODE_ENV !== "production" && N("Invalid VNode type:", _, `(${typeof _})`);
    }
    D != null && h && Zn(D, i && i.ref, b, u || i, !u);
  }, J = (i, u, d, g) => {
    if (i == null)
      o(u.el = l(u.children), d, g);
    else {
      const h = u.el = i.el;
      u.children !== i.children && p(h, u.children);
    }
  }, ce = (i, u, d, g) => {
    i == null ? o(u.el = f(u.children || ""), d, g) : u.el = i.el;
  }, ne = (i, u, d, g) => {
    [i.el, i.anchor] = B(i.children, u, d, g, i.el, i.anchor);
  }, Y = (i, u, d, g) => {
    if (u.children !== i.children) {
      const h = E(i.anchor);
      Q(i), [u.el, u.anchor] = B(u.children, d, h, g);
    } else
      u.el = i.el, u.anchor = i.anchor;
  }, L = ({ el: i, anchor: u }, d, g) => {
    let h;
    for (; i && i !== u; )
      h = E(i), o(i, d, g), i = h;
    o(u, d, g);
  }, Q = ({ el: i, anchor: u }) => {
    let d;
    for (; i && i !== u; )
      d = E(i), r(i), i = d;
    r(u);
  }, Me = (i, u, d, g, h, b, O, v, y) => {
    O = O || u.type === "svg", i == null ? Ne(u, d, g, h, b, O, v, y) : w(i, u, h, b, O, v, y);
  }, Ne = (i, u, d, g, h, b, O, v) => {
    let y, _;
    const { type: D, props: x, shapeFlag: $, transition: A, dirs: U } = i;
    if (y = i.el = c(i.type, b, x && x.is, x), $ & 8 ? m(y, i.children) : $ & 16 && ve(i.children, y, null, g, h, b && D !== "foreignObject", O, v), U && rt(i, null, g, "created"), _e(y, i, i.scopeId, O, g), x) {
      for (const K in x)
        K !== "value" && !Gt(K) && s(y, K, null, x[K], b, i.children, g, h, I);
      "value" in x && s(y, "value", null, x.value), (_ = x.onVnodeBeforeMount) && Se(_, g, i);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(y, "__vnode", {
      value: i,
      enumerable: !1
    }), Object.defineProperty(y, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), U && rt(i, null, g, "beforeMount");
    const q = (!h || h && !h.pendingBranch) && A && !A.persisted;
    q && A.beforeEnter(y), o(y, u, d), ((_ = x && x.onVnodeMounted) || q || U) && Ee(() => {
      _ && Se(_, g, i), q && A.enter(y), U && rt(i, null, g, "mounted");
    }, h);
  }, _e = (i, u, d, g, h) => {
    if (d && V(i, d), g)
      for (let b = 0; b < g.length; b++)
        V(i, g[b]);
    if (h) {
      let b = h.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = Hr(b.children) || b), u === b) {
        const O = h.vnode;
        _e(i, O, O.scopeId, O.slotScopeIds, h.parent);
      }
    }
  }, ve = (i, u, d, g, h, b, O, v, y = 0) => {
    for (let _ = y; _ < i.length; _++) {
      const D = i[_] = v ? Ze(i[_]) : Te(i[_]);
      R(null, D, u, d, g, h, b, O, v);
    }
  }, w = (i, u, d, g, h, b, O) => {
    const v = u.el = i.el;
    let { patchFlag: y, dynamicChildren: _, dirs: D } = u;
    y |= i.patchFlag & 16;
    const x = i.props || z, $ = u.props || z;
    let A;
    d && st(d, !1), (A = $.onVnodeBeforeUpdate) && Se(A, d, u, i), D && rt(u, i, d, "beforeUpdate"), d && st(d, !0), process.env.NODE_ENV !== "production" && dt && (y = 0, O = !1, _ = null);
    const U = h && u.type !== "foreignObject";
    if (_ ? (C(i.dynamicChildren, _, v, d, g, U, b), process.env.NODE_ENV !== "production" && d && d.type.__hmrId && rn(i, u)) : O || ye(i, u, v, null, d, g, U, b, !1), y > 0) {
      if (y & 16)
        T(v, u, x, $, d, g, h);
      else if (y & 2 && x.class !== $.class && s(v, "class", null, $.class, h), y & 4 && s(v, "style", x.style, $.style, h), y & 8) {
        const q = u.dynamicProps;
        for (let K = 0; K < q.length; K++) {
          const oe = q[K], De = x[oe], bt = $[oe];
          (bt !== De || oe === "value") && s(v, oe, De, bt, h, i.children, d, g, I);
        }
      }
      y & 1 && i.children !== u.children && m(v, u.children);
    } else
      !O && _ == null && T(v, u, x, $, d, g, h);
    ((A = $.onVnodeUpdated) || D) && Ee(() => {
      A && Se(A, d, u, i), D && rt(u, i, d, "updated");
    }, g);
  }, C = (i, u, d, g, h, b, O) => {
    for (let v = 0; v < u.length; v++) {
      const y = i[v], _ = u[v], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(y, _) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? a(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      R(y, _, D, null, g, h, b, O, !0);
    }
  }, T = (i, u, d, g, h, b, O) => {
    if (d !== g) {
      if (d !== z)
        for (const v in d)
          !Gt(v) && !(v in g) && s(i, v, d[v], null, O, u.children, h, b, I);
      for (const v in g) {
        if (Gt(v))
          continue;
        const y = g[v], _ = d[v];
        y !== _ && v !== "value" && s(i, v, _, y, O, u.children, h, b, I);
      }
      "value" in g && s(i, "value", d.value, g.value);
    }
  }, Z = (i, u, d, g, h, b, O, v, y) => {
    const _ = u.el = i ? i.el : l(""), D = u.anchor = i ? i.anchor : l("");
    let { patchFlag: x, dynamicChildren: $, slotScopeIds: A } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (dt || x & 2048) && (x = 0, y = !1, $ = null), A && (v = v ? v.concat(A) : A), i == null ? (o(_, d, g), o(D, d, g), ve(u.children, d, D, h, b, O, v, y)) : x > 0 && x & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (C(i.dynamicChildren, $, d, h, b, O, v), process.env.NODE_ENV !== "production" && h && h.type.__hmrId ? rn(i, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || h && u === h.subTree) && rn(
        i,
        u,
        !0
        /* shallow */
      )
    )) : ye(i, u, d, D, h, b, O, v, y);
  }, ae = (i, u, d, g, h, b, O, v, y) => {
    u.slotScopeIds = v, i == null ? u.shapeFlag & 512 ? h.ctx.activate(u, d, g, O, y) : pe(u, d, g, h, b, O, y) : G(i, u, y);
  }, pe = (i, u, d, g, h, b, O) => {
    const v = i.component = Hc(i, g, h);
    if (process.env.NODE_ENV !== "production" && v.type.__hmrId && Ei(v), process.env.NODE_ENV !== "production" && (en(i), Be(v, "mount")), Eo(i) && (v.ctx.renderer = ee), process.env.NODE_ENV !== "production" && Be(v, "init"), Uc(v), process.env.NODE_ENV !== "production" && Ke(v, "init"), v.asyncDep) {
      if (h && h.registerDep(v, M), !i.el) {
        const y = v.subTree = xe(Pe);
        ce(null, y, u, d);
      }
      return;
    }
    M(v, i, u, d, h, b, O), process.env.NODE_ENV !== "production" && (tn(), Ke(v, "mount"));
  }, G = (i, u, d) => {
    const g = u.component = i.component;
    if (Ai(i, u, d))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && en(u), S(g, u, d), process.env.NODE_ENV !== "production" && tn();
        return;
      } else
        g.next = u, gi(g.update), g.update();
    else
      u.el = i.el, g.vnode = u;
  }, M = (i, u, d, g, h, b, O) => {
    const v = () => {
      if (i.isMounted) {
        let { next: D, bu: x, u: $, parent: A, vnode: U } = i, q = D, K;
        process.env.NODE_ENV !== "production" && en(D || i.vnode), st(i, !1), D ? (D.el = U.el, S(i, D, O)) : D = U, x && $t(x), (K = D.props && D.props.onVnodeBeforeUpdate) && Se(K, A, D, U), st(i, !0), process.env.NODE_ENV !== "production" && Be(i, "render");
        const oe = Tn(i);
        process.env.NODE_ENV !== "production" && Ke(i, "render");
        const De = i.subTree;
        i.subTree = oe, process.env.NODE_ENV !== "production" && Be(i, "patch"), R(
          De,
          oe,
          // parent may have changed if it's in a teleport
          a(De.el),
          // anchor may have changed if it's in a fragment
          k(De),
          i,
          h,
          b
        ), process.env.NODE_ENV !== "production" && Ke(i, "patch"), D.el = oe.el, q === null && Ri(i, oe.el), $ && Ee($, h), (K = D.props && D.props.onVnodeUpdated) && Ee(() => Se(K, A, D, U), h), process.env.NODE_ENV !== "production" && Ar(i), process.env.NODE_ENV !== "production" && tn();
      } else {
        let D;
        const { el: x, props: $ } = u, { bm: A, m: U, parent: q } = i, K = on(u);
        if (st(i, !1), A && $t(A), !K && (D = $ && $.onVnodeBeforeMount) && Se(D, q, u), st(i, !0), x && Ae) {
          const oe = () => {
            process.env.NODE_ENV !== "production" && Be(i, "render"), i.subTree = Tn(i), process.env.NODE_ENV !== "production" && Ke(i, "render"), process.env.NODE_ENV !== "production" && Be(i, "hydrate"), Ae(x, i.subTree, i, h, null), process.env.NODE_ENV !== "production" && Ke(i, "hydrate");
          };
          K ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && oe()
          ) : oe();
        } else {
          process.env.NODE_ENV !== "production" && Be(i, "render");
          const oe = i.subTree = Tn(i);
          process.env.NODE_ENV !== "production" && Ke(i, "render"), process.env.NODE_ENV !== "production" && Be(i, "patch"), R(null, oe, d, g, i, h, b), process.env.NODE_ENV !== "production" && Ke(i, "patch"), u.el = oe.el;
        }
        if (U && Ee(U, h), !K && (D = $ && $.onVnodeMounted)) {
          const oe = u;
          Ee(() => Se(D, q, oe), h);
        }
        (u.shapeFlag & 256 || q && on(q.vnode) && q.vnode.shapeFlag & 256) && i.a && Ee(i.a, h), i.isMounted = !0, process.env.NODE_ENV !== "production" && wi(i), u = d = g = null;
      }
    }, y = i.effect = new lo(
      v,
      () => yn(_),
      i.scope
      // track it in component's effect scope
    ), _ = i.update = () => y.run();
    _.id = i.uid, st(i, !0), process.env.NODE_ENV !== "production" && (y.onTrack = i.rtc ? (D) => $t(i.rtc, D) : void 0, y.onTrigger = i.rtg ? (D) => $t(i.rtg, D) : void 0, _.ownerInstance = i), _();
  }, S = (i, u, d) => {
    u.component = i;
    const g = i.vnode.props;
    i.vnode = u, i.next = null, pc(i, u.props, g, d), bc(i, u.children, d), Et(), Ro(), vt();
  }, ye = (i, u, d, g, h, b, O, v, y = !1) => {
    const _ = i && i.children, D = i ? i.shapeFlag : 0, x = u.children, { patchFlag: $, shapeFlag: A } = u;
    if ($ > 0) {
      if ($ & 128) {
        je(_, x, d, g, h, b, O, v, y);
        return;
      } else if ($ & 256) {
        Ue(_, x, d, g, h, b, O, v, y);
        return;
      }
    }
    A & 8 ? (D & 16 && I(_, h, b), x !== _ && m(d, x)) : D & 16 ? A & 16 ? je(_, x, d, g, h, b, O, v, y) : I(_, h, b, !0) : (D & 8 && m(d, ""), A & 16 && ve(x, d, g, h, b, O, v, y));
  }, Ue = (i, u, d, g, h, b, O, v, y) => {
    i = i || xt, u = u || xt;
    const _ = i.length, D = u.length, x = Math.min(_, D);
    let $;
    for ($ = 0; $ < x; $++) {
      const A = u[$] = y ? Ze(u[$]) : Te(u[$]);
      R(i[$], A, d, null, h, b, O, v, y);
    }
    _ > D ? I(i, h, b, !0, !1, x) : ve(u, d, g, h, b, O, v, y, x);
  }, je = (i, u, d, g, h, b, O, v, y) => {
    let _ = 0;
    const D = u.length;
    let x = i.length - 1, $ = D - 1;
    for (; _ <= x && _ <= $; ) {
      const A = i[_], U = u[_] = y ? Ze(u[_]) : Te(u[_]);
      if (Pt(A, U))
        R(A, U, d, null, h, b, O, v, y);
      else
        break;
      _++;
    }
    for (; _ <= x && _ <= $; ) {
      const A = i[x], U = u[$] = y ? Ze(u[$]) : Te(u[$]);
      if (Pt(A, U))
        R(A, U, d, null, h, b, O, v, y);
      else
        break;
      x--, $--;
    }
    if (_ > x) {
      if (_ <= $) {
        const A = $ + 1, U = A < D ? u[A].el : g;
        for (; _ <= $; )
          R(null, u[_] = y ? Ze(u[_]) : Te(u[_]), d, U, h, b, O, v, y), _++;
      }
    } else if (_ > $)
      for (; _ <= x; )
        be(i[_], h, b, !0), _++;
    else {
      const A = _, U = _, q = /* @__PURE__ */ new Map();
      for (_ = U; _ <= $; _++) {
        const de = u[_] = y ? Ze(u[_]) : Te(u[_]);
        de.key != null && (process.env.NODE_ENV !== "production" && q.has(de.key) && N("Duplicate keys found during update:", JSON.stringify(de.key), "Make sure keys are unique."), q.set(de.key, _));
      }
      let K, oe = 0;
      const De = $ - U + 1;
      let bt = !1, xo = 0;
      const Tt = new Array(De);
      for (_ = 0; _ < De; _++)
        Tt[_] = 0;
      for (_ = A; _ <= x; _++) {
        const de = i[_];
        if (oe >= De) {
          be(de, h, b, !0);
          continue;
        }
        let Re;
        if (de.key != null)
          Re = q.get(de.key);
        else
          for (K = U; K <= $; K++)
            if (Tt[K - U] === 0 && Pt(de, u[K])) {
              Re = K;
              break;
            }
        Re === void 0 ? be(de, h, b, !0) : (Tt[Re - U] = _ + 1, Re >= xo ? xo = Re : bt = !0, R(de, u[Re], d, null, h, b, O, v, y), oe++);
      }
      const Do = bt ? Dc(Tt) : xt;
      for (K = Do.length - 1, _ = De - 1; _ >= 0; _--) {
        const de = U + _, Re = u[de], Vo = de + 1 < D ? u[de + 1].el : g;
        Tt[_] === 0 ? R(null, Re, d, Vo, h, b, O, v, y) : bt && (K < 0 || _ !== Do[K] ? Oe(
          Re,
          d,
          Vo,
          2
          /* MoveType.REORDER */
        ) : K--);
      }
    }
  }, Oe = (i, u, d, g, h = null) => {
    const { el: b, type: O, transition: v, children: y, shapeFlag: _ } = i;
    if (_ & 6) {
      Oe(i.component.subTree, u, d, g);
      return;
    }
    if (_ & 128) {
      i.suspense.move(u, d, g);
      return;
    }
    if (_ & 64) {
      O.move(i, u, d, ee);
      return;
    }
    if (O === Ce) {
      o(b, u, d);
      for (let x = 0; x < y.length; x++)
        Oe(y[x], u, d, g);
      o(i.anchor, u, d);
      return;
    }
    if (O === Rt) {
      L(i, u, d);
      return;
    }
    if (g !== 2 && _ & 1 && v)
      if (g === 0)
        v.beforeEnter(b), o(b, u, d), Ee(() => v.enter(b), h);
      else {
        const { leave: x, delayLeave: $, afterLeave: A } = v, U = () => o(b, u, d), q = () => {
          x(b, () => {
            U(), A && A();
          });
        };
        $ ? $(b, U, q) : q();
      }
    else
      o(b, u, d);
  }, be = (i, u, d, g = !1, h = !1) => {
    const { type: b, props: O, ref: v, children: y, dynamicChildren: _, shapeFlag: D, patchFlag: x, dirs: $ } = i;
    if (v != null && Zn(v, null, d, i, !0), D & 256) {
      u.ctx.deactivate(i);
      return;
    }
    const A = D & 1 && $, U = !on(i);
    let q;
    if (U && (q = O && O.onVnodeBeforeUnmount) && Se(q, u, i), D & 6)
      ot(i.component, d, g);
    else {
      if (D & 128) {
        i.suspense.unmount(d, g);
        return;
      }
      A && rt(i, null, u, "beforeUnmount"), D & 64 ? i.type.remove(i, u, d, h, ee, g) : _ && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Ce || x > 0 && x & 64) ? I(_, u, d, !1, !0) : (b === Ce && x & 384 || !h && D & 16) && I(y, u, d), g && ke(i);
    }
    (U && (q = O && O.onVnodeUnmounted) || A) && Ee(() => {
      q && Se(q, u, i), A && rt(i, null, u, "unmounted");
    }, d);
  }, ke = (i) => {
    const { type: u, el: d, anchor: g, transition: h } = i;
    if (u === Ce) {
      process.env.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048 && h && !h.persisted ? i.children.forEach((O) => {
        O.type === Pe ? r(O.el) : ke(O);
      }) : Vn(d, g);
      return;
    }
    if (u === Rt) {
      Q(i);
      return;
    }
    const b = () => {
      r(d), h && !h.persisted && h.afterLeave && h.afterLeave();
    };
    if (i.shapeFlag & 1 && h && !h.persisted) {
      const { leave: O, delayLeave: v } = h, y = () => O(d, b);
      v ? v(i.el, b, y) : y();
    } else
      b();
  }, Vn = (i, u) => {
    let d;
    for (; i !== u; )
      d = E(i), r(i), i = d;
    r(u);
  }, ot = (i, u, d) => {
    process.env.NODE_ENV !== "production" && i.type.__hmrId && vi(i);
    const { bum: g, scope: h, update: b, subTree: O, um: v } = i;
    g && $t(g), h.stop(), b && (b.active = !1, be(O, i, u, d)), v && Ee(v, u), Ee(() => {
      i.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Di(i);
  }, I = (i, u, d, g = !1, h = !1, b = 0) => {
    for (let O = b; O < i.length; O++)
      be(i[O], u, d, g, h);
  }, k = (i) => i.shapeFlag & 6 ? k(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : E(i.anchor || i.el), X = (i, u, d) => {
    i == null ? u._vnode && be(u._vnode, null, null, !0) : R(u._vnode || null, i, u, null, null, null, d), Ro(), Ir(), u._vnode = i;
  }, ee = {
    p: R,
    um: be,
    m: Oe,
    r: ke,
    mt: pe,
    mc: ve,
    pc: ye,
    pbc: C,
    n: k,
    o: e
  };
  let ie, Ae;
  return t && ([ie, Ae] = t(ee)), {
    render: X,
    hydrate: ie,
    createApp: yc(X, ie)
  };
}
function st({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function rn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (P(o) && P(r))
    for (let s = 0; s < o.length; s++) {
      const c = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Ze(r[s]), l.el = c.el), n || rn(c, l)), l.type === qt && (l.el = c.el), process.env.NODE_ENV !== "production" && l.type === Pe && !l.el && (l.el = c.el);
    }
}
function Dc(e) {
  const t = e.slice(), n = [0];
  let o, r, s, c, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const p = e[o];
    if (p !== 0) {
      if (r = n[n.length - 1], e[r] < p) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, c = n.length - 1; s < c; )
        l = s + c >> 1, e[n[l]] < p ? s = l + 1 : c = l;
      p < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, c = n[s - 1]; s-- > 0; )
    n[s] = c, c = t[c];
  return n;
}
const Vc = (e) => e.__isTeleport, Ce = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), qt = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Pe = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Rt = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), St = [];
let $e = null;
function Cc(e = !1) {
  St.push($e = e ? null : []);
}
function Tc() {
  St.pop(), $e = St[St.length - 1] || null;
}
let Ut = 1;
function zo(e) {
  Ut += e;
}
function $c(e) {
  return e.dynamicChildren = Ut > 0 ? $e || xt : null, Tc(), Ut > 0 && $e && $e.push(e), e;
}
function Ic(e, t, n, o, r, s) {
  return $c(yo(
    e,
    t,
    n,
    o,
    r,
    s,
    !0
    /* isBlock */
  ));
}
function kt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Nt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Pc = (...e) => ts(...e), xn = "__vInternal", es = ({ key: e }) => e ?? null, sn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? te(e) || le(e) || j(e) ? { i: we, r: e, k: t, f: !!n } : e : null;
function yo(e, t = null, n = null, o = 0, r = null, s = e === Ce ? 0 : 1, c = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && es(t),
    ref: t && sn(t),
    scopeId: Fr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: we
  };
  return l ? (Oo(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= te(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && N("VNode created with invalid key (NaN). VNode type:", f.type), Ut > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  $e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && $e.push(f), f;
}
const xe = process.env.NODE_ENV !== "production" ? Pc : ts;
function ts(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === ec) && (process.env.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = Pe), kt(e)) {
    const l = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Oo(l, n), Ut > 0 && !s && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag |= -2, l;
  }
  if (is(e) && (e = e.__vccOpts), t) {
    t = Mc(t);
    let { class: l, style: f } = t;
    l && !te(l) && (t.class = no(l)), W(f) && (Un(f) && !P(f) && (f = se({}, f)), t.style = to(f));
  }
  const c = te(e) ? 1 : Si(e) ? 128 : Vc(e) ? 64 : W(e) ? 4 : j(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && Un(e) && (e = F(e), N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), yo(e, t, n, o, r, c, s, !0);
}
function Mc(e) {
  return e ? Un(e) || xn in e ? se({}, e) : e : null;
}
function tt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: c } = e, l = t ? Rc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && es(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? P(r) ? r.concat(sn(t)) : [r, sn(t)] : sn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && P(c) ? c.map(ns) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function ns(e) {
  const t = tt(e);
  return P(e.children) && (t.children = e.children.map(ns)), t;
}
function jc(e = " ", t = 0) {
  return xe(qt, null, e, t);
}
function Ac(e, t) {
  const n = xe(Rt, null, e);
  return n.staticCount = t, n;
}
function Te(e) {
  return e == null || typeof e == "boolean" ? xe(Pe) : P(e) ? xe(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ze(e) : xe(qt, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function Oo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Oo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(xn in t) ? t._ctx = we : r === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    j(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [jc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Rc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = no([t.class, o.class]));
      else if (r === "style")
        t.style = to([t.style, o.style]);
      else if (Kt(r)) {
        const s = t[r], c = o[r];
        c && s !== c && !(P(s) && s.includes(c)) && (t[r] = s ? [].concat(s, c) : c);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Se(e, t, n, o = null) {
  Ie(e, t, 7, [
    n,
    o
  ]);
}
const Sc = Gr();
let Fc = 0;
function Hc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Sc, s = {
    uid: Fc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new xs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Jr(o, r),
    emitsOptions: Sr(o, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: z,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: z,
    data: z,
    props: z,
    attrs: z,
    slots: z,
    refs: z,
    setupState: z,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = tc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = $i.bind(null, s), e.ce && e.ce(s), s;
}
let re = null;
const Ct = (e) => {
  re = e, e.scope.on();
}, mt = () => {
  re && re.scope.off(), re = null;
}, Lc = /* @__PURE__ */ nt("slot,component");
function Xn(e, t) {
  const n = t.isNativeTag || ir;
  (Lc(e) || n(e)) && N("Do not use built-in or reserved HTML elements as component id: " + e);
}
function os(e) {
  return e.vnode.shapeFlag & 4;
}
let Bt = !1;
function Uc(e, t = !1) {
  Bt = t;
  const { props: n, children: o } = e.vnode, r = os(e);
  fc(e, n, r, t), vc(e, o);
  const s = r ? kc(e, t) : void 0;
  return Bt = !1, s;
}
function kc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && Xn(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let c = 0; c < s.length; c++)
        Xn(s[c], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let c = 0; c < s.length; c++)
        Kr(s[c]);
    }
    o.compilerOptions && Bc() && N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = wr(new Proxy(e.ctx, Wr)), process.env.NODE_ENV !== "production" && nc(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Kc(e) : null;
    Ct(e), Et();
    const c = We(r, e, 0, [process.env.NODE_ENV !== "production" ? Ot(e.props) : e.props, s]);
    if (vt(), mt(), so(c)) {
      if (c.then(mt, mt), t)
        return c.then((l) => {
          Jo(e, l, t);
        }).catch((l) => {
          Nn(
            l,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        N(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Jo(e, c, t);
  } else
    rs(e, t);
}
function Jo(e, t, n) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? (process.env.NODE_ENV !== "production" && kt(t) && N("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = xr(t), process.env.NODE_ENV !== "production" && oc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && N(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), rs(e, n);
}
let Qn;
const Bc = () => !Qn;
function rs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Qn && !o.render) {
      const r = o.template || bo(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Be(e, "compile");
        const { isCustomElement: s, compilerOptions: c } = e.appContext.config, { delimiters: l, compilerOptions: f } = o, p = se(se({
          isCustomElement: s,
          delimiters: l
        }, c), f);
        o.render = Qn(r, p), process.env.NODE_ENV !== "production" && Ke(e, "compile");
      }
    }
    e.render = o.render || ue;
  }
  Ct(e), Et(), sc(e), vt(), mt(), process.env.NODE_ENV !== "production" && !o.render && e.render === ue && !t && (o.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : N("Component is missing template or render function."));
}
function Yo(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return an(), ge(e, "get", "$attrs"), t[n];
    },
    set() {
      return N("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return N("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ge(e, "get", "$attrs"), t[n];
    }
  });
}
function Kc(e) {
  const t = (o) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && N("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (P(o) ? r = "array" : le(o) && (r = "ref")), r !== "object" && N(`expose() should be passed a plain object, received ${r}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Yo(e));
    },
    get slots() {
      return Ot(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Yo(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function wo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(xr(wr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ht)
          return ht[n](e);
      },
      has(t, n) {
        return n in t || n in ht;
      }
    }));
}
const Wc = /(?:^|[-_])(\w)/g, qc = (e) => e.replace(Wc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ss(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dn(e, t, n = !1) {
  let o = ss(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const c in s)
        if (s[c] === t)
          return c;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? qc(o) : n ? "App" : "Anonymous";
}
function is(e) {
  return j(e) && "__vccOpts" in e;
}
const zc = (e, t) => ci(e, t, Bt);
function Jc(e, t, n) {
  const o = arguments.length;
  return o === 2 ? W(t) && !P(t) ? kt(t) ? xe(e, null, [t]) : xe(e, t) : xe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && kt(n) && (n = [n]), xe(e, t, n));
}
const Yc = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Zc = () => {
  {
    const e = nn(Yc);
    return e || process.env.NODE_ENV !== "production" && N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Pn(e) {
  return !!(e && e.__v_isShallow);
}
function Xc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(a) {
      return W(a) ? a.__isVue ? ["div", e, "VueInstance"] : le(a) ? [
        "div",
        {},
        ["span", e, m(a)],
        "<",
        l(a.value),
        ">"
      ] : at(a) ? [
        "div",
        {},
        ["span", e, Pn(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${gt(a) ? " (readonly)" : ""}`
      ] : gt(a) ? [
        "div",
        {},
        ["span", e, Pn(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...s(a.$)
        ];
    }
  };
  function s(a) {
    const E = [];
    a.type.props && a.props && E.push(c("props", F(a.props))), a.setupState !== z && E.push(c("setup", a.setupState)), a.data !== z && E.push(c("data", F(a.data)));
    const V = f(a, "computed");
    V && E.push(c("computed", V));
    const B = f(a, "inject");
    return B && E.push(c("injected", B)), E.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), E;
  }
  function c(a, E) {
    return E = se({}, E), Object.keys(E).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(E).map((V) => [
          "div",
          {},
          ["span", o, V + ": "],
          l(E[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, E = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : W(a) ? ["object", { object: E ? F(a) : a }] : ["span", n, String(a)];
  }
  function f(a, E) {
    const V = a.type;
    if (j(V))
      return;
    const B = {};
    for (const R in a.ctx)
      p(V, R, E) && (B[R] = a.ctx[R]);
    return B;
  }
  function p(a, E, V) {
    const B = a[V];
    if (P(B) && B.includes(E) || W(B) && E in B || a.extends && p(a.extends, E, V) || a.mixins && a.mixins.some((R) => p(R, E, V)))
      return !0;
  }
  function m(a) {
    return Pn(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Zo = "3.2.47", Qc = "http://www.w3.org/2000/svg", lt = typeof document < "u" ? document : null, Xo = lt && /* @__PURE__ */ lt.createElement("template"), Gc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? lt.createElementNS(Qc, e) : lt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => lt.createTextNode(e),
  createComment: (e) => lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const c = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      Xo.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = Xo.content;
      if (o) {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function el(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function tl(e, t, n) {
  const o = e.style, r = te(n);
  if (n && !r) {
    if (t && !te(t))
      for (const s in t)
        n[s] == null && Gn(o, s, "");
    for (const s in n)
      Gn(o, s, n[s]);
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const nl = /[^\\];\s*$/, Qo = /\s*!important$/;
function Gn(e, t, n) {
  if (P(n))
    n.forEach((o) => Gn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && nl.test(n) && N(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = ol(e, t);
    Qo.test(n) ? e.setProperty(Ge(o), n.replace(Qo, ""), "important") : e[o] = n;
  }
}
const Go = ["Webkit", "Moz", "ms"], Mn = {};
function ol(e, t) {
  const n = Mn[t];
  if (n)
    return n;
  let o = Vt(t);
  if (o !== "filter" && o in e)
    return Mn[t] = o;
  o = gn(o);
  for (let r = 0; r < Go.length; r++) {
    const s = Go[r] + o;
    if (s in e)
      return Mn[t] = s;
  }
  return t;
}
const er = "http://www.w3.org/1999/xlink";
function rl(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(er, t.slice(6, t.length)) : e.setAttributeNS(er, t, n);
  else {
    const s = _s(t);
    n == null || s && !rr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function sl(e, t, n, o, r, s, c) {
  if (t === "innerHTML" || t === "textContent") {
    o && c(o, r, s), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const f = n ?? "";
    (e.value !== f || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = rr(n) : n == null && f === "string" ? (n = "", l = !0) : f === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    process.env.NODE_ENV !== "production" && !l && N(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, f);
  }
  l && e.removeAttribute(t);
}
function il(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function cl(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function ll(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), c = s[t];
  if (o && c)
    c.value = o;
  else {
    const [l, f] = ul(t);
    if (o) {
      const p = s[t] = pl(o, r);
      il(e, l, p, f);
    } else
      c && (cl(e, l, c, f), s[t] = void 0);
  }
}
const tr = /(?:Once|Passive|Capture)$/;
function ul(e) {
  let t;
  if (tr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(tr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ge(e.slice(2)), t];
}
let jn = 0;
const fl = /* @__PURE__ */ Promise.resolve(), al = () => jn || (fl.then(() => jn = 0), jn = Date.now());
function pl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ie(dl(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = al(), n;
}
function dl(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const nr = /^on[a-z]/, hl = (e, t, n, o, r = !1, s, c, l, f) => {
  t === "class" ? el(e, o, r) : t === "style" ? tl(e, n, o) : Kt(t) ? cn(t) || ll(e, t, n, o, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ml(e, t, o, r)) ? sl(e, t, o, s, c, l, f) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), rl(e, t, o, r));
};
function ml(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && nr.test(t) && j(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || nr.test(t) && te(n) ? !1 : t in e;
}
const gl = /* @__PURE__ */ se({ patchProp: hl }, Gc);
let or;
function _l() {
  return or || (or = wc(gl));
}
const El = (...e) => {
  const t = _l().createApp(...e);
  process.env.NODE_ENV !== "production" && (vl(t), bl(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Nl(o);
    if (!r)
      return;
    const s = t._component;
    !j(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const c = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), c;
  }, t;
};
function vl(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => hs(t) || ms(t),
    writable: !1
  });
}
function bl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return N(o), n;
      },
      set() {
        N(o);
      }
    });
  }
}
function Nl(e) {
  if (te(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && N(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function yl() {
  Xc();
}
process.env.NODE_ENV !== "production" && yl();
var Ol = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, eo = {}, wl = {
  get exports() {
    return eo;
  },
  set exports(e) {
    eo = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(typeof self < "u" ? self : Ol, function() {
    return (() => {
      var n = { d: (w, C) => {
        for (var T in C)
          n.o(C, T) && !n.o(w, T) && Object.defineProperty(w, T, { enumerable: !0, get: C[T] });
      } };
      n.g = function() {
        if (typeof globalThis == "object")
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch {
          if (typeof window == "object")
            return window;
        }
      }(), n.o = (w, C) => Object.prototype.hasOwnProperty.call(w, C);
      var o = {};
      n.d(o, { default: () => ve });
      const r = (w) => {
        const C = /* @__PURE__ */ Object.create(null);
        return (T) => C[T] || (C[T] = w(T));
      }, s = r((w) => w.charAt(0).toUpperCase() + w.slice(1)), c = r((w) => w ? `on${s(w)}` : "");
      var l = /-(\w)/g, f = function(w) {
        return w.replace(l, function(C, T) {
          return T ? T.toUpperCase() : "";
        });
      }, p = /\B([A-Z])/g, m = function(w) {
        return w.replace(p, "-$1").toLowerCase();
      };
      function a(w, C) {
        return new CustomEvent(w, { bubbles: !1, cancelable: !1, detail: C.length === 1 ? C[0] : C });
      }
      var E = function(w) {
        return /function Boolean/.test(String(w));
      }, V = function(w) {
        return /function Number/.test(String(w));
      };
      function B(w, C) {
        if (w.nodeType === 3)
          return w.data.trim() ? w.data : null;
        if (w.nodeType === 1) {
          var T = { attrs: R(w), domProps: { innerHTML: w.innerHTML } };
          return T.attrs.slot && (T.slot = T.attrs.slot, delete T.attrs.slot), C(w.tagName, T);
        }
        return null;
      }
      function R(w) {
        for (var C = {}, T = 0, Z = w.attributes.length; T < Z; T++) {
          var ae = w.attributes[T];
          C[ae.nodeName] = ae.nodeValue;
        }
        return C;
      }
      function J(w) {
        return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
          return typeof C;
        } : function(C) {
          return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
        }, J(w);
      }
      function ce(w, C) {
        for (var T = 0; T < C.length; T++) {
          var Z = C[T];
          Z.enumerable = Z.enumerable || !1, Z.configurable = !0, "value" in Z && (Z.writable = !0), Object.defineProperty(w, Z.key, Z);
        }
      }
      function ne(w, C) {
        return !C || J(C) !== "object" && typeof C != "function" ? Y(w) : C;
      }
      function Y(w) {
        if (w === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return w;
      }
      function L(w) {
        var C = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
        return L = function(T) {
          if (T === null || (Z = T, Function.toString.call(Z).indexOf("[native code]") === -1))
            return T;
          var Z;
          if (typeof T != "function")
            throw new TypeError("Super expression must either be null or a function");
          if (C !== void 0) {
            if (C.has(T))
              return C.get(T);
            C.set(T, ae);
          }
          function ae() {
            return Q(T, arguments, _e(this).constructor);
          }
          return ae.prototype = Object.create(T.prototype, { constructor: { value: ae, enumerable: !1, writable: !0, configurable: !0 } }), Ne(ae, T);
        }, L(w);
      }
      function Q(w, C, T) {
        return Q = Me() ? Reflect.construct : function(Z, ae, pe) {
          var G = [null];
          G.push.apply(G, ae);
          var M = new (Function.bind.apply(Z, G))();
          return pe && Ne(M, pe.prototype), M;
        }, Q.apply(null, arguments);
      }
      function Me() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function Ne(w, C) {
        return Ne = Object.setPrototypeOf || function(T, Z) {
          return T.__proto__ = Z, T;
        }, Ne(w, C);
      }
      function _e(w) {
        return _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
          return C.__proto__ || Object.getPrototypeOf(C);
        }, _e(w);
      }
      function ve(w, C, T, Z) {
        var ae, pe, G, M = w, S = !1, ye = function(Ue) {
          (function(I, k) {
            if (typeof k != "function" && k !== null)
              throw new TypeError("Super expression must either be null or a function");
            I.prototype = Object.create(k && k.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), k && Ne(I, k);
          })(ot, Ue);
          var je, Oe, be, ke, Vn = (je = ot, Oe = Me(), function() {
            var I, k = _e(je);
            if (Oe) {
              var X = _e(this).constructor;
              I = Reflect.construct(k, arguments, X);
            } else
              I = k.apply(this, arguments);
            return ne(this, I);
          });
          function ot() {
            var I;
            return function(k, X) {
              if (!(k instanceof X))
                throw new TypeError("Cannot call a class as a function");
            }(this, ot), (I = Vn.call(this))._wrapper = void 0, I._component = void 0, I._props = void 0, I._slotChildren = void 0, I._mounted = !1, I._props = {}, I._slotChildren = [], new MutationObserver(function(k) {
              for (var X = 0; X < k.length; X++) {
                var ee = k[X];
                !S || ee.type !== "attributes" || ee.target !== Y(I) || ee.attributeName && I.syncAttribute(ee.attributeName);
              }
            }).observe(Y(I), { childList: !0, subtree: !0, characterData: !0, attributes: !0 }), I;
          }
          return be = ot, ke = [{ key: "createEventProxies", value: function(I) {
            var k = this, X = {};
            return I && I.forEach(function(ee) {
              var ie = c(f(ee));
              X[ie] = function() {
                for (var Ae = arguments.length, i = new Array(Ae), u = 0; u < Ae; u++)
                  i[u] = arguments[u];
                k.dispatchEvent(a(ee, i));
              };
            }), X;
          } }, { key: "syncAttribute", value: function(I) {
            var k, X = f(I), ee = void 0;
            this.hasOwnProperty(I) ? ee = this[I] : this.hasAttribute(I) && (ee = this.getAttribute(I)), this._props[X] = function(ie, Ae) {
              var i = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}).type;
              if (E(i))
                return ie === "true" || ie === "false" ? ie === "true" : ie === "" || ie === Ae || ie != null;
              if (V(i)) {
                var u = parseFloat(ie);
                return isNaN(u) ? ie : u;
              }
              return ie;
            }(ee, I, G[X]), (k = this._component) === null || k === void 0 || k.$forceUpdate();
          } }, { key: "syncSlots", value: function() {
            var I;
            this._slotChildren = function(k, X) {
              for (var ee = [], ie = 0, Ae = k.length; ie < Ae; ie++)
                ee.push(B(k[ie], X));
              return ee;
            }(this.childNodes, T), (I = this._component) === null || I === void 0 || I.$forceUpdate();
          } }, { key: "syncInitialAttributes", value: function() {
            var I, k = this;
            this._props = (I = {}, pe.forEach(function(X) {
              I[X] = void 0;
            }), I), ae.forEach(function(X) {
              k.syncAttribute(X);
            });
          } }, { key: "connectedCallback", value: function() {
            S && this.syncInitialAttributes();
            var I = this.createEventProxies(M.emits), k = this;
            this._wrapper = C({ render: function() {
              var X = Object.assign({}, k._props, I);
              return delete X.dataVApp, T(M, X, function() {
                return k._slotChildren;
              });
            }, mounted: function() {
              k._mounted = !0;
            }, unmounted: function() {
              k._mounted = !1;
            } }), this.syncSlots(), this._component = this._wrapper.mount(this), Z != null && Z.connectedCallback && Z.connectedCallback.bind(this)();
          } }, { key: "disconnectedCallback", value: function() {
            var I;
            (I = this._wrapper) === null || I === void 0 || I.unmount();
          } }], ke && ce(be.prototype, ke), ot;
        }(L(HTMLElement));
        return function() {
          if (!S) {
            var Ue = Array.isArray(M.props) ? M.props : Object.keys(M.props || {});
            ae = Ue.map(m), pe = Ue.map(f);
            var je = Array.isArray(M.props) ? {} : M.props || {};
            G = pe.reduce(function(Oe, be, ke) {
              return Oe[be] = je[Ue[ke]], Oe;
            }, {}), S = !0;
          }
        }(), ye;
      }
      return o.default;
    })();
  });
})(wl);
const xl = eo, Dl = { class: "font-bold text-red-400 text-4xl" }, Vl = /* @__PURE__ */ Ac('<div><button class="btn">Button</button></div><div><label for="my-modal" class="btn">open modal</label><input type="checkbox" id="my-modal" class="modal-toggle"><div class="modal"><div class="modal-box"><h3 class="font-bold text-lg">Congratulations random Internet user!</h3><p class="py-4">You&#39;ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p><div class="modal-action"><label for="my-modal" class="btn">Yay!</label></div></div></div></div>', 2), cs = /* @__PURE__ */ Ui({
  __name: "index",
  props: {
    msg: String
  },
  setup(e) {
    return (t, n) => (Cc(), Ic(Ce, null, [
      yo("div", Dl, "Hello Ping " + Es(e.msg), 1),
      Vl
    ], 64));
  }
}), Cl = xl(cs, El, Jc);
window.customElements.define("hello-ping", Cl);
const Tl = {
  version: "0.0.1",
  components: {
    HelloPing: cs
  }
};
export {
  Tl as default
};
